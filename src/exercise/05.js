// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box(props) {
  return (
    <div
      className={`box box--${props.size}`}
      style={{fontStyle: 'italic', backgroundColor: props.bgColor}}
    >
      {props.children}
    </div>
  )
}

const smallBox = (
  <Box size="small" bgColor="lightblue">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" bgColor="pink">
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" bgColor="orange">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
