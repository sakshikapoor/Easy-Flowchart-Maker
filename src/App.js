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
      <div className="heading">Easy FlowChart Maker</div>
      <h2>Hover on start</h2>
      <div className="flow">
        <Step details={initialDetails} />
      </div>
      <img src={refresh} className="refresh" alt="refresh" onClick={refreshPage} />
    </div>
  );
}

export default App;
