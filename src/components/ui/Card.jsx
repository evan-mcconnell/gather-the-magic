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
        .main {
          margin: auto;
          width: 90%;
          border: 2px solid darkgrey;
          border-radius: 30px;
          padding: 20px;
        }
        .image {
          background-color: lightgrey;
          width: 200px;
          height: 300px;
          border-radius: 20px;
        }
        .mainDetails {

        }
      `}</style>
    </div>
  )
}

export default Card;