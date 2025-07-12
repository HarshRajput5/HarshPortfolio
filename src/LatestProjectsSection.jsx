import './LatestProjectsSection.css';

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
    title: 'Beauty Product Mobile App Landing Page Design',
    tags: ['UI/UX Design', 'Web Design', 'Wireframe'],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function LatestProjectsSection() {
  return (
    <section className="latestprojects-section">
      <div className="latestprojects-label"> My Portfolio</div>
      <div className="latestprojects-header-row">
        <h2 className="latestprojects-heading">
          My <span className="latestprojects-bold">Latest</span> <span className="latestprojects-highlight">Projects</span>
        </h2>
        <button className="latestprojects-viewall">
          View All Projects <span className="latestprojects-arrow">→</span>
        </button>
      </div>
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
    </section>
  );
} 