import './App.css';
// import Hello from './01/Hello';
import MyClock from './02/MyClock';
import { IoHome } from "react-icons/io5";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>React Basic</p>
        <p><IoHome /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        <MyClock />
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        Lee Gyu Hong
      </footer>
    </div>
  );
}

export default App;
