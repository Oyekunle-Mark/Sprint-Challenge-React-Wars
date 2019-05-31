import React from "react";
import CharacterCard from "../ChararcterCard/CharacterCard";

export default function CharacterList({ starwarsCharacterList }) {
  return (
    <div className="character-list">
      {starwarsCharacterList.map(character => (
        <CharacterCard key={character.url} {...character} />
      ))}
    </div>
  );
}
