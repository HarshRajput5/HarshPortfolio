import '../../styles/components/home/FavoriteToolsSection.css';

const tools = [
  {
    name: 'Flutter',
    percent: '95%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Dart',
    percent: '90%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'Firebase',
    percent: '90%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Figma',
    percent: '80%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Git',
    percent: '85%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'VS Code',
    percent: '95%',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
];


export default function FavoriteToolsSection() {
  return (
    <section className="favtools-section"  id="skills">
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