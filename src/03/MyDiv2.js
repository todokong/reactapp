import MyDiv3 from "./MyDiv3"

export default function MyDiv2({d1, d2, d3}) {
  return (
    <div className="flex flex-col p-5 m-10 justify-center items-center w-3/4 h-3/4 text-2xl bg-lime-700 text-white">
        <div className="w-full h-10 flex justify-start items-center">
            {`${d1} > ${d2}`}
        </div>
        <MyDiv3 d1={d1} d2={d2} d3={d3} />
    </div>
  )
}
