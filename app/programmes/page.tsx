import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const pillars = [
  ["01","Humanitarian outreach & community support"],
  ["02","Volunteerism & civic engagement"],
  ["03","Intergenerational collaboration"],
  ["04","Storytelling & advocacy"]
];

const programmes = [
  {year:"2024", title:"LVC Boot Camp for Teenagers", copy:"A leadership, values, and capacity-building programme designed to equip teenagers with essential life skills, confidence, and a strong sense of purpose.", image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1787312915/IMG_2704_pwjr3d.heic"},
  {year:"2024", title:"Elderly Home Visit with Relief Materials", copy:"A compassionate outreach focused on essential relief items, emotional support, companionship, and human connection for older persons.", image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/ATG5_rgyrcl.jpg"},
  {year:"2025", title:"Elderly Home Visit Activities, Relief & Support", copy:"An expanded intergenerational engagement programme combining interactive activities, material support, and monetary assistance to promote dignity, joy, and well-being.", image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/Financial_Support_vgmj7u.heic"}
];

const programmeMedia = [
  {type:"image", src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418690/ATG9_jolrgm.jpg", label:"Programme moment 01"},
  {type:"image", src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418485/ATG2_cjj1g9.jpg", label:"Programme moment 02"},
  {type:"image", src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418485/ATG6_s5cl4x.jpg", label:"Programme moment 03"},
  {type:"image", src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/ATG1_m2e645.jpg", label:"Programme moment 04"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418688/ATG-Video_2_p0ove1.mov", label:"Programme video 01"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418686/ATG-Video_4_povppf.mov", label:"Programme video 02"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418686/ATG-Video_3_iwnah8.mp4", label:"Programme video 03"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418685/ATG-Video_1_oyobnq.mov", label:"Programme video 04"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1787313755/IMG_2703_gu9mzm.mov", label:"Programme video 04"},
  {type:"video", src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1787313097/IMG_2701_qmur1s.mov", label:""},
];

export default function ProgrammesPage() {
  return (
    <main>
      <Header />
      <section className="innerHero programmeHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">Our work</p>
          <h1>Where kindness<br/><em>becomes action.</em></h1>
          <p>From showing up to showing care, we create moments that remind people they matter.</p>
        </div>
        <div className="introPortrait">
          <img className="uploadedImage" src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786576898/ATG_Relief_Support_ds4dfl.svg" alt="ATG golden generation community moment" />
          <div className="imageFallback portraitFallback" aria-hidden="true"/>
        </div>
      </section>

      <section className="pillars sectionPad">
        <div className="sectionIntroSmall">
          <p className="eyebrow">What we do</p>
          <h2>Action with<br/>human connection.</h2>
        </div>
        <div className="pillarGrid">
          {pillars.map(([n, t]) => (
            <article className="pillarCard" key={n}>
              <span>{n}</span>
              <strong>{t}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="programmeList sectionPad">
        <div className="programmeHeading">
          <p className="eyebrow">Programmes</p>
          <h2>Impact is also<br/><em>how we give.</em></h2>
        </div>
        <div className="programmeGrid">
          {programmes.map((p, i) => (
            <article className="programmeCard" key={p.title}>
              <div className="programmeCardImage">
                <img src={p.image} alt="" />
              </div>
              <div className="programmeCopy"><small>0{i+1} / {p.year}</small><h3>{p.title}</h3><p>{p.copy}</p></div>
            </article>
          ))}
        </div>
        <div className="programmeMedia">
          <div className="programmeMediaHeader">
            <p className="eyebrow">Moments</p>
            <h3>Seen, shared<br/><em>and remembered.</em></h3>
          </div>
          <div className="programmeMediaGrid">
            {programmeMedia.map((item, i) => (
              <figure className="programmeMediaItem" key={item.src}>
                {item.type === "video" ? (
                  <video src={item.src} controls preload="metadata" playsInline aria-label={item.label} />
                ) : (
                  <a href={item.src} target="_blank" rel="noreferrer" aria-label={`View ${item.label}`}>
                    <img src={item.src} alt={item.label} />
                  </a>
                )}
                {/* <figcaption><span>{String(i + 1).padStart(2, "0")}</span><em>{item.type}</em></figcaption> */}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pageCTA">
        <p className="eyebrow">Be part of the next one</p>
        <h2>Turn empathy<br/><em>into action.</em></h2>
        <div><Link className="button buttonGold" href="/volunteer" data-mobile-label="Volunteer">Become a volunteer</Link><Link className="textLink" href="/get-involved">Other ways to help →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
