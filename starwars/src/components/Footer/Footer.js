import React from "react";
import './Footer.css';

export default function Footer({ next, prev, clickHandler }) {
  return (
    <footer>
      {prev ? (
        <button onClick={() => clickHandler(prev)}>Previous Page</button>
      ) : null}
      {next ? (
        <button onClick={() => clickHandler(next)}>Next Page</button>
      ) : null}
    </footer>
  );
}
