import '../../styles/components/home/AboutMeSection.css';

export default function AboutMeSection() {
  return (
    <section className="aboutme-section">
      <div className="aboutme-left">
        <div className="aboutme-image-circle">
          <img src="https://pngimg.com/d/businessman_PNG6564.png" alt="John Doe" className="aboutme-img" />
          <div className="skill-tag tag1">UX/UI Design</div>
          <div className="skill-tag tag2">Mobile App Design</div>
          <div className="skill-tag tag3">Website Design</div>
          <div className="skill-tag tag4">Design System</div>
          <div className="skill-tag tag5">Prototype</div>
          <div className="skill-tag tag6">Dashboard</div>
          <div className="skill-tag tag7">Wireframe Design</div>
        </div>
      </div>
      <div className="aboutme-right">
        <div className="aboutme-label">— About Me</div>
        <h1>
          Who is <span className="aboutme-highlight">Harsh Rajput?</span>
        </h1>
        <p className="aboutme-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="aboutme-stats">
          <div><span className="stat-number">600+</span><br />Project Completed</div>
          <div><span className="stat-number">50+</span><br />Industry Covered</div>
          <div><span className="stat-number">18+</span><br />Years of Experience</div>
        </div>
        <div className="aboutme-actions">
          <button className="aboutme-cv-btn">Download CV</button>
          <span className="aboutme-signature">Harsh Rajput</span>
        </div>
      </div>
    </section>
  );
} 