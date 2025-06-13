import GalleryCard from "./GalleryCard"
import TailButton from "../UI/TailButton"
import { useEffect, useRef, useState } from "react"

export default function Gallery() {
    const [tdata, setTdata] = useState([]);
    const [cards, setCards] = useState([]);
    const inRef = useRef(); 

    useEffect(() => {
        inRef.current.focus();
    }, [])

    useEffect(() => {
        const tm = tdata.map(item => {
            return (<GalleryCard key={item.galContentId} item={item} />);
        })
        setCards(tm);
    }, [tdata])

    const getFetchDate = () => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}`;
        url += `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url += `&keyword=${encodeURI(inRef.current.value)}&_type=json`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => setTdata(data.response.body.items.item))
            .catch(err => console.error(err));
    }

    const handleOK = (e) => {
        e.preventDefault();
        if (!inRef.current.value) {
            alert('키워드를 입력하세요.');
            inRef.current.focus();
            return;
        }
        getFetchDate();
    }

    const handleClear = () => {
        
    }
    
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        <form className="w-10/12 h-24 flex justify-center items-center">
            <div>
                <input ref={inRef} type="text" id="txt1" className="form-input rounded w-full" />
            </div>
            <div>
                <TailButton caption={'확인'} bcolor={'blue'} handleClick={handleOK} />
                <TailButton caption={'취소'} bcolor={'blue'} handleClick={handleClear} />
            </div>
        </form>
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {cards}
        </div>
    </div>
  )
}
