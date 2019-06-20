import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from '../actions/index'; // import actions

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.fetchCharacters();
    console.log(this.state)
  }

  render() {
    if (this.props.fetching) {
      return <div>Data is loading</div>
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
function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  }
}


export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
