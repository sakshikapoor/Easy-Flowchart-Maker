import Step from './Step';
import './App.css';
import refresh from './images/refresh.svg';

function refreshPage() {
  window.location.reload();
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
      <h2>Click on element to add text</h2>
      <div className="flow" id="flow">
        <Step details={initialDetails} />
      </div>
      <img src={refresh} className="refresh" alt="refresh" onClick={refreshPage} />
    </div>
  );
}

export default App;
