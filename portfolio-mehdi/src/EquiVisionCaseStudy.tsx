const statusBadges = {
  done: 'Disponible',
  wip: 'En cours de branchement',
} as const

type Status = keyof typeof statusBadges

const features: { title: string; body: string; status: Status }[] = [
  {
    title: 'Comptes utilisateurs',
    body: 'Inscription, connexion et routes protégées côté interface, avec un rôle stocké sur l’utilisateur.',
    status: 'done',
  },
  {
    title: 'Fiches équines',
    body: 'Création, modification, suppression et consultation : nom, race, âge, sexe, date de naissance, propriétaire, statut, photo.',
    status: 'done',
  },
  {
    title: 'Import CSV en masse',
    body: 'Chargement d’un effectif complet depuis un fichier, avec upload des images sur le serveur.',
    status: 'done',
  },
  {
    title: 'Suivi médical',
    body: 'Dossiers par cheval : date de visite, vétérinaire, température, fréquence cardiaque, poids, vaccination, traitement, notes.',
    status: 'done',
  },
  {
    title: 'Calendrier',
    body: 'Événements du centre et récupération par plage de dates pour l’agenda.',
    status: 'done',
  },
  {
    title: 'Écran d’analyse de santé',
    body: 'Lecture des paramètres d’un cheval et restitution de la prédiction avec son niveau de confiance.',
    status: 'done',
  },
  {
    title: 'Rapports PDF',
    body: 'Génération d’un rapport par cheval côté API. L’écran « Rapports » de l’interface n’est pas encore branché sur cette route.',
    status: 'wip',
  },
  {
    title: 'Cavaliers, entraînements, compétitions, leçons',
    body: 'Écrans présents dans la navigation mais alimentés par des données locales : le branchement API reste à faire.',
    status: 'wip',
  },
]

const stack: { tool: string; role: string }[] = [
  { tool: 'React 19 · TypeScript · Vite', role: 'Interface : tableau de bord, fiches, suivi médical, calendrier, prédiction.' },
  { tool: 'React Router · axios', role: 'Navigation protégée et appels à l’API depuis les écrans.' },
  { tool: 'FastAPI', role: 'API REST : chevaux, dossiers médicaux, calendrier, IA, upload, export PDF.' },
  { tool: 'SQLAlchemy · SQLite', role: 'Persistance : utilisateurs, chevaux, antécédents de santé, dossiers médicaux.' },
  { tool: 'pandas · scikit-learn', role: 'Chargement du jeu de données, entraînement et évaluation du classifieur.' },
  { tool: 'RandomForestClassifier', role: 'Modèle de classification à trois classes, sérialisé puis rechargé par l’API.' },
  { tool: 'Recharts · jsPDF', role: 'Graphiques d’analyse côté client et composition des documents.' },
]

const shots: { file: string; w: number; h: number; caption: string; alt: string }[] = [
  {
    file: 'tableau-de-bord.png', w: 1821, h: 893,
    caption: 'Tableau de bord — synthèse de l’effectif et indicateurs du centre.',
    alt: "Capture du tableau de bord EquiVision AI affichant les cartes de synthèse de l'effectif",
  },
  {
    file: 'effectif.jpg', w: 1338, h: 628,
    caption: 'Gestion des chevaux — fiches avec photo, race, âge et statut.',
    alt: "Capture de l'écran de gestion des chevaux avec les fiches illustrées de trois chevaux",
  },
  {
    file: 'sante.jpg', w: 1339, h: 634,
    caption: 'Suivi de santé — paramètres relevés et historique médical d’un cheval.',
    alt: "Capture de l'écran de suivi de santé d'un cheval avec ses cartes d'analyse",
  },
  {
    file: 'calendrier.png', w: 1338, h: 638,
    caption: 'Calendrier — agenda des événements du centre.',
    alt: "Capture de la vue calendrier avec les événements répartis sur la semaine",
  },
  {
    file: 'prediction-ia.png', w: 1338, h: 636,
    caption: 'Écran d’analyse — état de préparation et niveau de risque.',
    alt: "Capture de l'écran d'analyse IA avec une jauge d'état de préparation",
  },
  {
    file: 'rapports.jpg', w: 1338, h: 638,
    caption: 'Rapports — analyse globale du centre et index de suivi.',
    alt: "Capture de l'écran des rapports avec l'analyse globale du centre",
  },
]

const mlInputs: { label: string; hint: string }[] = [
  { label: 'Âge', hint: 'années' },
  { label: 'Fréquence cardiaque', hint: 'bpm' },
  { label: 'Température', hint: '°C' },
  { label: 'Heures d’entraînement', hint: 'hebdomadaires' },
  { label: 'Historique de blessures', hint: 'nombre' },
]

