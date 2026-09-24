import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProgrammeCards, { type Programme } from "@/components/ProgrammeCards";

const pillars = [
  ["01","Humanitarian outreach & community support"],
  ["02","Volunteerism & civic engagement"],
  ["03","Intergenerational collaboration"],
  ["04","Storytelling & advocacy"]
];

const programmes: Programme[] = [
  {year:"2024", 
    title:"LVC Boot Camp for Teenagers", 
    copy:"A leadership, values, and capacity-building programme designed to equip teenagers with essential life skills, confidence, and a strong sense of purpose.", 
    image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1787312915/IMG_2704_pwjr3d.heic", 
    details:"The LVC Summer Bootcamp brought teenagers and young people together for a season of learning, growth and connection. Through engaging activities and practical learning, participants were encouraged to build character, develop life skills and grow in confidence, while exploring the values that shape how they relate to themselves, others and their communities.<br/>As part of our commitment to intergenerational impact, the programme invested in the younger generation while creating opportunities for young people to understand the importance of community, empathy, responsibility and caring for those who came before them. We believe that meaningful change can happen when generations are connected, with young people equipped to become thoughtful contributors to the communities they will one day lead and shape.", 
    focus:["Leadership and personal values", "Confidence and life skills", "Purpose and community responsibility"]
  },
  {year:"2024", 
    title:"Elderly Home Visit with Relief Materials", 
    copy:"A compassionate outreach focused on essential relief items, emotional support, companionship, and human connection for older persons.", 
    image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/ATG5_rgyrcl.jpg", 
    details:"Our 2024 Kindness Visit to an elderly home was a simple expression of care and compassion. <br/> We spent time with the residents and delivered relief materials and essential supplies to support their everyday needs. The visit was rooted in a simple belief: small acts of kindness can make someone feel remembered, valued and cared for.", 
    focus:["Essential relief materials", "Companionship and listening", "Dignity-centred support"]
  },
  {year:"2025",
    title:"Elderly Home Visit Activities, Relief & Support", 
    copy:"An expanded intergenerational engagement programme combining interactive activities, material support, and monetary assistance to promote dignity, joy, and well-being.", 
    image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1786418484/Financial_Support_vgmj7u.heic", 
    details:"Our 2025 visit to an elderly home centred on connection, creativity and practical care. We spent time with seniors through meaningful conversations, music and a relaxed Sip & Paint session, creating space for expression, laughter and companionship. <br/> We brought art supplies and creative materials for the residents to enjoy, using art therapy as a simple way to encourage creativity, engagement and emotional wellbeing. Beyond the activities, we provided relief materials and financial support, including support towards bed space maintenance and other essential needs at the home.<br/> It was a reminder that caring for older people goes beyond meeting physical needs. Sometimes, it means sitting with them, listening to their stories, creating something together, sharing a song, and simply being present.", 
    focus:["Intergenerational activities", "Material and financial support", "Connection, joy and well-being"]
  },
  {year:"2026", 
    title:"Elderly Health & Wellness Initiative", 
    copy:"A focused health and wellness outreach supporting older persons through care, companionship, basic wellness attention, and practical encouragement for healthier daily living.", 
    image:"https://res.cloudinary.com/dzn1k1z8r/image/upload/v1790227295/Some_community_members_with_the_team_ny77kb.jpg", 
    details:"Our Elderly Health & Wellness Initiative in Piwoyi, Abuja, brought together health professionals and community volunteers to promote the health, dignity and wellbeing of older people in the community. <br/> The initiative provided health screenings, medical consultations, health education and medication support, alongside the distribution of food and essential care items. Through health talks, elderly residents received practical guidance on healthy living, managing their wellbeing and incorporating simple, safe exercises they can do at home to support mobility and physical activity. <br/> To extend the impact beyond the outreach, remaining medications and medical supplies were donated to the Piwoyi Primary Health Care Centre, supporting the facility in continuing to provide care to members of the community.", 
    focus:["Health screenings", "Medical consultations", "Health talks" , "Simple home exercises ", " Medication support", "Food & essential care A practical expression of our belief that kindness should meet people where they are and continue wherever it is needed."]
  }
];

const programmeMedia = [
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418690/ATG9_jolrgm.jpg", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418485/ATG2_cjj1g9.jpg", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418485/ATG6_s5cl4x.jpg", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_auto,q_auto/v1786418484/ATG1_m2e645.jpg", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/v1790227295/Some_community_members_with_the_team_ny77kb.jpg", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1790227263/IMG_2957_f5wgg9.heic", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1790227269/A_picture_speaks_more_than_a_thousand_words_hq4i1y.heic", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/v1790227260/Foodpack_distribution_uros0r.jpg", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1790227325/The_People_of_the_Community_nlst4t.heic", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"image", 
    src:"https://res.cloudinary.com/dzn1k1z8r/image/upload/f_jpg,q_auto/v1790227314/Volunteers_szmdb2.heic", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418688/ATG-Video_2_p0ove1.mov", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418686/ATG-Video_4_povppf.mov", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418686/ATG-Video_3_iwnah8.mp4", 
    label:"Elderly Home Visit Activities",
    year:"2025"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/f_auto,q_auto/v1786418685/ATG-Video_1_oyobnq.mov", 
    label:"Elderly Home Visit Activities",
    year:"2024"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1787313755/IMG_2703_gu9mzm.mov", 
    label:"LVC Boot Camp for Teenagers",
    year:"2024"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1787313097/IMG_2701_qmur1s.mov", 
    label:"LVC Boot Camp for Teenagers",
    year:"2024"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1790224697/Medication_dispensation_fparng.mov", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1790223865/Medical_Check_xr9r8g.mp4", 
    label:"Elderly Health & Wellness Initiative",
    year:"2026"
  },
  {type:"video", 
    src:"https://res.cloudinary.com/dzn1k1z8r/video/upload/v1790226303/PHC_Medication_donation_fwkjmz.mov", 
    label:"Elderly Health & Wellness Initiative" , 
    year:"2026"
  },
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
        <ProgrammeCards programmes={programmes} />
        <div className="programmeMedia">
          <div className="programmeMediaHeader">
            <p className="eyebrow">Moments</p>
            <h3>Seen, shared<br/><em>and remembered.</em></h3>
          </div>
          <div className="programmeMediaGrid">
            {programmeMedia.map((item, i) => (
              <figure className={`programmeMediaItem${item.type === "video" ? " programmeMediaVideo" : ""}`} key={item.src}>
                {item.type === "video" ? (
                  <video src={item.src} controls preload="metadata" playsInline aria-label={item.label} />
                ) : (
                  <a href={item.src} target="_blank" rel="noreferrer" aria-label={`View ${item.label}`}>
                    <img src={item.src} alt={item.label} />
                  </a>
                )}
                <figcaption><span>{item.year}</span><em>{item.label}</em></figcaption>
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
