import '../../styles/components/home/LatestProjectsSection.css';
import { useNavigate } from 'react-router-dom';

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
  // {
  //   title: 'Logistic Management System - Mobile Application',
  //   tags: ['Mobile App','Restful API','Firebase'],
  //   img: 'src/assets/kp.png',
  // },
  // {
  //   title: 'Shopping App – Ecommerce Mobile App Solution',
  //   tags: ['Mobile App', 'UI/UX Design','Wireframe'],
  //   img: 'src/assets/stylish.png',
  // },  
  // {
  //   title: 'Tradeview - Stock Market Analysis Mobile Application',
  //   tags: ['Mobile App','Stock Market Analysis','Restful API'],
  //   img: 'src/assets/tradeview.png',
  // },
];

export default function LatestProjectsSection() {
  const navigate = useNavigate();
  return (
    <section className="latestprojects-section">
      <div className="latestprojects-label"> My Portfolio</div>
      <div className="latestprojects-header-row">
        <h2 className="latestprojects-heading">
          My <span className="latestprojects-bold">Latest</span> <span className="latestprojects-highlight">Projects</span>
        </h2>
        <button className="latestprojects-viewall" onClick={() => navigate('/projects')}>
          
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