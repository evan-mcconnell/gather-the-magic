import React, {useState} from 'react';
import {connect} from 'react-redux';

import RoundToggle from '../../ui/RoundToggle';
import images from './../../../assets/images/index';


function SearchForm(props) {

  const {dispatch} = props
  const [buttonWhite, toggleButtonWhite] = useState(true)
  const [buttonBlue, toggleButtonBlue] = useState(true)
  const [buttonBlack, toggleButtonBlack] = useState(true)
  const [buttonRed, toggleButtonRed] = useState(true)
  const [buttonGreen, toggleButtonGreen] = useState(true)
  const [buttonCreature, toggleButtonCreature] = useState(true)
  const [buttonPlaneswalker, toggleButtonPlaneswalker] = useState(true)
  const [buttonInstant, toggleButtonInstant] = useState(true)
  const [buttonSorcery, toggleButtonSorcery] = useState(true)
  const [buttonEnchantment, toggleButtonEnchantment] = useState(true)

  const [buttonLand, toggleButtonLand] = useState(true)

  let _keyword = null;


  function handleSearchSubmit(e) {
    e.preventDefault();
    return null;
  }



  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type='text' 
          id='keyword'
          placeholder='Search'
          ref={(input) => { _keyword = input; }} /> <br />
        <div className='colorToggles'>
          <RoundToggle onClick={() => toggleButtonWhite(!buttonWhite)}
            active={buttonWhite}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.colorSym.white}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonBlue(!buttonBlue)}
            active={buttonBlue}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.colorSym.blue}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonBlack(!buttonBlack)}
            active={buttonBlack}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.colorSym.black}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonRed(!buttonRed)}
            active={buttonRed}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.colorSym.red}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonGreen(!buttonGreen)}
            active={buttonGreen}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.colorSym.green}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonLand(!buttonLand)}
            active={buttonLand}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.land}></img></RoundToggle>
        </div>
        <div className='typeToggles'>
          <RoundToggle onClick={() => toggleButtonCreature(!buttonCreature)}
            active={buttonCreature}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.creature}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonPlaneswalker(!buttonPlaneswalker)}
            active={buttonPlaneswalker}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.planeswalker}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonInstant(!buttonInstant)}
            active={buttonInstant}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.instant}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonSorcery(!buttonSorcery)}
            active={buttonSorcery}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.sorcery}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonEnchantment(!buttonEnchantment)}
            active={buttonEnchantment}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.enchantment}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonCreature(!buttonCreature)}
            active={buttonCreature}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.typeSym.creature}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonLand(!buttonLand)}
            active={buttonLand}
            colorActive='lightgrey'
            colorInactive='grey'>
            <img src={images.land}></img></RoundToggle>
          
        </div>

      </form>

    <style jsx>{`
      form {
        width: 500px;
        margin: auto;
      }
      .colorToggles, .typeToggles {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
    </div>
  )
}

export default connect()(SearchForm);