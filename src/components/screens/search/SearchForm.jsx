import React, {useState} from 'react';
import {connect} from 'react-redux';

import RoundToggle from '../../ui/RoundToggle';
import images from './../../../assets/images/index';


function SearchForm(props) {

  const {dispatch} = props
  const [buttonBlack, toggleButtonBlack] = useState(true)

  let _keyword = null;


  console.log(land)

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

        <RoundToggle onClick={() => toggleButtonBlack(!buttonBlack)}
          active={buttonBlack}
          colorActive='lightgrey'
          colorInactive='grey'>
          <img src={images.colorSym.black}></img></RoundToggle>

      </form>


    </div>
  )
}

export default connect()(SearchForm);