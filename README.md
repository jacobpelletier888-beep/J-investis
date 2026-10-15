# J’investis

Site d’éducation financière en français : budget, épargne, dettes, Bourse, obligations, FNB/ETF, diversification, « quand investir », analyse fondamentale et technique, immobilier, fiscalité (Canada/Québec et France), retraite/FIRE, crypto, psychologie, arnaques et revenus.

- **18 sujets**, chacun en 3 niveaux : Débutant → Intermédiaire → Pro (la page défile du plus simple au plus avancé)
- **132 exercices** corrigés (choix multiples et calculs), progression gardée dans le navigateur
- **Calculatrices** : intérêts composés (avec graphique), budget 50/30/20, remboursement de dette, liberté financière, impact des frais
- **Lexique** et page **Sources** (autorités des marchés financiers, gouvernements, banques centrales, recherche)

## Lancer le site

Site 100 % statique, aucune installation : ouvre `index.html` dans un navigateur, ou sers le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

Compatible GitHub Pages (Settings → Pages → branche, dossier racine).

## Structure

```
index.html              page unique, routage par ancre (#sujet-budget, #exercices, #outils…)
assets/css/style.css    design (thème clair/sombre)
assets/js/app.js        rendu des pages, exercices, outils
assets/data/topics-*.js contenu des sujets, exercices et sources
assets/data/lexique.js  lexique
```

Pour ajouter un sujet : ajoute un objet `JI.topics.push({...})` dans un fichier `assets/data/` (même format que les autres).

> Contenu éducatif, pas un conseil financier personnalisé. Les plafonds et taux fiscaux changent : vérifie les sources officielles.
