export default function Translation ({ doStuff, setInput, result, resultImg }) {
  return (
    <div className='main'>
      <textarea cols={30} rows={10} className="text-area" onChange={(e) => setInput(e.target.value)}></textarea>
      <button className="btn-action" onClick={doStuff}>Enviar</button>

      <h4 className="result-text">{result.length > 0 ? result : ''}</h4>
    </div>
  )
}
