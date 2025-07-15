import React from 'react';
import '../../styles/components/home/ServicesSection.css';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Custom mobile applications built for Android and iOS with sleek performance, modern UI, and seamless user experience.',
  },
  {
    icon: '💻',
    title: 'Website Development',
    desc: 'Responsive, fast, and SEO-optimized websites tailored to your business needs using the latest technologies.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Intuitive and engaging designs focused on enhancing user interaction and delivering visually appealing interfaces.',
  },
];


export default function ServicesSection() {
  const navigate = useNavigate();
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
        <button className="services-viewall" onClick={() => navigate('/service')}>
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
            <a href="#" className="service-learn"  onClick={() => navigate('/service')}>Learn more <span className="arrow">→</span></a>
          </div>
        ))}
      </div>
    </section>
  );
} 