import React, { useEffect } from "react";
import "./Modal.css";
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
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  // Gestion de la touche Escape + blocage du scroll arrière-plan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  // Fermer en cliquant sur l’overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="hrnet-modal-overlay" onClick={handleOverlayClick}>
      <div className="hrnet-modal">
        <button
          type="button"
          className="hrnet-modal__close-button"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>

        {title && <h3 className="hrnet-modal__title">{title}</h3>}

        <div className="hrnet-modal__body">{children}</div>
      </div>
    </div>
  );
}
