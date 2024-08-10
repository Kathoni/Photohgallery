import React from 'react'
import PhotoGrid from './Component/PhotoGrid'

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          margin: '2rem 0'

        }}>Unsplash Photo Gallery</h1>
      <PhotoGrid />
    </div>
  )
}

export default App