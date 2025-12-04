import React from "react";
import "./DatePicker.css";

/**
 * Composant DatePicker simple utilisant le <input type="date"> natif.
 *
 * Props :
 * - label {string}       : Libellé affiché au-dessus du champ de saisie.
 * - value {string}       : Valeur de la date actuelle (format : AAAA-MM-JJ).
 * - onChange {function}  : Appelé avec la nouvelle valeur lorsque la date change.
 * - name {string}        : Nom/identifiant facultatif pour le champ de saisie.
 * - min {string}         : Date minimale facultative (AAAA-MM-JJ).
 * - max {string}         : Date maximale facultative (AAAA-MM-JJ).
 */

export default function DatePicker({ label, value, onChange, name, min, max }) {
  return (
    <div className="datepicker-container">
      {label && (
        <label htmlFor={name} className="datepicker-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="date"
        className="datepicker-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
      />
    </div>
  );
}
