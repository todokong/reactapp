import { useState } from "react";
import TailButton from "../UI/TailButton"
import Ball from "./Ball";

export default function Lotto() {
    const [tags, setTags] = useState();

    const handleOK = () => {
        const arr = [];
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;

            if (!arr.includes(n)) arr.push(n);
        }

        const bonus = arr.splice(-1);
        arr.sort((a, b) => a - b);

        let tm = arr.concat(bonus);
        tm = tm.map(item => <Ball n={item} key={`b${item}`} />)

        tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
        setTags(tm);
    }
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="m-10">
            {tags}
        </div>
        <div>
            <TailButton caption={'로또번호생성'} handleClick={handleOK} bcolor={'blue'}/>
        </div>
    </div>
  )
}
