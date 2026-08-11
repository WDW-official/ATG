import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvolvementModals from "@/components/InvolvementModals";

export default function GetInvolvedPage() {
  return (
    <main>
      <Header />
      <section className="innerHero involvedHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">Get involved</p>
          <h1>Help kindness<br/><em>travel further.</em></h1>
          <p>Whether you give your time, skills, or resources, your contribution helps turn compassion into practical action.</p>
        </div>
        <div className="innerHeroMedia involvedHeroImage">
          <img src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786418488/ATG3_iqft0t.jpg" alt="ATG get involved community moment" />
          <span>Volunteer / Donate / Partner</span>
        </div>
      </section>

      <InvolvementModals />

      <section className="contactStrip">
        <div><small>Email</small><a href="mailto:Athousandgenerationfoundation@gmail.com">Athousandgenerationfoundation@gmail.com</a></div>
        <div><small>Instagram</small><a href="https://instagram.com/athousandgeneration">@athousandgeneration</a></div>
      </section>
      <Footer />
    </main>
  );
}
