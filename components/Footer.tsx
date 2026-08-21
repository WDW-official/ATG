import Link from "next/link";
import { ATG_LOGO_URL } from "@/lib/brand";
import { BadgeCheck, HeartHandshake, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="motion-safe:animate-[section-fade_.75s_ease-out_both]">
      <Link className="brand footerBrand" href="/">
        <img src={ATG_LOGO_URL} alt="" className="brandMark" />
        <span><em><strong>A Thousand<br/> Generation</strong></em></span>
      </Link>
      <div className="footerCenter">
        <p>Choose kindness. Lead with compassion. Be the difference.</p>
        <div className="footerActions footerLinks">
          <Link href="/volunteer"><HeartHandshake aria-hidden="true" />Volunteer</Link>
          <Link href="/pledge"><BadgeCheck aria-hidden="true" />Take the pledge</Link>
        </div>
        <div className="footerSocials">
          <a href="https://www.instagram.com/athousandgeneration" target="_blank" rel="noreferrer" aria-label="Instagram: @athousandgeneration"><FaInstagram aria-hidden="true" /><span>@athousandgeneration</span></a>
          <a href="https://www.linkedin.com/company/a-thousand-generation-foundation/" target="_blank" rel="noreferrer" aria-label="LinkedIn: A Thousand Generation"><FaLinkedinIn aria-hidden="true" /><span>A Thousand Generation</span></a>
          <a href="mailto:athousandgenerationfoundation@gmail.com" aria-label="Email: athousandgenerationfoundation@gmail.com"><Mail aria-hidden="true" /><span>athousandgenerationfoundation@gmail.com</span></a>
        </div>
      </div>
      <div className="footerCopyright">© {currentYear} A Thousand Generation. All rights reserved.</div>
    </footer>
  );
}
