import './Step.css';
import { useState, useEffect } from "react";
import downArrow from './images/down-arrow.png';

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
            <img className="arrow" src={downArrow} alt="down-arrow" />
            <div className="decision-container">
                <div>
                    <div className="leftLine"></div>
                    <Step details={stepDetails} />
                </div>
                <div>
                    <div className="rightLine"></div>
                    <Step details={stepDetails} />
                </div>

            </div>
        </div>
    )
}

function addEnd() {
    const stepDetails = {
        type: 'stop'
    }
    return (<div>
        <Step details={stepDetails} />
    </div>);

}

function addStep() {
    const stepDetails = {
        type: 'one-step'
    }
    return (<div>
        <Step details={stepDetails} />
    </div>)

}


const Step = (props) => {
    const [display, setDisplay] = useState(false);
    const [nextSteps, setNextStep] = useState(null);
    const [childrenAdded, setChildrenAdded] = useState(false);
    const [textareaReadOnly, setTextareaReadOnly] = useState(false);
    const details = props.details;
    const stepsClass = 'steps ' + getClass(details.type);

    useEffect(() => {
        if (details.type === 'decision') {
            setChildrenAdded(true);
            setTextareaReadOnly(true);
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
    const deleteChildren = () => {
        setNextStep(null);
        setChildrenAdded(false);
    }

    const showDelete = () => {
        return display && childrenAdded && !['decision', 'stop'].includes(details.type);
    }

    return (
        <div>
            <div className="container" onMouseEnter={e => setDisplay(true)} onMouseLeave={e => setDisplay(false)}>
                <img className="arrow" src={downArrow} alt="down-arrow" />
                <textarea rows="2" cols="20" wrap="hard" className={stepsClass} readOnly={textareaReadOnly} />
                <div className={`${display && !childrenAdded && details.type !== 'stop' ? "options" : "hide"}`}>
                    <button className="add-step" onClick={addNewStep}>Add</button>
                    <button className="add-step" onClick={addNewDecision}>Decide</button>
                    <button className="stop" onClick={addNewEnd}>Stop</button>
                </div>
                <div className={`${showDelete() ? "show" : "hide"}`}>
                    <button className="delete" onClick={deleteChildren}>Delete child nodes</button>
                </div>
            </div>
            <div id="next-steps">{nextSteps}</div>
        </div>
    )
}

export default Step;