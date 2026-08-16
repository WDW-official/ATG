import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VolunteerPage() {
  return (
    <main>
      <Header />
      <section className="innerHero volunteerHero">
        <div className="innerHeroCopy">
          <p className="eyebrow">Volunteer with us</p>
          <h1>Kindness<br/><em>needs people.</em></h1>
          <p>Volunteers are the heart of what we do. Give your time, skills and compassion to create moments of dignity, connection and hope.</p>
        </div>
        <div className="innerHeroMedia"><img src="https://res.cloudinary.com/dzn1k1z8r/image/upload/v1786576898/ATG_Medical_Community_Outreach_ngysru.svg" alt="ATG medical community outreach" /><span>Time / Skills / Compassion</span></div>
      </section>

      <section className="volunteerBenefits sectionPad">
        <div className="sectionIntroSmall"><p className="eyebrow">Why volunteer?</p><h2>A willing heart<br/>is enough to start.</h2></div>
        <div className="benefitGrid">
          <div><span>01</span><strong>Make a real difference</strong><p>Contribute directly to meaningful moments in people’s lives.</p></div>
          <div><span>02</span><strong>Find community</strong><p>Be part of a compassionate, purpose-driven network.</p></div>
          <div><span>03</span><strong>Serve meaningfully</strong><p>Support humanitarian and social initiatives with practical action.</p></div>
          <div><span>04</span><strong>Grow while giving</strong><p>Develop personally while serving others.</p></div>
        </div>
      </section>

      <section className="whoCan sectionPad">
        <div><p className="eyebrow">Who can volunteer?</p><h2>There is a place<br/><em>for you here.</em></h2></div>
        <p>Anyone who believes in kindness and community. Whether you are a student, professional, creative, or simply someone who wants to give back, ATG welcomes willing hearts.</p>
      </section>

      <section className="signupPanel sectionPad">
        <div className="signupCopy">
          <p className="eyebrow gold">Join us</p>
          <h2>One life.<br/>One community.<br/><em>One generation at a time.</em></h2>
          <p>If this speaks to you, we would love to welcome you.</p>
          <a href="mailto:Athousandgenerationfoundation@gmail.com">Athousandgenerationfoundation@gmail.com</a>
          <a href="https://instagram.com/athousandgeneration">@athousandgeneration</a>
        </div>
        <form className="volunteerForm" action="mailto:Athousandgenerationfoundation@gmail.com" method="post" encType="text/plain">
          <label>Full name<input name="name" required placeholder="Your name" /></label>
          <label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label>
          <label>Phone number<input name="phone" placeholder="+234..." /></label>
          <label>How would you like to help?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Humanitarian outreach</option><option>Youth & education</option><option>Elderly care</option><option>Storytelling & creative support</option><option>General volunteering</option></select></label>
          <label className="fullField">Tell us a little about yourself<textarea name="message" rows={5} placeholder="Skills, availability, or what draws you to ATG..." /></label>
          <button className="button buttonGold fullField" type="submit" data-mobile-label="Send">Send volunteer interest</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
