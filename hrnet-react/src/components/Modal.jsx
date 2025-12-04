import React, { useEffect } from "react";
import "./Modal.css";
/**
 * react-hrnet-modal (version utilisée dans l'application HRnet)
 * ------------------------------------------------------
 * Composant modal React léger inspiré du plugin jQuery original
 * « kylefox/jquery-modal », utilisé dans l'application HRnet.
 *
 * Ce composant remplace l'ancien modal jQuery dans HRnet et offre :
 * - Une superposition sombre sur toute la page
 * - Une boîte de dialogue blanche centrée
 * - Un bouton de fermeture dans le coin supérieur droit
 * - Fermeture lorsque l'on clique sur la superposition, que l'on appuie sur la touche Échap ou que l'on clique sur le bouton de fermeture
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
 */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  // Gestion de la touche Escape (on ne touche plus au scroll du body)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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
