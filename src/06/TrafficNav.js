import TailButton from "../UI/TailButton"

export default function TrafficNav({title, c, sel, setSel}) {
    const handleClick = (item) => {
        setSel(item);
    }

    const cTag = c.map(item => {
        return (
            <TailButton 
                caption={item} 
                bcolor={sel === item ? 'orange' : 'blue'} 
                handleClick={() => handleClick(item)}
                key={item}
            />
        )
    })

  return (
    <div className="w-full flex justify-start items-center my-5">
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
