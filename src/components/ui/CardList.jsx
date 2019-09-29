import React from 'react';
import Card from './Card';


function CardList(props) {
  return(
    <div className='mainList'>
      { 
        props.cards.length ? 
        props.cards.map( function(card, index) { 
            return (
              <div className='card' key={index}>
                <Card card={card}/>
                <button type='button' onClick>Add to Cards</button>
                <button type='button'>Add to Deck...</button>
              </div>
            )
          }) 
        : null 
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


export default CardList;