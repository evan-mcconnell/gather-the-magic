import React from 'react';
import {connect} from 'react-redux';
import CardList from '../../ui/CardList';

function Collection(props) {
  return (
    <CardList cards={props.collection.cards} style='object'/>
  )
}

function mapStateToProps(state) {
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps)(Collection);