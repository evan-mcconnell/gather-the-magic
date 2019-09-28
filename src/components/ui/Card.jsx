import React from 'react';

function Card(props) {
  const card = props.card
  return (
    <div className='main'>
      <div className='image'>
        <p>Here should be a card image</p>
      </div>
      <div className='mainDetails'>
        <h2>{card.name}</h2>
        <h4>{card.type_line}</h4>
      </div>
    <style jsx>{`
      .mainDetails {

      }
    `}</style>
    </div>
  )
}

export default Card;