import React from 'react';
import Card from './Card';


function CardListDisplay(props) {
  return(
    <div className='mainList'>
      { 
        props.cards.length ? 
        props.cards.map(function(card, index) { return <Card card={card} key={index}/>}) 
        : null 
      }

    <style jsx>{`
      .mainList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      Card {
        margin: 20px;
      }
    
    `}</style>
    </div>
  )
}


export default CardListDisplay;