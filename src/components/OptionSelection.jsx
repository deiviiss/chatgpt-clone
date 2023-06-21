export default function OptionSelection ({ arrayItems, selectOption }) {
  return (
      <div className='grid-main'>
      {arrayItems.map((item) => {
        return <div className='grid-child'
        onClick={() => selectOption(item.option) } key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        </div>
      })}
      </div>
  )
}
