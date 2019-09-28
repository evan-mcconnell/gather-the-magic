import React, {useState} from 'react';
import {connect} from 'react-redux';

import RoundToggle from '../../ui/RoundToggle';
import images from './../../../assets/images/index';

import constants from '../../../constants';
const { c } = constants;

function SearchForm(props) {

  const {dispatch} = props
  const [buttonWhite, toggleButtonWhite] = useState(false)
  const [buttonBlue, toggleButtonBlue] = useState(false)
  const [buttonBlack, toggleButtonBlack] = useState(false)
  const [buttonRed, toggleButtonRed] = useState(false)
  const [buttonGreen, toggleButtonGreen] = useState(false)

  const [colorUnion, toggleColorUnion] = useState(false)

  const [buttonCreature, toggleButtonCreature] = useState(false)
  const [buttonPlaneswalker, toggleButtonPlaneswalker] = useState(false)
  const [buttonInstant, toggleButtonInstant] = useState(false)
  const [buttonSorcery, toggleButtonSorcery] = useState(false)
  const [buttonEnchantment, toggleButtonEnchantment] = useState(false)
  const [buttonArtifact, toggleButtonArtifact] = useState(false)
  const [buttonLand, toggleButtonLand] = useState(false)

  let _keyword = null;


  function formData() {
    let colors = []
    let cardTypes = []
    buttonWhite ? colors.push('w') : null;
    buttonBlue ? colors.push('u') : null;
    buttonBlack ? colors.push('b') : null;
    buttonRed ? colors.push('r') : null;
    buttonGreen ? colors.push('g') : null;

    buttonCreature ? cardTypes.push('creature') : null;
    buttonPlaneswalker ? cardTypes.push('planeswalker') : null;
    buttonInstant ? cardTypes.push('instant') : null;
    buttonSorcery ? cardTypes.push('sorcery') : null;
    buttonEnchantment ? cardTypes.push('enchantment') : null;
    buttonArtifact ? cardTypes.push('artifact') : null;
  
    return {keyword: _keyword.value, union: colorUnion, colors: colors, cardTypes: cardTypes}
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    let newSearch = formData();
    dispatch({type: c.CARD_SEARCH, params: newSearch})
    console.log(newSearch)
    _keyword.value = '';
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
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.colorSym.white}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonBlue(!buttonBlue)}
            active={buttonBlue}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.colorSym.blue}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonBlack(!buttonBlack)}
            active={buttonBlack}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.colorSym.black}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonRed(!buttonRed)}
            active={buttonRed}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.colorSym.red}></img></RoundToggle>

          <RoundToggle onClick={() => toggleButtonGreen(!buttonGreen)}
            active={buttonGreen}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.colorSym.green}></img></RoundToggle>
          
          <RoundToggle onClick={() => toggleColorUnion(!colorUnion)}
            active={colorUnion}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <p style={{fontSize: '0.8em'}}>Only show cards with all selected colors</p></RoundToggle>

        </div>
        <div className='typeToggles'>
          <RoundToggle onClick={() => toggleButtonCreature(!buttonCreature)}
            active={buttonCreature}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.creature}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonPlaneswalker(!buttonPlaneswalker)}
            active={buttonPlaneswalker}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.planeswalker}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonInstant(!buttonInstant)}
            active={buttonInstant}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.instant}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonSorcery(!buttonSorcery)}
            active={buttonSorcery}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.sorcery}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonEnchantment(!buttonEnchantment)}
            active={buttonEnchantment}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.enchantment}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonArtifact(!buttonArtifact)}
            active={buttonArtifact}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.typeSym.artifact}></img></RoundToggle>
          <RoundToggle onClick={() => toggleButtonLand(!buttonLand)}
            active={buttonLand}
            colorActive='maroon'
            colorInactive='darkgrey'>
            <img src={images.land}></img></RoundToggle>
          
        </div>
        <button type='submit'>SEARCH</button>
      </form>

    <style jsx>{`
      form {
        width: 500px;
        margin: auto;
      }
      .colorToggles, .typeToggles {
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .colorCheckbox {
        width: 25%;
        font-size: 0.85em;
        text-align: center;
      }
    `}</style>
    </div>
  )
}

export default connect()(SearchForm);