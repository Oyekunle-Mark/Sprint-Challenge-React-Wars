import React from "react";
import "./CharacterCard.css";

export default function CharacterCard({
  name,
  birth_year,
  gender,
  height,
  mass,
  eye_color,
  skin_color,
}) {
  return (
    <div className="character-card">
      <h3>{name}</h3>
      <h5>Personal Information</h5>

      <ul>
        <li>Born: {birth_year}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Weight: {mass}</li>
        <li>Eye Color: {eye_color}</li>
        <li>Skin Color: {skin_color}</li>
      </ul>
    </div>
  );
}
