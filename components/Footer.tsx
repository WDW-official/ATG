import Link from "next/link";
import { ATG_LOGO_URL } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="motion-safe:animate-[section-fade_.75s_ease-out_both]">
      <Link className="brand footerBrand" href="/">
        <img src={ATG_LOGO_URL} alt="" className="brandMark" />
        <span><em><strong>A Thousand<br/> Generation</strong></em></span>
      </Link>
      <p>Choose kindness. Lead with compassion. Be the difference.</p>
      <div className="footerLinks">
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/pledge">Take the pledge</Link>
        <a href="mailto:Athousandgenerationfoundation@gmail.com">Email</a>
      </div>
    </footer>
  );
}
