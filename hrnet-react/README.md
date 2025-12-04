# HRnet — React Migration (OpenClassrooms - Projet 14)

Ce projet consiste à migrer l’application interne **HRnet** (WealthHealth)  
d’une version **jQuery vieillissante** vers une version **React moderne, stable et performante**.

Ce travail inclut :

- la conversion complète de l’application HRnet en React,
- la création d'une **librairie React publique** remplaçant un plugin jQuery,
- la refonte des composants lents (datepickers, dropdowns, tables),
- l'ajout d’un **système de gestion d’état moderne** (Redux Toolkit),
- des **tests de performance Lighthouse** avant/après migration,
- le déploiement de la nouvelle version.

---

## 1. Objectifs du projet

- Convertir l’application HRnet jQuery en **100 % React**
- Remplacer les plugins jQuery obsolètes par des **composants React** :
  - Modal (converti officiellement et publié sur npm)
  - Dropdown
  - DatePicker
  - DataTable
- Améliorer les performances + stabilité
- Supprimer toute dépendance à jQuery
- Utiliser Redux Toolkit pour la gestion d’état
- Produire un rapport de performance Lighthouse (avant / après)
- Publier une bibliothèque npm : **react-hrnet-modal**
- Déployer l’application React en production

---

### 2. Librairie React publiée sur npm

Dans le cadre de la migration, le plugin jQuery `kylefox/jquery-modal`  
a été converti en composant React **et publié sous forme de package npm**.

👉 **react-hrnet-modal (npm)**  
https://www.npmjs.com/package/react-hrnet-modal

👉 **Dépôt GitHub**  
https://github.com/iL-Tech78/react-hrnet-modal

Ce composant reproduit fidèlement :

- overlay sombre
- modal centrée
- bouton de fermeture
- fermeture via clic extérieur / touche Échap
- blocage du scroll arrière-plan

---

#### 3. Technologies utilisées

- **React** 18+
- **Redux Toolkit**
- **Vite**
- **React Router**
- **CSS modules / composants stylisés**
- **npm** (publication de package)

---

##### 4. Fonctionnalités de l’application

## Create Employee

- Formulaire complet
- Sélecteurs améliorés :
  - DatePicker React (remplace le datetimepicker jQuery)
  - Dropdown React (remplace jQuery UI SelectMenu)
- Ajout d’un employé dans Redux
- Affichage d’une **modal React** (à la place de jQuery modal)

## Employee List

- Listing dynamique des employés
- Table réactive développée en React (remplace DataTables jQuery)
- Recherche, pagination, filtrage
- Lecture des données depuis Redux

---

###### 5. Conversion des plugins jQuery → React

| Plugin jQuery d'origine | Nouveau composant React     | Statut    |
| ----------------------- | --------------------------- | --------- |
| jQuery Modal            | **react-hrnet-modal** (npm) | ✅ Publié |
| jQuery UI SelectMenu    | `Dropdown.jsx`              | ✅ React  |
| datetimepicker jQuery   | `DatePicker.jsx`            | ✅ React  |
| DataTables jQuery       | `DataTable.jsx`             | ✅ React  |

---

###### # 6. Gestion d'état : Redux Toolkit

L'application n’utilise plus localStorage.  
Tout est centralisé via un **store Redux** :

- `employeesSlice.js` gère la liste des employés
- `addEmployee()` pour ajouter un nouvel enregistrement
- `useDispatch()` côté formulaire
- `useSelector()` côté tableau

Ce choix améliore :

- la maintenabilité
- la fiabilité
- la cohérence des données

---

###### ## 7. Performances — Audit Lighthouse

Deux audits ont été réalisés :

## Avant migration — version jQuery

- fichier : `docs/performance/lighthouse-hrnet-jquery.json`
- lancé sur l'application originale
- résultats incluant :
  - temps de chargement
  - appels réseau
  - métriques de performance
  - visualisation Lighthouse

## Après migration — version React

- fichier : `docs/performance/lighthouse-hrnet-react.json`
- lancé sur la version buildée / déployée de HRnet React
- résultats montrant l'amélioration globale de l’app

---

###### ### 8. Installation & lancement du projet HRnet React

```bash
# Cloner le projet
git clone https://github.com/iL-Tech78/P12_Front-end

# Installer les dépendances
npm install

# Lancer en dev
npm run dev

# Builder pour la production
npm run build
```

###### ### 9. Déploiement

L’application est déployée sur Netlify :
https://projet-hrnet.netlify.app/

###### #### 10. Tests

- Tests manuels complets
- Vérification du store Redux
- Vérification des composants convertis
- Aucune erreur console en mode production

###### ##### 11. Auteur

Projet réalisé par Iliesse
OpenClassrooms — Parcours Développeur d’Application JavaScript React
Projet 14 — “Faites passer une librairie jQuery vers React”

###### ##### 12. Licence

MIT License — Libre pour usage personnel et professionnel.
