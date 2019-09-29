import React from 'react';
import {connect} from 'react-redux';

import CardList from '../../ui/CardList';

function SearchResults(props) {


  if (props.search.searching) {
    return (
      <div> Loading... </div> 
    )
  } else if (!props.search.searching) {
    return (
      <div className='list'> 
        <CardList cards={props.search.cards}/> 
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    search: state.search
  }
}

export default connect(mapStatetoProps)(SearchResults);