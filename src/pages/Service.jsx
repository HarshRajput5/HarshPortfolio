import React from 'react';
import './Service.css';
import { Title, Meta } from 'react-head';

const services = [
  {
    title: 'Mobile App Development',
    icon: '📱',
    desc: 'Custom mobile applications built for Android and iOS with intuitive interfaces, modern designs, and smooth performance.',
  },
  {
    title: 'Website Development',
    icon: '💻',
    desc: 'Responsive and fast-loading websites developed using modern technologies to ensure great user experience across devices.',
  },
  {
    title: 'UI/UX Design',
    icon: '🖌️',
    desc: 'User-centric design solutions focusing on both aesthetics and usability to deliver exceptional digital experiences.',
  },
  {
    title: 'Application Design',
    icon: '🤖',
    desc: 'Engaging and functional designs tailored for mobile and web apps, ensuring consistency and intuitive navigation.',
  },
  {
    title: 'Website Design',
    icon: '💻',
    desc: 'Visually appealing and easy-to-navigate website designs that align with your brand and engage your audience.',
  },
  {
    title: 'UI Design',
    icon: '📐',
    desc: 'Pixel-perfect interface designs that blend creativity with usability to enhance product engagement and retention.',
  },
  {
    title: 'Design System',
    icon: '💡',
    desc: 'Scalable design systems with reusable components and clear guidelines for consistent product development across teams.',
  },
  {
    title: 'Wireframing',
    icon: '🗂️',
    desc: 'Low-fidelity wireframes to plan layouts, content structure, and user flow before moving into high-fidelity design.',
  },
  {
    title: 'Brand Identity',
    icon: '🌼',
    desc: 'Unique brand visuals and assets including logos, colors, and typography to establish a strong, memorable presence.',
  },
  {
    title: 'Illustration',
    icon: '🎨',
    desc: 'Custom illustrations and graphics that bring character and personality to your apps, websites, and marketing materials.',
  },
];


export default function Service() {
  return (
    <>
      <Title>Services | Harsh Rajput - Flutter, Android, iOS, React Developer</Title>
      <Meta name="description" content="Explore services by Harsh Rajput: Flutter, Android, iOS, React, and Website Development. High-quality, scalable, and beautiful apps for your business." />
      <Meta name="keywords" content="Services, Flutter Developer, Android Developer, iOS Developer, React Developer, Website Developer, Mobile App Development, Web Development, Harsh Rajput, Freelancer" />
      <main className="service-main">
        <div className="service-header">
          <span className="service-section-label">— Services</span>
          <h2 className="service-title">
            <span className="service-title-highlight">Services</span> I <span className="service-title-bold">Provide</span>
          </h2>
        </div>
        <div className="service-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              {/* <a className="service-learn-more" href="#">Learn more <span>→</span></a> */}
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 