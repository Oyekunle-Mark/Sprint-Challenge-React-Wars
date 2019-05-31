import React, { Component } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousPage: null,
      nextPage: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          previousPage: data.previous,
          nextPage: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars, previousPage, nextPage } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsCharacterList={starwarsChars} />
        <Footer
          prev={previousPage}
          next={nextPage}
          clickHandler={this.getCharacters}
        />
      </div>
    );
  }
}

export default App;
