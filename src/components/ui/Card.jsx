import React from 'react';

function Card(props) {
  const card = props.card
  return (
    <div className='main'>

      <div className='image'>
        <img src={card.image}></img>
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
          max-width: 500px;
          min-width: 300px;
          padding: 20px;
          display: flex;
          flex-direction: row;
        }
        .image {
          width: 180px;
          height: 200px;
          border-radius: 20px;
        }
        img {
          width: 160px;
          height: 220px;
        }
        .details {
          padding: 20px;
          width: 60%;
        }
        p {
          margin 10px 0;
          font-size: 0.8em;
          max-height: 100px;
          overflow: scroll;
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