import '../../styles/components/home/LatestProjectsSection.css';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Gaming application with earning using Admob',
    tags: ['Mobile App','UI/UX Design','Firebase,\nAdmob'],
    img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/cipher.png?alt=media&token=4e5c95f6-b5d7-4580-ab2d-7b01646b17fd',
  },
  {
    title: 'IoT based application with live location integration with Google Map',
    tags: ['Mobile App','MQTT Protocol','Hive'],
    img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/Iot.png?alt=media&token=20b7b02e-9426-431f-9820-28cbdab42b8c',
  },
  {
    title: 'Quick Leads - QR Code Scanner Mobile Application',
    tags: ['Mobile App','QR Code Scanner','Restful API'],
    img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/scan.png?alt=media&token=57bb655c-329e-4730-b58f-164d5d660b06',
  },
  // {
  //   title: 'Logistic Management System - Mobile Application',
  //   tags: ['Mobile App','Restful API','Firebase'],
  //   img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/kp.png?alt=media&token=bf078843-b74e-4e79-b366-97980e854144',
  // },
  // {
  //   title: 'Shopping App – Ecommerce Mobile App Solution',
  //   tags: ['Mobile App', 'UI/UX Design','Wireframe'],
  //   img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/stylish.png?alt=media&token=34a9c43f-9420-47da-a592-7cc5c890aee7',
  // },  
  // {
  //   title: 'Tradeview - Stock Market Analysis Mobile Application',
  //   tags: ['Mobile App','Stock Market Analysis','Restful API'],
  //   img: 'https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/tradeview.png?alt=media&token=0e8d1890-1c59-4227-bb4e-bfe0516ce639',
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