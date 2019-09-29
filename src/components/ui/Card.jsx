import React from 'react';

function Card(props) {
  const card = props.card
  return (
    <div className='main'>

      <div className='image'>
        <image src='https://via.placeholder.com/140x200'></image>
      </div>
      <div className='details'>

        <div className='detailsHeader'>
          <div className='mainDetails'>
            <h2>{card.name}</h2>
            <h4>{card.type_line}</h4>
          </div>
          {
            card.type_line !== "Creature" 
            ? null 
            : <div className='combatStats'>
                <h3>{card.power} / {card.thoughness}</h3>
              </div>
          }
          <div>
            <p>{card.text}</p>
          </div>
          {/* <div className='detailsHeader'>
            <h2>{card.name}</h2>
            <h4>{card.type_line}</h4>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .main {
          margin: auto;
          margin-bottom: 30px;
          max-width: 500px;
          min-width: 300px;
          border: 2px solid darkgrey;
          border-radius: 30px;
          padding: 20px;
          display: flex;
          flex-direction: row;
        }
        .image {
          background-color: lightgrey;
          width: 140px;
          height: 200px;
          border-radius: 20px;
        }
        .details {
          padding: 20px;
          width: 60%;
        }
        p {
          font-size: 0.8em;
        }
        .mainDetails {
        }
        .detailsHeader {
        }
      `}</style>
    </div>
  )
}

export default Card;