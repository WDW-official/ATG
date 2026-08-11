import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const values = ["Kindness","Dignity","Empathy","Community","Inclusion","Integrity","Legacy"];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="innerHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">About ATG</p>
          <h1>Compassion<br/><em>across generations.</em></h1>
          <p>A movement built on the belief that intentional kindness can create lasting social transformation.</p>
        </div>
        <div className="innerHeroMedia">
          <img src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418484/ATG4_z7sp1t.jpg" alt="ATG community outreach portrait" />
          <span>Humanity / Dignity / Legacy</span>
        </div>
      </section>

      <section className="splitEditorial sectionPad">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>Light in a<br/>dark world.</h2>
        </div>
        <div className="readingColumn">
          <p>A Thousand Generations (ATG) is a movement of compassion, dedicated to spreading kindness through practical and human-centred action.</p>
          <p>A Thousand Generation Network for Humanitarian and Social Advancement is a non-profit, non-governmental organization established to promote compassion-driven humanitarian action, social development, and community empowerment.</p>
          <p>We inspire individuals and communities to lead with empathy, take collective responsibility, and build a society where people of all ages are supported, connected, and empowered.</p>
        </div>
      </section>

      <section className="darkEditorial">
        <div className="darkNumber">01</div>
        <div>
          <p className="eyebrow gold">Why we care</p>
          <h2>Small acts can<br/>restore dignity.</h2>
        </div>
        <div className="readingColumn lightText">
          <p>Life can feel overwhelming, lonely, and unfair, especially for those who are vulnerable, overlooked, or unheard.</p>
          <p>A visit, a conversation, a shared moment, or a helping hand can restore dignity and hope. Compassion is a shared responsibility that connects generations and strengthens communities.</p>
        </div>
      </section>

      <section className="valuesSection sectionPad">
        <p className="eyebrow">Our core values</p>
        <div className="valueGrid">
          {values.map((value, i) => <div className="valueCell" key={value}><span>0{i+1}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <section className="pageCTA">
        <p className="eyebrow">A shared responsibility</p>
        <h2>Help kindness travel<br/><em>further.</em></h2>
        <div><Link className="button buttonGold" href="/volunteer">Volunteer with us</Link><Link className="textLink" href="/programmes">Explore our work →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
