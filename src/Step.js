import './Step.css';
import { useState, useEffect } from "react";

function getClass(type) {
    switch (type) {
        case 'start':
            return 'round-start';

        case 'stop':
            return 'round-stop';

        case 'one-step':
            return 'rectangle';

        case 'decision':
            return 'diamond';

        default:
            return;
    }
}

function addDecision() {
    const decisionDetails = {
        type: 'decision'
    }
    const stepDetails = {
        type: 'one-step'
    }
    return (
        <div>
            <Step details={decisionDetails} />
            <div className="decision-container">
                <Step details={stepDetails} />
                <Step details={stepDetails} />
            </div>
        </div>
    )
}

function addEnd() {
    const stepDetails = {
        type: 'stop'
    }
    return <Step details={stepDetails} />
}

function addStep() {
    const stepDetails = {
        type: 'one-step'
    }
    return <Step details={stepDetails} />
}


const Step = (props) => {
    const [display, setDisplay] = useState(false);
    const [nextSteps, setNextStep] = useState(null);
    const [childrenAdded, setChildrenAdded] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('');
    const details = props.details;
    const stepsClass = 'steps ' + getClass(details.type);

    useEffect(() => {
        if (details.type === 'decision' || details.type === 'stop') {
            setChildrenAdded(true);
        }
        if (details.type === 'start') {
            setPlaceholderText('Start')
        }
    }, [details.type]);

    const addNewStep = () => {
        setNextStep(addStep());
        setChildrenAdded(true);
    }
    const addNewDecision = () => {
        setNextStep(addDecision());
        setChildrenAdded(true);
    }
    const addNewEnd = () => {
        setNextStep(addEnd());
        setChildrenAdded(true);
    }

    return (
        <div>
            <div className="container" onMouseEnter={e => setDisplay(true)} onMouseLeave={e => setDisplay(false)}>
                <input type="text" placeholder={placeholderText} className={stepsClass} />
                <div className={`${display && !childrenAdded ? "options" : "hide"}`}>
                    <button className="add-step" onClick={addNewStep}>Add</button>
                    <button className="add-step" onClick={addNewDecision}>Decide</button>
                    <button className="stop" onClick={addNewEnd}>Stop</button>
                </div>
            </div>
            <div id="next-steps">{nextSteps}</div>
        </div>
    )
}

export default Step;