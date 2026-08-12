import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const pillars = [
  ["01","Humanitarian outreach & community support"],
  ["02","Education & youth empowerment"],
  ["03","Volunteerism & civic engagement"],
  ["04","Intergenerational collaboration"],
  ["05","Storytelling & advocacy"]
];

const programmes = [
  {year:"2024", title:"LVC Boot Camp for Teenagers", copy:"A leadership, values, and capacity-building programme designed to equip teenagers with essential life skills, confidence, and a strong sense of purpose.", image:"/images/outreach-wide.svg"},
  {year:"2024", title:"Elderly Home Visit with Relief Materials", copy:"A compassionate outreach focused on essential relief items, emotional support, companionship, and human connection for older persons.", image:"/images/outreach-portrait.svg"},
  {year:"2025", title:"Elderly Home Visit — Activities, Relief & Support", copy:"An expanded intergenerational engagement programme combining interactive activities, material support, and monetary assistance to promote dignity, joy, and well-being.", image:"/images/outreach-hero.svg"}
];

export default function ProgrammesPage() {
  return (
    <main>
      <Header />
      <section className="innerHero programmeHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">Our work</p>
          <h1>Compassion,<br/><em>made practical.</em></h1>
          <p>Programmes that uplift, empower and connect people across generations.</p>
        </div>
        <div className="lineArt" aria-hidden="true"><i/><i/><i/></div>
      </section>

      <section className="pillars sectionPad">
        <div className="sectionIntroSmall">
          <p className="eyebrow">What we do</p>
          <h2>Action with<br/>human connection.</h2>
        </div>
        <div className="pillarList">
          {pillars.map(([n,t]) => <div className="pillar" key={n}><span>{n}</span><strong>{t}</strong></div>)}
        </div>
      </section>

      <section className="programmeList sectionPad">
        <div className="programmeHeading">
          <p className="eyebrow">Programmes</p>
          <h2>Impact is also<br/><em>how we give.</em></h2>
        </div>
        {programmes.map((p, i) => (
          <article className="programmeCard" key={p.title}>
            <div className="programmeImage"><img src={p.image} alt="" /><span>{p.year}</span></div>
            <div className="programmeCopy"><small>0{i+1} / {p.year}</small><h3>{p.title}</h3><p>{p.copy}</p></div>
          </article>
        ))}
      </section>

      <section className="pageCTA">
        <p className="eyebrow">Be part of the next one</p>
        <h2>Turn empathy<br/><em>into action.</em></h2>
        <div><Link className="button buttonGold" href="/volunteer">Become a volunteer</Link><Link className="textLink" href="/get-involved">Other ways to help →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
