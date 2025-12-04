/**
 * react-hrnet-modal
 * -------------------------
 * Un composant modal React léger inspiré du plugin jQuery original
 * « kylefox/jquery-modal », utilisé dans l'application HRnet.
 *
 * Ce composant remplace l'ancien modal jQuery dans HRnet et offre :
 * - Une superposition sombre sur toute la page
 * - Une boîte de dialogue blanche centrée
 * - Un bouton de fermeture dans le coin supérieur droit
 * - Fermeture par clic sur la superposition, touche Échap ou bouton de fermeture
 * - Empêche le défilement de l'arrière-plan lorsqu'il est ouvert
 *
 * Props :
 * ---------
 * @param {boolean} isOpen
 *    Contrôle si le modal est visible.
 *
 * @param {function} onClose
 *    Appelé lorsque l'utilisateur ferme le modal :
 *    clic sur la superposition, bouton « × » ou touche Échap.
 *
 * @param {string} [title]
 *    Titre facultatif affiché au-dessus du contenu du modal.
 *
 * @param {React.ReactNode} children
 *    Contenu affiché à l'intérieur du corps du modal.
 *
 * Remarques :
 * ---------
 * Il s'agit du remplacement officiel React pour le plugin modal jQuery
 * utilisé dans l'application jQuery HRnet d'origine.
 * Il n'inclut *intentionnellement* pas les fonctionnalités spécifiques à jQuery telles que :
 * - Chargement AJAX...
 *
 * L'objectif est de fournir un modal propre, simple et moderne pour HRnet.
 */