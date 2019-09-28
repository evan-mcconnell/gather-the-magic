import React from 'react';
import {connect} from 'react-redux';

import Card from './../../ui/Card';

function SearchResults(props) {
  
  console.log("peops", props)
  console.log("search", props.search)
  console.log("cards", props.search.searching)
  console.log(props.search.cards.length)


  if (props.search.searching) {
    return (
      <div> Loading... </div> 
    )
  } else if (!props.search.searching) {
    return (
      <div> 
        { props.search.cards.length ? props.search.cards.map(function(card, index) { return <Card card={card} key={index}/>}) : null } 
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