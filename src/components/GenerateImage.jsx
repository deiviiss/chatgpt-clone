import React from 'react'

export default function GenerateImage({doStuff, setInput, resultImg}) {

  return (
    <div className='main'>
  
      <input type="text" className='app-input' onChange={(e)=> setInput(e.target.value)} />
      <button onClick={doStuff}>Generar una imagen</button>

      {resultImg.length > 0 ? <img className='result-img' src={resultImg} alt="result image"/> : <></>}

    </div>
  )
}
