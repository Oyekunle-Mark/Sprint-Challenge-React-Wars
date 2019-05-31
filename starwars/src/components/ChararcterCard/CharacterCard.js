import React from "react";

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
      <h2>{name}</h2>
      <h4>Personal Information</h4>

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
