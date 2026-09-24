"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";

export type Programme = {
  year: string;
  title: string;
  copy: string;
  image: string;
  details: string;
  focus: string[];
};

export default function ProgrammeCards({ programmes }: { programmes: Programme[] }) {
  const [activeProgramme, setActiveProgramme] = useState<Programme | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openProgramme(programme: Programme, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveProgramme(programme);
  }

  function closeProgramme() {
    setActiveProgramme(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!activeProgramme) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProgramme();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProgramme]);

  return (
    <>
      <div className="programmeGrid">
        {programmes.map((programme, index) => (
          <button
            className="programmeCard"
            type="button"
            key={programme.title}
            aria-haspopup="dialog"
            onClick={(event) => openProgramme(programme, event.currentTarget)}
          >
            <div className="programmeCardImage">
              <img src={programme.image} alt="" />
            </div>
            <div className="programmeCopy">
              <small>0{index + 1} / {programme.year}</small>
              <h3>{programme.title}</h3>
              <p>{programme.copy}</p>
              <span className="programmeCardAction">View programme <ArrowUpRight aria-hidden="true" /></span>
            </div>
          </button>
        ))}
      </div>

      {activeProgramme && createPortal(
        <div className="programmeModalOverlay" role="presentation" onMouseDown={closeProgramme}>
          <section
            className="programmeModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="programme-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="programmeModalClose"
              type="button"
              aria-label="Close programme details"
              ref={closeButtonRef}
              onClick={closeProgramme}
            >
              <X aria-hidden="true" />
            </button>

            <div className="programmeModalImage">
              <img src={activeProgramme.image} alt="" />
              <span>{activeProgramme.year}</span>
            </div>
            <div className="programmeModalContent">
              <p className="eyebrow">Programme details</p>
              <h2 id="programme-modal-title">{activeProgramme.title}</h2>
              <p className="programmeModalLead">{activeProgramme.copy}</p>
              <div className="programmeModalDetails">
                {activeProgramme.details
                  .split(/<br\s*\/?>/i)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean)
                  .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
              <div className="programmeFocus">
                <small>Areas of focus</small>
                <ul>
                  {activeProgramme.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
