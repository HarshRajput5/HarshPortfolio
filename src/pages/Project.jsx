import React from 'react';
import '../styles/components/home/LatestProjectsSection.css';

const projects = [
  {
    title: 'Gaming application with earning using Admob',
    tags: ['Mobile App','UI/UX Design','Firebase,\nAdmob'],
    img: 'src/assets/cipher.png',
  },
  {
    title: 'IoT based application with live location integration with Google Map',
    tags: ['Mobile App','MQTT Protocol','Hive'],
    img: 'src/assets/Iot.png',
  },
  {
    title: 'Quick Leads - QR Code Scanner Mobile Application',
    tags: ['Mobile App','QR Code Scanner','Restful API'],
    img: 'src/assets/scan.png',
  },
  {
    title: 'Logistic Management System - Mobile Application',
    tags: ['Mobile App','Restful API','Firebase'],
    img: 'src/assets/kp.png',
  },
  {
    title: 'Shopping App – Ecommerce Mobile App Solution',
    tags: ['Mobile App', 'UI/UX Design','Wireframe'],
    img: 'src/assets/stylish.png',
  },  
  {
    title: 'Tradeview - Stock Market Analysis Mobile Application',
    tags: ['Mobile App','Stock Market Analysis','Restful API'],
    img: 'src/assets/tradeview.png',
  },
];

export default function Project() {
  return (
    <section className="latestprojects-section">
      {/* <div className="latestprojects-label"> My Portfolio</div> */}
      <h2 className="latestprojects-heading" style={{textAlign: 'center', width: '100%'}}>
        My <span className="latestprojects-bold">Latest</span> <span className="latestprojects-highlight">Projects</span>
      </h2>
      <div className="latestprojects-row">
        {projects.map((project, idx) => (
          <div className="latestprojects-card" key={project.title}>
            <img src={project.img} alt={project.title} className="latestprojects-img" />
            <div className="latestprojects-tags">
              {project.tags.map((tag) => (
                <span className="latestprojects-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="latestprojects-title">{project.title}</div>
          </div>
        ))}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 32}}>
        <button style={{background: '#ffc32b', color: '#234c2e', border: 'none', borderRadius: 32, padding: '14px 36px', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(34, 76, 46, 0.10)'}}>Load More Projects</button>
      </div>
    </section>
  );
} 