import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Send,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react'

const GITHUB_URL = 'https://github.com/mehdimehdi11'
const EMAIL = 'elmehdielhani1@gmail.com'
const PHONE_DISPLAY = '+212 639 417 180'
const PHONE_LINK = '+212639417180'
const CV_PATH = `${import.meta.env.BASE_URL}CV_Mehdi_El_Hani_IA_Data.pdf`

const projects = [
  {
    number: '01',
    title: 'EquiVision AI',
    category: 'Projet de stage · IA & développement web',
    description:
      'Prototype intelligent dédié à la gestion et à l’analyse de la santé équine. Il centralise les fiches des chevaux, les informations médicales et une prédiction indicative de leur état de santé.',
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'React', 'TypeScript', 'SQLite'],
    icon: BrainCircuit,
    accent: 'gold',
    detail: 'Machine Learning · API REST · Interface web',
  },
  {
    number: '02',
    title: 'AlexNet · CIFAR-10',
    category: 'Projet académique · Deep Learning',
    description:
      'Implémentation et exploration d’une architecture de réseau neuronal convolutionnel adaptée à la classification d’images du dataset CIFAR-10.',
    tags: ['Python', 'PyTorch', 'CNN', 'CIFAR-10'],
    icon: MonitorSmartphone,
    accent: 'blue',
    detail: 'Convolution · Prétraitement · Architecture de modèle',
  },
  {
    number: '03',
    title: 'Réseaux de neurones récurrents',
    category: 'Travail pratique · IA',
    description:
      'Étude et expérimentation des concepts fondamentaux des réseaux de neurones récurrents à partir d’un notebook pédagogique.',
    tags: ['Python', 'Jupyter Notebook', 'Google Colab', 'RNN'],
    icon: TerminalSquare,
    accent: 'violet',
    detail: 'Apprentissage profond · Expérimentation',
  },
]