const mlOutputs: { label: string; hint: string }[] = [
  { label: 'Healthy', hint: 'aucun signal' },
  { label: 'Warning', hint: 'vigilance' },
  { label: 'Risk', hint: 'à approfondir' },
]

const obstacles: { problem: string; solution: string }[] = [
  {
    problem:
      'Le schéma a évolué en cours de projet : il a fallu ajouter des colonnes aux tables déjà peuplées sans repartir de zéro.',
    solution:
      'Une migration écrite à la main inspecte les colonnes existantes via SQLAlchemy et n’applique un ALTER TABLE que pour celles qui manquent. Le démarrage reste idempotent.',
  },
  {
    problem:
      'Une prédiction brute du modèle, sans ordre de grandeur, est inutilisable par un soigneur qui doit décider.',
    solution:
      'Un moteur de règles « EquiRisk » complète le classifieur : il pondère chaque paramètre, produit un score de 0 à 100, un niveau et des recommandations lisibles.',
  },
  {
    problem: 'Le modèle est entraîné dans un script mais doit être servi par une API en ligne.',
    solution:
      'Le classifieur est sérialisé puis chargé au démarrage du serveur ; si le fichier est absent, l’API démarre quand même et signale l’indisponibilité de la route de prédiction.',
  },
  {
    problem: 'Saisir un effectif de centre équestre cheval par cheval est bloquant pour une démonstration.',
    solution: 'Import CSV en masse avec validation des colonnes attendues, et upload des photos associé aux fiches.',
  },
]

const limits: string[] = [
  'Le jeu de données d’entraînement compte sept lignes. Le modèle apprend une séparation plausible entre les trois classes, rien de plus : aucune performance globale n’est revendiquée.',
  'SQLite et un seul processus : choix assumé pour un prototype, à remplacer pour un usage multi-utilisateurs réel.',
  'Les seuils du score EquiRisk sont issus de règles métier simples, pas d’un protocole vétérinaire validé.',
  'Les origines autorisées par le CORS sont ouvertes, à restreindre avant toute mise en production.',
  'Aucun test automatisé sur les routes de l’API.',
]

const nextSteps: string[] = [
  'Étoffer le jeu de données avec des observations réelles de centre équestre et mesurer le modèle sur un lot de test représentatif.',
  'Brancher l’écran Rapports sur la génération PDF déjà présente côté API.',
  'Connecter les écrans cavaliers, entraînements, compétitions et leçons à la base de données.',
  'Migrer de SQLite vers PostgreSQL et introduire des migrations versionnées.',
  'Ajouter un historique de prédiction pour suivre l’évolution d’un cheval dans le temps.',
]

function ArchitectureDiagram() {
  const box = 'cs-diagram-box'
  return (
    <svg className="cs-diagram" viewBox="0 0 980 430" role="img" aria-label="Schéma d'architecture. L'interface React appelle l'API FastAPI en JSON. L'API lit les données dans une base SQLAlchemy et interroge le classifieur Random Forest, qui renvoie une classe et un score de confiance. Le score EquiRisk combine ces éléments pour produire facteurs de risque et recommandations, puis un rapport.">
      <defs>
        <marker id="cs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="rgba(233,189,104,.7)" />
        </marker>
      </defs>

      <g className="cs-diagram-links">
        <path d="M262 196 H340" markerEnd="url(#cs-arrow)" />
        <path d="M560 196 H638" markerEnd="url(#cs-arrow)" />
        <path d="M450 246 V312" markerEnd="url(#cs-arrow)" />
        <path d="M698 146 V96 H790" markerEnd="url(#cs-arrow)" />
        <path d="M698 246 V300 H790" markerEnd="url(#cs-arrow)" />
        <path d="M900 96 H940 V356 H902" markerEnd="url(#cs-arrow)" />
      </g>

      <g className={box}>
        <rect x="40" y="146" width="222" height="100" rx="12" />
        <text x="62" y="180" className="cs-box-title">Interface</text>
        <text x="62" y="202" className="cs-box-sub">React 19 · TypeScript</text>
        <text x="62" y="220" className="cs-box-sub">Vite · React Router</text>
      </g>

      <g className={box}>
        <rect x="340" y="146" width="220" height="100" rx="12" />
        <text x="362" y="180" className="cs-box-title">API</text>
        <text x="362" y="202" className="cs-box-sub">FastAPI · routes REST</text>
        <text x="362" y="220" className="cs-box-sub">chevaux · médical · calendrier</text>
      </g>

      <g className={box}>
        <rect x="340" y="312" width="220" height="82" rx="12" />
        <text x="362" y="344" className="cs-box-title">Données</text>
        <text x="362" y="366" className="cs-box-sub">SQLAlchemy · SQLite</text>
        <text x="362" y="384" className="cs-box-sub">users · horses · medical</text>
      </g>

      <g className={box}>
        <rect x="638" y="46" width="262" height="100" rx="12" />
        <text x="660" y="80" className="cs-box-title">Machine learning</text>
        <text x="660" y="102" className="cs-box-sub">scikit-learn · Random Forest</text>
        <text x="660" y="120" className="cs-box-sub">modèle sérialisé, chargé au boot</text>
      </g>

      <g className={`${box} is-accent`}>
        <rect x="638" y="300" width="262" height="100" rx="12" />
        <text x="660" y="334" className="cs-box-title">Score EquiRisk</text>
        <text x="660" y="356" className="cs-box-sub">règles métier · 0 à 100</text>
        <text x="660" y="374" className="cs-box-sub">facteurs + recommandations</text>
      </g>

      <text x="268" y="184" className="cs-link-label">JSON</text>
      <text x="566" y="184" className="cs-link-label">5 paramètres</text>
      <text x="458" y="288" className="cs-link-label">requêtes</text>
      <text x="706" y="128" className="cs-link-label">classe + confiance</text>
      <text x="706" y="292" className="cs-link-label">classe + confiance</text>
      <text x="906" y="228" className="cs-link-label">rapport</text>
    </svg>
  )
}

