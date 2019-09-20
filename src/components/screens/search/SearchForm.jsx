import React, {useState} from 'react';
import RoundToggle from '../../ui/RoundToggle';

function SearchForm() {
  const [button1, toggleButton1] = useState(true)

  return (
    <div>
      <RoundToggle onClick={() => toggleButton1(!button1)} active={button1}>TOGGLE</RoundToggle>
    </div>
  )
}

export default SearchForm;