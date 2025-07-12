import './FavoriteToolsSection.css';

const tools = [
  {
    name: 'Figma',
    percent: '98%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Sketch',
    percent: '92%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
  },
  {
    name: 'Photoshop',
    percent: '90%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  },
  {
    name: 'After Effects',
    percent: '85%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
  },
  {
    name: 'Storybook',
    percent: '90%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
  },
  {
    name: 'InVision',
    percent: '95%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg',
  },
];

export default function FavoriteToolsSection() {
  return (
    <section className="favtools-section">
      <div className="favtools-label">— My Favorite Tools</div>
      <h2 className="favtools-heading">
        <span className="favtools-highlight">Exploring the Tools</span>
        <br />
        <span className="favtools-bold">Behind My Designs</span>
      </h2>
      <div className="favtools-row">
        {tools.map((tool) => (
          <div className="favtools-card" key={tool.name}>
            <div className="favtools-icon-bg">
              <img src={tool.img} alt={tool.name} className="favtools-icon" />
            </div>
            <div className="favtools-percent">{tool.percent}</div>
            <div className="favtools-name">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 