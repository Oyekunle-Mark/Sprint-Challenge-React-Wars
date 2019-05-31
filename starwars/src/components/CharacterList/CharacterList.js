import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import './CharacterList.css';

export default function CharacterList({ starwarsCharacterList }) {
  return (
    <div className="character-list">
      {starwarsCharacterList.map(character => (
        <CharacterCard key={character.url} {...character} />
      ))}
    </div>
  );
}
