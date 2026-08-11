import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PledgePage() {
  return (
    <main>
      <Header />
      <section className="pledgeHero">
        <div className="pledgeCloud one"/><div className="pledgeCloud two"/>
        <p className="eyebrow">Take the pledge</p>
        <h1>Choose kindness.<br/><em>Lead with compassion.</em><br/>Be the difference.</h1>
        <p>Join a growing community committed to building a more humane, connected and compassionate society — for today and for generations to come.</p>
        <a className="button buttonGold" href="#pledge">Make the pledge</a>
      </section>

      <section id="pledge" className="pledgeStatement sectionPad">
        <span className="pledgeNo">001</span>
        <div>
          <p className="eyebrow">A personal commitment</p>
          <h2>I choose to make<br/>kindness intentional.</h2>
          <p>I will look for opportunities to care, listen, include, support and act with dignity. I will help compassion travel from one person to another, and from one generation to the next.</p>
        </div>
        <div className="signatureCard">
          <p>Light in a dark world.</p>
          <div className="signatureLine"/>
          <small>Your name / Your promise</small>
          <Link className="textLink" href="/volunteer">Put the pledge into action →</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
