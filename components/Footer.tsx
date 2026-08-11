import Link from "next/link";

export default function Footer() {
  return (
    <footer className="motion-safe:animate-[section-fade_.75s_ease-out_both]">
      <Link className="brand footerBrand" href="/">
        <img src="/images/atg-mark.svg" alt="" className="brandMark" />
        <span><strong>A Thousand</strong><em>Generation</em></span>
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
