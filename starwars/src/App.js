import React, { Component } from "react";
import ContentLoader from "react-content-loader";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousPage: null,
      nextPage: null,
      isLoading: true
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
          nextPage: data.next,
          isLoading: false
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars, previousPage, nextPage, isLoading } = this.state;

    if (isLoading)
      return <ContentLoader type="instagram" width="100" height="100" />;

    return (
      <div className="App">
        <header>
          <h1>React Wars</h1>
        </header>
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
