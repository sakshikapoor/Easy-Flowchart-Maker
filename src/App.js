import Step from './Step';
import './App.css';
import { useState } from "react";
import refresh from './images/refresh.svg';
import printer from './images/printer.png';

function refreshPage() {
  window.location.reload();
}

function App() {
  const [display, setDisplay] = useState(true);
  const initialDetails = {
    type: 'start',
    children: [],
    level: 0
  }

  const print = () => {
    setDisplay(false);
    setTimeout(() => {
      window.print();
      setDisplay(true);
    }, 0)
  }

  return (
    <div className="background">
      <div className={`${display ? "show" : "hide"}`}>
        <div className="heading">Tree FlowChart Maker</div>
        <img src={refresh} className="refresh" alt="refresh" onClick={refreshPage} />
        <img src={printer} className="print" alt="save" onClick={print} />
      </div>
      <div id="flow">
        <input className="flowchart-name" type="text" placeholder="Click on element to add text" />
        <div className="flow">
          <Step details={initialDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
