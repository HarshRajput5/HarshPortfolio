import React from 'react';
import '../../styles/components/home/ServicesSection.css';

const services = [
  {
    icon: '🖥️',
    title: 'UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...',
  },
  {
    icon: '🎨',
    title: 'Application Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...',
  },
  {
    icon: '🗂️',
    title: 'Website Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-tabs-scroll hide-on-mobile">
        <div className="services-tabs">
        <span className="tab active">App Development</span>
        <span className="tab-divider">✻</span>
          <span className="tab">App Design</span>
          <span className="tab-divider">✻</span>
          <span className="tab">Website Design</span>
          <span className="tab-divider">✻</span>
          <span className="tab">Dashboard</span>
          <span className="tab-divider">✻</span>
          <span className="tab">Wireframe</span>
        </div>
      </div>
      <div className="services-header-row">
        <div>
          {/* <div className="services-label">– Services</div> */}
          <h2 className="services-title">
            <span className="highlight">Services</span> <span className="normal">I Provide</span>
          </h2>
        </div>
        <button className="services-viewall">
          <span>View All Services</span>
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="services-cards">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <a href="#" className="service-learn">Learn more <span className="arrow">→</span></a>
          </div>
        ))}
      </div>
    </section>
  );
} 