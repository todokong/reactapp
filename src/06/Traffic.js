import { useEffect, useState } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    // 전체 fetch 데이터
    const [tData, setTData] = useState();
    // 대분류 데이터
    const [c1, setC1] = useState();
    // 선택된 대분류
    const [selC1, setSelC1] = useState();
    // 중분류 데이터
    const [c2, setC2] = useState();
    // 선택된 중분류
    const [selC2, setSelC2] = useState();
    // 상세정보
    const [info, setInfo] = useState();    

    const getFetchDate = () => {        
        const url = `https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTData(data.data))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getFetchDate();
    }, []);

    useEffect(() => {
        if (!tData) return;

        let tm = tData.map(item => item['사고유형대분류']);
        tm = [... new Set(tm)];
        setC1(tm);
    }, [tData]);

    useEffect(() => {
        if (!tData || !c1 || !selC1) return;

        let tm = tData.filter(item => item['사고유형대분류'] === selC1)
                        .map(item => item['사고유형']);
        tm = [... new Set(tm)];
        setC2(tm);
    }, [selC1])

    useEffect(() => {
        if (!selC2) return;
        
        let tm = tData.find(item => item['사고유형대분류'] === selC1 && item['사고유형'] === selC2);
        const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
        tm = infoKey.map(item => {
            return (
                <div key={item} className="flex">
                    <div className="w-1/2 h-10 flex justify-center items-center bg-lime-600 text-white font-bold">
                        {item}
                    </div>
                    <div className="w-1/2 h-10 flex justify-center items-center border">
                        {parseInt(tm[item]).toLocaleString()}
                    </div>
                </div>
            )
        })
        setInfo(tm);
    }, [selC2])
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">   
        {c1 && <TrafficNav title={'대분류'} c={c1} sel={selC1} setSel={setSelC1} />}
        {c2 && <TrafficNav title={'사고유형'} c={c2} sel={selC2} setSel={setSelC2} />}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {info}
        </div>
    </div>
  )
}
