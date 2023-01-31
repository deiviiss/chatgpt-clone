import { useState } from 'react'
import {Configuration , OpenAIApi} from 'openai';

import Translation from './components/Q&A'
import GenerateImage from './components/GenerateImage'
import OptionSelection from './components/OptionSelection'
import {arrayItems} from './AIOptions/'

import './App.css'

function App() {
  const [option, setOption]=useState({})
  const [input, setInput]=useState("")
  const [result, setResult] = useState("")
const [resultImg, setResultImg]= useState('')

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  
  const selectOption=(option)=>{
    setOption(option)
  }

  const doStuff = async ()=>{
    
    let object = {...option, prompt: input}

    if (option.size) {
      const response = await openai.createImage(object);

      setResultImg(response.data.data[0].url)
    } else {
      
    const response = await openai.createCompletion(object)

    setResult(response.data.choices[0].text);
    }

  }

  const ifImg = option.size
  
  return (
    <>
<h3 className='heading'>Open AI API</h3>

<div className="App">
  {

    Object.values(option).length === 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} />) : (!ifImg ? <Translation doStuff={doStuff} setInput={setInput} result={result} resultImg={resultImg} /> : <GenerateImage doStuff={doStuff} setInput={setInput} result={result} resultImg={resultImg} /> )
  
}
</div>
    </>
  )
}

export default App
