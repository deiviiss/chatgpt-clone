import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react'

import { arrayItems } from './AIOptions/'
import GenerateImage from './components/GenerateImage'
import OptionSelection from './components/OptionSelection'
import Translation from './components/Q&A'

import './App.css'

function App () {
  const [error, setError] = useState(false)
  const [option, setOption] = useState({})
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [resultImg, setResultImg] = useState('')

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)

  const selectOption = (option) => {
    setOption(option)
  }

  const doStuff = async () => {
    try {
      const object = { ...option, prompt: input }

      if (option.size) {
        const response = await openai.createImage(object)
        setResultImg(response.data.data[0].url)
      } else {
        const response = await openai.createCompletion(object)
        setResult(response.data.choices[0].text)
      }
    } catch (error) {
      // Manejo de errores aquí
      console.error('Error al llamar a la API de OpenAI:', error)
      setError(true)
    }
  }

  const ifImg = option.size

  return (
    <>
<h3 className='heading'>Open AI API</h3>

<div className="App">
        {
          error && <h3 className='heading'>Error in API key</h3>
        }
  {
    Object.values(option).length === 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} />) : (!ifImg ? <Translation doStuff={doStuff} setInput={setInput} result={result} resultImg={resultImg} /> : <GenerateImage doStuff={doStuff} setInput={setInput} result={result} resultImg={resultImg} />)

}
</div>
    </>
  )
}

export default App