export default function EquiVisionCaseStudy() {
  return (
    <section className="case-study" id="equivision">
      <div className="section-wrap">
        <div className="section-heading case-study-heading" data-reveal>
          <div>
            <p className="section-overline">04 / PROJET PHARE</p>
            <h2>EquiVision AI — la santé équine, <span className="serif-accent">pilotée par la donnée.</span></h2>
          </div>
          <p className="heading-note">
            Prototype full-stack réalisé durant mon stage chez IDEVELOP SARL (Rabat, août 2026) : centraliser le suivi
            d’un effectif de chevaux et l’éclairer par une analyse automatique des paramètres de santé.
          </p>
        </div>

        <div className="case-study-flag">
          <span className="flag-dot" aria-hidden="true" />
          Prototype évolutif. Les blocs marqués « en cours de branchement » ne sont pas encore opérationnels.
        </div>

        <div className="cs-block cs-problem" data-reveal>
          <div className="cs-block-copy">
            <h3>Le problème</h3>
            <p>
              Dans un centre équestre, l’information sur un cheval est dispersée : carnets de soins, fiches papier,
              mémoire des soigneurs, messages échangés. Personne n’a de vue consolidée sur un effectif, et les signaux
              faibles — une température qui monte, une charge d’entraînement qui s’accumule sur un antécédent de
              blessure — ne remontent que quand le problème est déjà visible.
            </p>
          </div>
          <ul className="cs-value-list">
            <li><strong>Centraliser</strong><span>une fiche, un dossier médical et un agenda par cheval.</span></li>
            <li><strong>Rendre lisible</strong><span>des paramètres épars dans un écran de suivi unique.</span></li>
            <li><strong>Aider à décider</strong><span>un niveau de risque et des recommandations, pas un chiffre brut.</span></li>
          </ul>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">Pour qui</h3>
          <div className="cs-people">
            <div><span className="cs-people-role">Gérant de centre</span><p>Vision d’ensemble sur l’effectif, statut de chaque cheval, historique consultable.</p></div>
            <div><span className="cs-people-role">Soigneur · équipe technique</span><p>Saisie rapide des paramètres et des soins au fil des visites.</p></div>
            <div><span className="cs-people-role">Cavalier · moniteur</span><p>Adapter la charge de travail à l’état réel du cheval.</p></div>
          </div>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">Fonctionnalités</h3>
          <div className="cs-features">
            {features.map((feature) => (
              <article className={`cs-feature ${feature.status === 'done' ? 'is-done' : 'is-wip'}`} key={feature.title}>
                <div className="cs-feature-top">
                  <h4>{feature.title}</h4>
                  <span className="cs-status">{statusBadges[feature.status]}</span>
                </div>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">Architecture</h3>
          <p className="cs-block-lede">
            Une interface single-page, une API REST, une base relationnelle et un modèle embarqué. Le score EquiRisk
            est la couche qui réconcilie la sortie du modèle et une décision exploitable.
          </p>
          <div className="cs-diagram-frame">
            <ArchitectureDiagram />
          </div>
          <p className="cs-diagram-hint">Le schéma se défile horizontalement sur petit écran.</p>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">Technologies et rôle</h3>
          <div className="cs-stack">
            {stack.map((item) => (
              <div className="cs-stack-row" key={item.tool}>
                <span className="cs-stack-tool">{item.tool}</span>
                <span className="cs-stack-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">L’application</h3>
          <p className="cs-block-lede">
            Captures réelles de l’interface réalisée durant le stage. Le thème clair de l’application est celui choisi
            pour le centre équestre ; ce portfolio a le sien.
          </p>
          <div className="cs-shots">
            {shots.map((shot) => (
              <figure className="cs-shot" key={shot.file}>
                <span className="cs-shot-frame" style={{ aspectRatio: `${shot.w} / ${shot.h}` }}>
                  <img
                    src={`${import.meta.env.BASE_URL}equivision/${shot.file}`}
                    width={shot.w}
                    height={shot.h}
                    loading="lazy"
                    decoding="async"
                    alt={shot.alt}
                  />
                </span>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="cs-block cs-ml" data-reveal>
          <h3 className="cs-block-title">Le volet machine learning</h3>
          <p className="cs-block-lede">
            Un classifieur Random Forest (200 arbres, graine fixe) entraîné sur un jeu de données tabulaire, évalué sur
            un tiers des lignes. Il restitue une classe et une confiance dérivée de <code>predict_proba</code>.
          </p>
          <div className="cs-ml-flow">
            <div className="cs-ml-col">
              <span className="cs-ml-col-label">ENTRÉES</span>
              {mlInputs.map((input) => <div className="cs-ml-item" key={input.label}><span>{input.label}</span><small>{input.hint}</small></div>)}
            </div>
            <div className="cs-ml-arrow" aria-hidden="true">→</div>
            <div className="cs-ml-col cs-ml-model">
              <span className="cs-ml-col-label">MODÈLE</span>
              <div className="cs-ml-node">RandomForestClassifier</div>
              <p>Entraîné par un script pandas + scikit-learn, sérialisé puis rechargé par l’API au démarrage.</p>
            </div>
            <div className="cs-ml-arrow" aria-hidden="true">→</div>
            <div className="cs-ml-col">
              <span className="cs-ml-col-label">SORTIES</span>
              {mlOutputs.map((output) => <div className={`cs-ml-item cs-class-${output.label.toLowerCase()}`} key={output.label}><span>{output.label}</span><small>{output.hint}</small></div>)}
              <div className="cs-ml-confidence">+ score de confiance</div>
            </div>
          </div>
          <div className="cs-equirisk">
            <div className="cs-equirisk-head"><span className="cs-equirisk-name">EquiRisk</span><span className="cs-equirisk-sub">couche métier au-dessus du modèle</span></div>
            <p>
              Le classifieur seul ne suffit pas : deux chevaux de même classe n’ont pas la même histoire. EquiRisk
              additionne des pondérations sur chaque paramètre (fréquence cardiaque, température, charge d’entraînement,
              antécédents, âge) et la sortie du modèle, puis normalise un score de 0 à 100.
            </p>
            <div className="cs-equirisk-scale">
              <span>0 — 20 <small>faible</small></span>
              <span>21 — 45 <small>modéré</small></span>
              <span>46 — 70 <small>élevé</small></span>
              <span>71 — 100 <small>critique</small></span>
            </div>
            <p className="cs-equirisk-note">
              Chaque dépassement de seuil remonte un facteur de risque et une recommandation. L’outil aide à prioriser
              une surveillance : ce n’est pas un diagnostic vétérinaire certifié.
            </p>
          </div>
        </div>

        <div className="cs-block" data-reveal>
          <h3 className="cs-block-title">Difficultés rencontrées, solutions apportées</h3>
          <div className="cs-obstacles">
            {obstacles.map((obstacle) => (
              <article className="cs-obstacle" key={obstacle.problem}>
                <p className="cs-obstacle-problem">{obstacle.problem}</p>
                <p className="cs-obstacle-solution"><span>→</span>{obstacle.solution}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cs-block" data-reveal>
          <div className="cs-limits-grid">
            <div className="cs-limits">
              <h3 className="cs-block-title">Limites assumées</h3>
              <ul>{limits.map((limit) => <li key={limit}>{limit}</li>)}</ul>
            </div>
            <div className="cs-next">
              <h3 className="cs-block-title">Ce que je veux construire ensuite</h3>
              <ul>{nextSteps.map((step) => <li key={step}>{step}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
