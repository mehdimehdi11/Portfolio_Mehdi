# Portfolio — Mehdi El Hani

Portfolio personnel en React, TypeScript et Vite, avec un thème bleu nuit / doré et un déploiement automatisé sur GitHub Pages.

## Pré-requis

- Git installé : https://git-scm.com/download/win
- Node.js LTS installé : https://nodejs.org/
- Un compte GitHub, avec le nom d’utilisateur `mehdimehdi11`.

## 1. Lancer le site sur ton PC

Ouvre PowerShell dans le dossier extrait du projet, puis exécute :

```powershell
npm install
npm run dev
```

Ouvre ensuite l’adresse locale affichée par Vite (en général `http://localhost:5173`). Garde le terminal ouvert pendant que tu consultes le site.

Pour générer une version de production et vérifier qu’elle compile :

```powershell
npm run build
npm run preview
```

## 2. Créer le dépôt GitHub

1. Connecte-toi à GitHub.
2. Clique sur **New repository**.
3. Nomme le dépôt exactement `mehdimehdi11.github.io`.
4. Choisis **Public**.
5. Crée le dépôt vide (ne coche pas l’ajout automatique d’un README, puisque ce dossier en contient déjà un).

## 3. Envoyer le site depuis PowerShell

Place-toi dans le dossier du projet extrait. Remplace le chemin ci-dessous par le vrai chemin de ton dossier :

```powershell
cd "C:\Users\TON_NOM\Downloads\portfolio-mehdi"
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/mehdimehdi11/mehdimehdi11.github.io.git
git push -u origin main
```

Si Git demande de configurer ton identité, exécute une fois (en utilisant ton propre nom et ton e-mail) :

```powershell
git config --global user.name "Mehdi El Hani"
git config --global user.email "elmehdielhani1@gmail.com"
```

Puis répète les commandes `git commit` et `git push`.

Si `origin` existe déjà, ne répète pas `git remote add origin`. Utilise plutôt :

```powershell
git remote set-url origin https://github.com/mehdimehdi11/mehdimehdi11.github.io.git
```

## 4. Activer GitHub Pages

1. Dans le dépôt GitHub, ouvre **Settings**.
2. Dans le menu latéral, ouvre **Pages**.
3. Sous **Build and deployment**, choisis **GitHub Actions** comme source.
4. Ouvre l’onglet **Actions** et attends la fin du workflow **Deploy portfolio to GitHub Pages**.
5. Lorsque le workflow est terminé avec succès, ouvre `https://mehdimehdi11.github.io`.

La première publication peut prendre quelques minutes.

## 5. Mettre le portfolio à jour

Après avoir modifié les fichiers et enregistré tes changements :

```powershell
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions reconstruira puis republiera automatiquement le site.

## Personnaliser le contenu

- Les projets, compétences, contacts et expériences sont dans `src/App.tsx`.
- Les couleurs, dimensions, animations et responsive design sont dans `src/styles.css`.
- Le CV téléchargeable est dans `public/CV_Mehdi_El_Hani_IA_Data.pdf`.
- Le titre, la description et les métadonnées de partage sont dans `index.html`.

## Avant publication

Vérifie les coordonnées, le CV, les intitulés de projets et le niveau réel de chaque compétence. Aucun score de précision global n’est annoncé pour les modèles IA, car les métriques d’évaluation réelles ne sont pas confirmées.
