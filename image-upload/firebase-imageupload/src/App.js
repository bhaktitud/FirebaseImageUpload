import React, { useState } from 'react';
import './App.css';
import { handleImageAsFile } from './firebase/imageHandler'
import { handleFirebaseUpload } from './firebase/imageUploader'


function App() {
  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  return (
    <div className="App">
      <form onSubmit={e => handleFirebaseUpload(e, imageAsFile, setImageAsUrl)} >
        <input 
          type='file'
          onChange={e => handleImageAsFile(e, setImageAsFile)}
        />
        <button>Upload</button>
      </form>
      {/* <img src={imageAsUrl.imgUrl} alt='uploaded' /> */}
    </div>
  );
}

export default App;
