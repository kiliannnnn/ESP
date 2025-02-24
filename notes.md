# Modes du site

- **Mode Basic** : Prévu pour recevoir de lourdes modifications.
- **Mode Complete** : Site plus ou moins définitif (minifié).

## Modes d'édition

- **Mode Noob** : Éditeur WYSIWYG simplifié.
- **Mode Dev** : Éditeur WYSIWYG avec noms des tags visibles.

## Fonctionnalités

- Voir le responsive facilement.
- Éviter d'ajouter trop de technologies externes.
- Import/export de thèmes.
- **Bootstrap-like** utilisable séparément du CMS.
- **WYSIWYG** avec :
  - Groupes de texte (h1-h6, p, etc.).
  - Styles de texte (gras, italique, souligné, etc.).
  - Images.
  - Tableaux.
- Télécharger le repo Git.
- Gestion des erreurs selon le mode :
  - `none` : aucune indication.
  - `debug` : indication minimale.
  - `verbose` : affichage détaillé.

---

## Breakpoints

- `sm` : 576px  
- `md` : 768px  
- `lg` : 996px  
- `xl` : 1284px  
- `xxl` : 1536px  

---

## Structure des dossiers

```
/content 
│── index.html 
│── assets 
│ ├── images 
│ ├── videos 
│ ├── fonts 
│── styles 
│ ├── variables.css 
│ ├── normalizer.css 
│ ├── classesPréparées 
│── components 
│ ├── header.js 
│ ├── footer.js 
│── main.js
/vendor 
│── HTMLTODOM 
│── wysiwygEditor 
│── config.js
/readme.md 
/index.html
```

---

## Composants de site

- Header, footer, menu, etc.
- Noter les points communs et créer des composants de base.
- Un seul ID modifie les enfants directement (rapide mais non personnalisable).

---

## Configuration et stockage

- Création de valeurs de base ou **fallbackTo**.
- Au lancement, le fichier **config.json** doit :
  - Récupérer les cases cochées pour adapter la config.
  - Utiliser la config pour cocher les bonnes cases.
- Valeurs par défaut stockées en **localStorage** lorsqu'elles sont modifiées.

---

## Icons et styles

- Icônes en **outlined** noir/blanc.
- Export en **HTML/XML/MD**.
- Import = équivalent d'une sauvegarde.
- **CSS** :
  - Deux dossiers : `simplified` et `complete`.
- **Templates** :
  - Pas modifiables une fois utilisés.
  - Possibilité de créer des templates personnalisés.
