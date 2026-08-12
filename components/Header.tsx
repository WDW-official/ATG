"use client";

import Link from "next/link";
import { openInvolvementModal } from "@/components/InvolvementModals";
import { ATG_LOGO_URL } from "@/lib/brand";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Our Work", "/programmes"],
  ["Impact", "/impact"],
  ["Pledge", "/pledge"],
  ["Get Involved", "/get-involved"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    const [path, hash] = href.split("#");

    if (hash) return path === "/" && pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="siteHeader motion-safe:animate-[hero-rise_.55s_ease-out_both]">
      <Link className="brand" href="/" aria-label="A Thousand Generation home" onClick={() => setIsOpen(false)}>
        <img src={ATG_LOGO_URL} alt="" className="brandMark" />
        <span><em><strong>A Thousand<br/> Generation</strong></em></span>
      </Link>
      <nav className="desktopNav" aria-label="Primary">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href} aria-current={isActive(href) ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      <button className="button buttonGold headerDonate transition-transform duration-300 hover:-translate-y-0.5" type="button" onClick={() => openInvolvementModal("donate")}>Donate</button>
      <button
        className={`menuButton mobileNavToggle${isOpen ? " isOpen" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span/><span/>
      </button>
      <nav className="mobileNavPanel" id="mobile-navigation" data-open={isOpen} aria-label="Mobile primary">
        {navItems.map(([label, href], index) => (
          <Link
            href={href}
            key={href}
            aria-current={isActive(href) ? "page" : undefined}
            style={{"--item-index": index} as CSSProperties}
            onClick={() => setIsOpen(false)}
          >
            <span>0{index + 1}</span>{label}
          </Link>
        ))}
        <button
          className="mobileDonate"
          type="button"
          style={{"--item-index": navItems.length} as CSSProperties}
          onClick={() => {
            setIsOpen(false);
            openInvolvementModal("donate");
          }}
        >
          <span>07</span>Donate
        </button>
      </nav>
    </header>
  );
}
