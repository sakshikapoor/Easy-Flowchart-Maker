import Step from './Step';
import './App.css';
import refresh from './images/refresh.svg';
import printer from './images/printer.png';

function refreshPage() {
  window.location.reload();
}

function print() {
  var printContents = document.getElementById('flow').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

function App() {
  const initialDetails = {
    type: 'start',
    children: [],
    level: 0
  }
  return (
    <div className="background">
      <div className="heading">Tree FlowChart Maker</div>
      <div id="flow">
        <input className="flowchart-name" type="text" placeholder="Click on element to add text" />
        <div className="flow">
          <Step details={initialDetails} />
        </div>
      </div>
      <img src={refresh} className="refresh" alt="refresh" onClick={refreshPage} />
      <img src={printer} className="print" alt="save" onClick={print} />
    </div>
  );
}

export default App;
