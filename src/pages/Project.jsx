import React from 'react';
import '../styles/components/home/LatestProjectsSection.css';

const projects = [
  {
    title: 'Beauty Product – Ecommerce Mobile App Solution',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Beauty Product Mobile App Landing Page Design',
    tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pet Food App – Ecommerce Mobile App Solution',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pet Food Mobile App Landing Page Design',
    tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
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