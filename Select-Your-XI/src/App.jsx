import "./App.css";
import navImg from "./assets/logo.png"
import coinImg from "./assets/coin.png"

function App() {
  return <>
 <div className="navbar bg-base-100 shadow-sm">
  
  <div className="flex-1 ">
    <img className="w-[60px] h-[60px]" src={navImg} alt="" />
  </div>
  <div className="flex items-center">
     <span>6000000</span>
     <img className="w-[30px] h-[30px]" src={coinImg} alt="" />
     
  </div>
</div>
  </>;
}

export default App;
