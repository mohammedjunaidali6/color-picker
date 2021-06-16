import React, { useState } from 'react'
import './App.css'

import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'

function App () {
  const [selectedColor, setSelectedColor] = useState('#ccc')
  return (
    <div className='app'>
      <div className='area' style={{ backgroundColor: selectedColor }}> 
      </div>

      <Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedColor}
          onChangeComplete={color => setSelectedColor(color.hex)}
        />
      }>
        <button className='ref-button'>change box color</button>
      </Tippy>
    </div>
  )
}
export default App;