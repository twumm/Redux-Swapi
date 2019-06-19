import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from '../actions/index'; // import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null /* mapStateToProps replaces null here */,
  {
    fetchCharacters
  }
)(CharacterListView);
