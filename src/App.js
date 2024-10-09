import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black flex flex-col gap-10">
      <div className="text-3xl text-white font-serif">Counter App</div>
      <div className="flex">
        <div className="px-4">
          <button onClick={decrement} className="bg-white rounded-sm h-20 w-20">
            <i className="fa-solid fa-minus text-black text-[50px]"></i>
          </button>
        </div>
        <div id="counter" className="px-4 bg-white text-3xl font-bold">
          <button className="text-black bg-white text-[50px] rounded-sm h-20 w-50 flex justify-center items-center">
            {count}
          </button>
        </div>
        <div className="px-4">
          <button onClick={increment} className="bg-white rounded-sm h-20 w-20">
            <i className="fa-solid fa-plus text-black text-[50px]"></i>
          </button>
        </div>
      </div>
      <div className="bg-slate-300 px-8 py-4 text-lg font-bold bg-blue-500 text-white rounded-lg">
        <button onClick={reset}>Reset</button>
      </div>
      <div className="text-white my-40">
        <i className="fa-solid fa-heart fa-flip-horizontal fa-sm"></i>
        @Praveen Kumar
      </div>
    </div>
  );
}

export default App;