const skillGroups = [
  {
    title: 'Intelligence artificielle',
    caption: 'Apprentissage & modèles',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Scikit-learn', 'PyTorch', 'CNN / AlexNet', 'Bases du Deep Learning'],
  },
  {
    title: 'Développement',
    caption: 'Applications & API',
    icon: Code2,
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'React & TypeScript', 'FastAPI', 'HTML / CSS'],
  },
  {
    title: 'Data & outils',
    caption: 'Stockage & workflow',
    icon: Database,
    skills: ['MySQL', 'SQLite', 'SQL', 'Git / GitHub', 'VS Code', 'Google Colab', 'Vite'],
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="site-shell">
      <div className="top-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Mehdi El Hani, accueil">
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-text">MEHDI EL HANI<small>DATA · IA · SOFTWARE</small></span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={mobileMenuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          <a href="#apropos" onClick={closeMenu}>À propos</a>
          <a href="#competences" onClick={closeMenu}>Compétences</a>
          <a href="#projets" onClick={closeMenu}>Projets</a>
          <a href="#experience" onClick={closeMenu}>Parcours</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Me contacter <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> PORTFOLIO PERSONNEL <span className="eyebrow-line" /></div>
            <p className="hero-kicker">Étudiant ingénieur · Big Data & Intelligence Artificielle</p>
            <h1>Je transforme les données en <span className="gradient-text">solutions intelligentes.</span></h1>
            <p className="hero-description">
              Je suis <strong>Mehdi El Hani</strong>, étudiant en Génie Informatique à l’Université Internationale de Rabat. J’aime concevoir des applications, explorer les modèles d’IA et transformer des idées en prototypes concrets.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projets">Découvrir mes projets <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href={CV_PATH} target="_blank" rel="noreferrer"><Download size={16} /> Télécharger mon CV</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Rabat, Maroc</span>
              <span className="meta-separator" />
              <span><GraduationCap size={16} /> UIR · 5ᵉ année</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration graphique autour de l'intelligence artificielle">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />
            <div className="visual-core"><BrainCircuit size={57} strokeWidth={1.35} /><span>AI / DATA</span></div>
            <div className="floating-chip chip-python"><span className="chip-symbol">Py</span><span>Python<small>Data & ML</small></span></div>
            <div className="floating-chip chip-model"><Sparkles size={17} /><span>Machine Learning<small>Model building</small></span></div>
            <div className="floating-chip chip-code"><Code2 size={18} /><span>Software<small>Build · Test · Iterate</small></span></div>
            <div className="visual-index">FIG. 01 <span>—</span> THINK / BUILD / LEARN</div>
          </div>
          <a className="scroll-cue" href="#apropos"><span>FAIRE DÉFILER</span><ChevronDown size={16} /></a>
        </section>

        <section className="intro-band" id="apropos">
          <div className="section-wrap intro-grid">
            <div className="section-label"><span>01</span><span>À PROPOS</span></div>
            <div className="intro-content">
              <p className="section-overline">CURIEUX PAR NATURE, INGÉNIEUR EN DEVENIR</p>
              <h2>Entre la donnée, le code et les <span className="serif-accent">problèmes réels.</span></h2>
              <div className="intro-bottom">
                <p>Mon parcours réunit développement logiciel, bases de données et intelligence artificielle. À travers mes projets académiques et mon stage chez IDEVELOP, je développe une approche structurée : comprendre le besoin, construire une solution et apprendre à chaque itération.</p>
                <a className="text-link" href="#experience">Voir mon parcours <ArrowDownRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="competences">
          <div className="section-heading">
            <div><p className="section-overline">02 / BOÎTE À OUTILS</p><h2>Les outils pour <span className="serif-accent">donner vie</span> aux idées.</h2></div>
            <p className="heading-note">Des fondamentaux en informatique aux premiers modèles IA, voici les technologies que j’ai utilisées dans ma formation et mes projets.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <article className={`skill-card skill-card-${index + 1}`} key={group.title}>
                  <div className="skill-card-top"><div className="skill-icon"><Icon size={22} strokeWidth={1.7} /></div><span className="skill-number">0{index + 1}</span></div>
                  <p className="skill-caption">{group.caption}</p>
                  <h3>{group.title}</h3>
                  <div className="skill-pills">{group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
                </article>
              )
            })}
          </div>
          <p className="skills-footnote"><span className="footnote-star">✳</span> Compétences présentées selon les technologies utilisées en formation et dans les projets — niveaux à discuter selon le poste.</p>
        </section>

        <section className="projects-section" id="projets">
          <div className="section-wrap">
            <div className="section-heading projects-heading">
              <div><p className="section-overline">03 / PROJETS SÉLECTIONNÉS</p><h2>Du concept au <span className="serif-accent">prototype.</span></h2></div>
              <p className="heading-note">Chaque projet est une occasion d’apprendre une technologie, de structurer une solution et de mieux comprendre le problème traité.</p>
            </div>
            <div className="projects-list">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <article className={`project-card project-${project.accent}`} key={project.number}>
                    <div className="project-visual">
                      <div className="project-visual-grid" />
                      <div className="project-orbit project-orbit-a" />
                      <div className="project-orbit project-orbit-b" />
                      <div className="project-number">{project.number}</div>
                      <div className="project-symbol"><Icon size={39} strokeWidth={1.25} /></div>
                      <span className="project-visual-footer">{project.detail}</span>
                    </div>
                    <div className="project-info">
                      <div className="project-category">{project.category}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      {project.number === '01' ? <a className="project-link" href="#contact">Parlons du projet <ArrowUpRight size={16} /></a> : <span className="project-academic"><Check size={14} /> Projet académique</span>}
                    </div>
                    <span className="project-side-number">{project.number}</span>
                  </article>
                )
              })}
            </div>
            <div className="projects-note"><Sparkles size={17} /><p>Les projets académiques sont présentés à titre de travaux d’apprentissage. Les métriques de performance ne sont pas affichées lorsqu’elles n’ont pas été confirmées.</p></div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <div><p className="section-overline">04 / PARCOURS</p><h2>Apprendre en <span className="serif-accent">pratiquant.</span></h2></div>
            <p className="heading-note">Formation d’ingénieur et premières expériences en environnement professionnel.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item timeline-current">
              <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
              <div className="timeline-date">AOÛT 2026 <span>· 1 MOIS</span></div>
              <div className="timeline-main">
                <div className="timeline-title-row"><div><h3>Stage — IDEVELOP SARL</h3><p className="timeline-subtitle">Rabat, Maroc · Projet EquiVision AI</p></div><span className="timeline-tag">EXPÉRIENCE RÉCENTE</span></div>
                <p>Réalisation d’un prototype de gestion et d’analyse de la santé équine, avec un volet applicatif et une composante de prédiction basée sur le machine learning.</p>
                <div className="timeline-tech"><span>Python</span><span>FastAPI</span><span>Scikit-learn</span><span>React</span><span>SQLite</span></div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
              <div className="timeline-date">JUILLET 2025 <span>· STAGE D’OBSERVATION</span></div>
              <div className="timeline-main">
                <h3>Stage d’observation IT — INVERNO SARL</h3>
                <p className="timeline-subtitle">Témara / Rabat, Maroc</p>
                <p>Observation des procédures de maintenance informatique, participation à l’installation de systèmes Windows, découverte des pratiques de sauvegarde et de sécurité des données, et assistance à l’équipe IT dans ses tâches quotidiennes.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><GraduationCap size={18} /></div>
              <div className="timeline-date">2022 — 2027 <span>· EN COURS</span></div>
              <div className="timeline-main">
                <h3>Cycle ingénieur en Génie Informatique</h3>
                <p className="timeline-subtitle">Université Internationale de Rabat (UIR)</p>
                <p>Spécialité Big Data & Intelligence Artificielle. Formation en programmation, données, développement logiciel, machine learning et deep learning.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="extras-section">
          <div className="section-wrap extras-grid">
            <div className="extra-block">
              <div className="section-label"><span>05</span><span>LANGUES</span></div>
              <h3>Communiquer, apprendre, collaborer.</h3>
              <div className="language-list">
                <div><span>Arabe</span><span className="language-level">Langue maternelle</span></div>
                <div><span>Français</span><span className="language-level">Courant</span></div>
                <div><span>Anglais</span><span className="language-level">Intermédiaire</span></div>
              </div>
            </div>
            <div className="extra-block extra-activities">
              <div className="section-label"><span>06</span><span>EN DEHORS DU CODE</span></div>
              <h3>La discipline aussi se pratique.</h3>
              <p>La pratique de l’équitation — notamment le saut d’obstacles — et du taekwondo m’apporte discipline, persévérance et goût du dépassement de soi.</p>
              <div className="activity-stamps"><span>ÉQUITATION <span>↗</span></span><span>TAEKWONDO <span>↗</span></span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-noise" aria-hidden="true" />
          <div className="section-wrap contact-inner">
            <div className="section-overline">07 / ET MAINTENANT ?</div>
            <h2>Une idée, un projet,<br /><span className="serif-accent">une opportunité.</span></h2>
            <p>Je suis ouvert aux échanges autour de la data, de l’intelligence artificielle et du développement logiciel.</p>
            <div className="contact-actions">
              <a className="button button-primary button-large" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Échange professionnel — Mehdi El Hani')}`}>Me contacter par e-mail <Send size={17} /></a>
              <button className="button button-ghost copy-email" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'E-mail copié' : EMAIL}</button>
            </div>
            <div className="contact-links">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
              <a href={`tel:${PHONE_LINK}`}><span className="phone-symbol">↗</span> {PHONE_DISPLAY}</a>
              <span><MapPin size={15} /> Rabat, Maroc</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#accueil">MEH<span>.</span></a>
        <p>Conçu avec curiosité et beaucoup de café.</p>
        <div>© {new Date().getFullYear()} Mehdi El Hani <span>·</span> Portfolio</div>
        <a className="back-top" href="#accueil" aria-label="Retour en haut"><ArrowUpRight size={17} /></a>
      </footer>
    </div>
  )
}

export default App
