import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CountUpStat from "@/components/CountUpStat";
import { ATG_LOGO_URL } from "@/lib/brand";

const work = [
  ["01", "Humanitarian Outreach", "Practical support that meets people where they are."],
  ["02", "Elderly Care", "Honouring older people with dignity, health support and companionship."],
  ["03", "Volunteerism", "Turning goodwill into coordinated, useful action."],
  ["04", "Advocacy & Storytelling", "Sharing human stories that create empathy and lasting change."]
];

export default function HomePage() {
  return (
    <main>
      <Header />

      <section id="top" className="hero motion-safe:animate-[hero-rise_.8s_ease-out_both]">
        <div className="cloud cloudOne" />
        <div className="cloud cloudTwo" />
        <div className="heroCopy">
          {/* <p className="eyebrow">A Thousand Generation</p> */}
          <h1><span>Light in a<br/>dark world.</span></h1>
          <div className="goldRule" />
          <p className="heroLead">Honouring lives. Sharing kindness. Connecting generations.</p>
          <p className="heroBody">
            A movement of compassion turning empathy into action and ensuring that people are seen,
            valued and never forgotten.
          </p>
          <div className="heroActions">
            <a className="button buttonGold transition-transform duration-300 hover:-translate-y-1" href="/get-involved" data-mobile-label="Support">Support our work</a>
            <a className="textLink transition-colors duration-300 hover:text-[#9b7625]" href="/about">Discover ATG <span>→</span></a>
          </div>
        </div>

        <div className="heroImageWrap shadow-2xl shadow-black/10 transition-transform duration-700 hover:scale-[1.015]">
          <img className="heroImage uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786576898/ATG_Art_Therapy_kaukkk.svg" alt="ATG outreach moment" />
          <div className="imageFallback heroFallback" aria-hidden="true"/>
          <div className="imageCaption"> Dignity, always.</div>
        </div>
        <div className="heroIndex">ATG / 001</div>
      </section>

      <section id="about" className="storyIntro sectionPad motion-safe:animate-[hero-rise_.8s_ease-out_.15s_both]">
        <div className="sectionNumber">01</div>
        <div className="introTitle">
          <p className="eyebrow">The golden generation</p>
          <h2>Every life<br/>carries a story.</h2>
        </div>
        <div className="introPortrait">
          <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786576899/ATG_Medical_Outreach_qinq2l.svg" alt="ATG golden generation community moment" />
          <div className="imageFallback portraitFallback" aria-hidden="true"/>
        </div>
        <div className="introText">
          <p>
            Some have lived through decades of change. Raised families. Built communities.
            Carried wisdom from one generation to another.
          </p>
          <p className="statement">We believe they should never feel forgotten.</p>
        </div>
      </section>

      <section id="work" className="workSection sectionPad">
        <div className="workImage">
          <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418484/ATG8_qtbvnp.jpg" alt="ATG volunteers at a community outreach" />
          <div className="imageFallback wideFallback" aria-hidden="true"/>
          <div className="imageTag">People. Community. Warmth.</div>
        </div>
        <div className="workContent">
          <p className="eyebrow">Who we are</p>
          <h2>Compassion,<br/><span>made practical.</span></h2>
          <p className="workLead">
            We create practical opportunities for people to care, contribute and build bridges
            between generations.
          </p>
          <div className="workList">
            {work.map(([n, title, copy]) => (
              <a className="workRow group" href="/programmes" key={n}>
                <span className="workNo">{n}</span>
                <span className="workText"><strong>{title}</strong><small>{copy}</small></span>
                <span className="workArrow transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="belief">
        <div className="beliefArt">
          <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418484/ATG5_rgyrcl.jpg" alt="" />
          <div className="imageFallback beliefFallback" aria-hidden="true"/>
        </div>
        <div className="beliefCopy">
          <p className="eyebrow gold">Our belief</p>
          <h2>Kindness should<br/>outlive us.</h2>
          <p>One generation caring for another.</p>
        </div>
        <div className="beliefLine" />
      </section>

      <section id="impact" className="impact sectionPad">
        <div className="impactHeader">
          <p className="eyebrow">Impact in motion</p>
          <h2>Care you can<br/>see and feel.</h2>
        </div>
        <div className="stats">
          <div className="stat transition-colors duration-300 hover:bg-white/60"><CountUpStat value={300} suffix="+" /><span>Lives touched through acts of kindness</span></div>
          <div className="stat transition-colors duration-300 hover:bg-white/60"><CountUpStat value={10000} suffix="+" /><span>More lives to reach, together</span></div>
          <div className="stat transition-colors duration-300 hover:bg-white/60"><CountUpStat value={4} suffix="+" /><span>Generations connected through compassion and care</span></div>
        </div>
      </section>

      <section id="stories" className="stories sectionPad">
        <div className="storiesHead">
          <div>
            <p className="eyebrow">Stories</p>
            <h2>Lives. Moments.<br/>Generations.</h2>
          </div>
          <p>Real moments of care, connection and community — presented with dignity and restraint.</p>
        </div>
        <div className="storyGrid">
          <figure className="storyLarge">
            <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/Financial_Support_vgmj7u.heic" alt="Financial support moment at an ATG outreach" />
            <div className="imageFallback wideFallback" aria-hidden="true"/>
            <figcaption>Community / Connection</figcaption>
          </figure>
          <figure>
            <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418484/ATG1_m2e645.jpg" alt="Portrait from ATG outreach" />
            <div className="imageFallback portraitFallback" aria-hidden="true"/>
            <figcaption>Portrait / Wisdom</figcaption>
          </figure>
          <figure>
            <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418484/ATG7_qia2qo.jpg" alt="ATG outreach moment" />
            <div className="imageFallback heroFallback" aria-hidden="true"/>
            <figcaption>Care / Action</figcaption>
          </figure>
        </div>
      </section>

      <section id="involved" className="cta sectionPad">
        <div className="ctaCloud ctaCloudOne"/>
        <div className="ctaCloud ctaCloudTwo"/>
        <p className="eyebrow">Your turn</p>
        <h2>A thousand generations<br/><span>starts with one person.</span></h2>
        <div className="ctaGrid">
          <a href="/volunteer" className="ctaItem transition-colors duration-300 hover:bg-white/50"><span>01</span><strong>Give your time.</strong><em>Volunteer →</em></a>
          <a href="/get-involved#donate" className="ctaItem transition-colors duration-300 hover:bg-white/50"><span>02</span><strong>Give your support.</strong><em>Donate →</em></a>
          <a href="/get-involved#partner" className="ctaItem transition-colors duration-300 hover:bg-white/50"><span>03</span><strong>Build with us.</strong><em>Partner →</em></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
