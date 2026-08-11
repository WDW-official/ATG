import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const moments = [
  ["2024","LVC Boot Camp for Teenagers","Equipping young people with leadership skills, values and confidence for life."],
  ["2024","Elderly Home Visit","Providing essential relief items, companionship and care."],
  ["2025","Expanded Elderly Home Visit","Creating joyful, dignified experiences through activities, relief materials and monetary support."]
];

export default function ImpactPage() {
  return (
    <main>
      <Header />
      <section className="innerHero impactHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">Impact in action</p>
          <h1>Lives touched.<br/><em>Moments remembered.</em></h1>
          <p>For ATG, impact is not only measured in numbers. It is also measured in dignity, connection and the quality of care people experience.</p>
        </div>
        <div className="innerHeroMedia impactMedia"><img src="https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/Financial_Support_vgmj7u.heic" alt="ATG financial support moment" /><span>Care / Connection / Community</span></div>
      </section>

      <section className="timeline sectionPad">
        <div className="timelineIntro"><p className="eyebrow">A growing legacy</p><h2>Our impact<br/>in motion.</h2></div>
        <div className="timelineItems">
          {moments.map(([year,title,copy],i)=>(
            <article className="timelineItem" key={title}>
              <span className="timelineYear">{year}</span><span className="timelineDot"/>
              <div><small>0{i+1}</small><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="quoteBand">
        <p className="eyebrow gold">Our measure</p>
        <blockquote>“Impact is not only about what is given, but how it is given.”</blockquote>
        <p>With respect, warmth and genuine care.</p>
      </section>

      <section className="impactGallery sectionPad">
        <figure><img src="/images/outreach-portrait.svg" alt="Community portrait" /><figcaption>Seen.</figcaption></figure>
        <figure><img src="/images/outreach-wide.svg" alt="Community programme" /><figcaption>Supported.</figcaption></figure>
        <figure><img src="/images/outreach-hero.svg" alt="Outreach participant" /><figcaption>Valued.</figcaption></figure>
      </section>

      <section className="pageCTA">
        <p className="eyebrow">Create the next moment</p>
        <h2>Your contribution<br/><em>moves kindness forward.</em></h2>
        <div><Link className="button buttonGold" href="/get-involved">Get involved</Link><Link className="textLink" href="/pledge">Take the pledge →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
