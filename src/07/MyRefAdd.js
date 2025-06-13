import { useEffect, useRef } from "react"
import TailButton from "../UI/TailButton"

export default function MyRefAdd() {
    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    useEffect(() => {
        x1.current.focus();
    }, [])

    const handleAdd = () => {
        if (!x1.current.value) {
            alert('첫번째 값을 입력하세요.');
            x1.current.focus();
            return;
        }
        if (!x2.current.value) {
            alert('두번째 값을 입력하세요.');
            x2.current.focus();
            return;
        }
        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
    }

    const handleFocus = (x) => {
        x3.current.value = '';
        x.current.value = '';
    }

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
        <input ref={x1} onFocus={() => handleFocus(x1)} type="number" id='txt1' className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"/>
        <div className="flex justify-center items-center text-xl font-bold">+</div>
        <input ref={x2} onFocus={() => handleFocus(x2)} type="number" id='txt1' className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"/>
        <TailButton caption={'='} bcolor={'orange'} handleClick={handleAdd} />        
        <input ref={x3} type="number" id='txt1' className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"/>
      </div>
    </div>
  )
}
