import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { addCardToCollection, addCardToDeck } from './../../actions'


function CardList(props) { 
  const {dispatch} = props;
  const cards = props.cards;

  function onAddCardToCollection(card) {
    dispatch(addCardToCollection(card))
  }

  return(

    <div className='mainList'>
      { props.mapType === 'array' ? 
          cards.length ? 
          cards.map( function(card, index) { 
              return (
                <div className='card' key={index}>
                  <Card card={card}/>
                  <button type='button' onClick={() => {onAddCardToCollection(card)}}>Add to Collection</button>
                  <button type='button'>Add to Deck...</button>
                </div>
              )
            }) 
          : null
        : Object.keys(cards).map( function(cardId, index) { 
          return (
            <div className='card' key={index}>
              <Card card={cards[cardId]}/>
              <button type='button' onClick={() => {onAddCardToCollection(cards[cardId])}}>Add to Collection</button>
              <button type='button'>Add to Deck...</button>
            </div>
          )
        }) 
        }
      }

    <style jsx>{`
      .mainList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .card {
        border: 2px solid darkgrey;
        border-radius: 30px;
        margin: auto;
        margin-bottom: 30px;
        max-width: 500px;
        min-width: 300px;
      }
      button {
        margin: 0 0 20px 20px;
      }
    `}</style>
    </div>
  )
    
}


export default connect()(CardList);