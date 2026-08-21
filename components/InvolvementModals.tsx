"use client";

import { useEffect, useState } from "react";

const paths = [
  {
    id: "volunteer",
    no: "01",
    title: "Volunteer",
    copy: "Give your time, skills and compassion.",
    cta: "Join the volunteer community",
  },
  {
    id: "donate",
    no: "02",
    title: "Donate",
    copy: "Help ATG extend practical support and care to more people.",
    cta: "Register your support",
  },
  {
    id: "partner",
    no: "03",
    title: "Partner",
    copy: "Build meaningful humanitarian and social initiatives with us.",
    cta: "Start a partnership conversation",
  },
];

type ModalKind = "volunteer" | "donate" | "partner";
const modalEventName = "open-involvement-modal";

export function openInvolvementModal(kind: ModalKind) {
  window.dispatchEvent(new CustomEvent<ModalKind>(modalEventName, { detail: kind }));
}

export default function InvolvementModals() {
  return (
    <section className="involvePaths sectionPad">
      {paths.map(({ id, no, title, copy, cta }) => (
        <article id={id} className="involveCard" key={id}>
          <span>{no}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
          <button className="textLink modalTrigger" type="button" onClick={() => openInvolvementModal(id as ModalKind)}>
            {cta} →
          </button>
        </article>
      ))}
    </section>
  );
}

export function GlobalInvolvementModalHost() {
  const [activeModal, setActiveModal] = useState<ModalKind | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveModal(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const openModal = (event: Event) => {
      setActiveModal((event as CustomEvent<ModalKind>).detail);
    };

    window.addEventListener(modalEventName, openModal);
    return () => window.removeEventListener(modalEventName, openModal);
  }, []);

  return (
    <>
      {activeModal && (
        <div className="modalOverlay" role="presentation" onMouseDown={() => setActiveModal(null)}>
          <section
            className="registrationModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${activeModal}-modal-title`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modalClose" type="button" aria-label="Close registration form" onClick={() => setActiveModal(null)}>
              <span />
              <span />
            </button>
            {activeModal === "volunteer" && <VolunteerForm />}
            {activeModal === "donate" && <DonateForm />}
            {activeModal === "partner" && <PartnerForm />}
          </section>
        </div>
      )}
    </>
  );
}

function VolunteerForm() {
  return (
    <>
      <div className="modalIntro">
        <p className="eyebrow gold">Volunteer registration</p>
        <h2 id="volunteer-modal-title">Give your<br/><em>time.</em></h2>
        <p>Register your availability, skills, and preferred area of service.</p>
      </div>
      <form className="compactForm" action="mailto:Athousandgenerationfoundation@gmail.com" method="post" encType="text/plain">
        <label>Full name<input name="volunteer_name" required placeholder="Your name" /></label>
        <label>Email address<input type="email" name="volunteer_email" required placeholder="you@example.com" /></label>
        <label>Phone number<input name="volunteer_phone" placeholder="+234..." /></label>
        <label>Area of interest<select name="volunteer_interest" defaultValue=""><option value="" disabled>Select one</option><option>Humanitarian outreach</option><option>Elderly care</option><option>Creative support</option><option>General volunteering</option></select></label>
        <label className="fullField">Availability<textarea name="volunteer_message" rows={4} placeholder="Tell us when and how you would like to serve." /></label>
        <button className="button buttonGold fullField" type="submit" data-mobile-label="Volunteer">Register to volunteer</button>
      </form>
    </>
  );
}

function DonateForm() {
  return (
    <>
      <div className="modalIntro">
        <p className="eyebrow gold">Donation registration</p>
        <h2 id="donate-modal-title">Give your<br/><em>support.</em></h2>
        <p>Tell ATG how you would like to support the next outreach or programme.</p>
      </div>
      <form className="compactForm" action="mailto:Athousandgenerationfoundation@gmail.com" method="post" encType="text/plain">
        <label>Full name<input name="donor_name" required placeholder="Your name" /></label>
        <label>Email address<input type="email" name="donor_email" required placeholder="you@example.com" /></label>
        <label>Phone number<input name="donor_phone" placeholder="+234..." /></label>
        <label>Support type<select name="donation_type" defaultValue=""><option value="" disabled>Select one</option><option>One-time donation</option><option>Monthly support</option><option>Relief materials</option><option>Medical supplies</option><option>Other support</option></select></label>
        <label className="fullField">Donation note<textarea name="donation_note" rows={4} placeholder="Amount, items, or the programme you want to support." /></label>
        <button className="button buttonGold fullField" type="submit" data-mobile-label="Donate">Register donation interest</button>
      </form>
    </>
  );
}

function PartnerForm() {
  return (
    <>
      <div className="modalIntro">
        <p className="eyebrow gold">Partner registration</p>
        <h2 id="partner-modal-title">Build<br/><em>with us.</em></h2>
        <p>Share your organisation details and the kind of partnership you want to explore.</p>
      </div>
      <form className="compactForm" action="mailto:Athousandgenerationfoundation@gmail.com" method="post" encType="text/plain">
        <label>Contact name<input name="partner_name" required placeholder="Your name" /></label>
        <label>Work email<input type="email" name="partner_email" required placeholder="name@organisation.com" /></label>
        <label>Organisation<input name="organisation" placeholder="Organisation name" /></label>
        <label>Partnership area<select name="partnership_area" defaultValue=""><option value="" disabled>Select one</option><option>Programme sponsorship</option><option>Community outreach</option><option>Medical partnership</option><option>Media & advocacy</option></select></label>
        <label className="fullField">Partnership idea<textarea name="partnership_note" rows={4} placeholder="Tell us what you would like to explore with ATG." /></label>
        <button className="button buttonGold fullField" type="submit" data-mobile-label="Partner">Register partnership interest</button>
      </form>
    </>
  );
}
