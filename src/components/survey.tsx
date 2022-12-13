import { ChangeEventHandler, useEffect, useState } from 'react'
import { ICharacter } from '../interfaces'
import '../styles/survey-style.css'



type SurveyPropsType = {
    updateSurveyVisible: (state: boolean) => void,
    updateQuizVisible:(state:boolean) => void;
    person:ICharacter;
    setPerson:(person:ICharacter)=>void
}

const Survey = (props:SurveyPropsType) => {

    // const [person, setPerson] = useState<ICharacter>(initialPerson)
    const [startSurvey,setStartSurvey] = useState<boolean>(false)

    const personCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.name === 'name') {
            props.setPerson({ ...props.person, name: event.target.value })
        }
        else if (event.target.name === 'age') {
            props.setPerson({ ...props.person, age: parseInt(event.target.value) })
        }
        else if (event.target.name === 'happiness') {
            props.setPerson({ ...props.person, happiness: parseInt(event.target.value) })
        }
    }

    const getHappinnesLevel = (percent: number): JSX.Element => {
        switch (percent) {
            case 100:
                return (<span>&#129321;</span>)
            case 75:
                return (<span>&#128578;</span>)
            case 50:
                return (<span>&#128528;</span>)
            case 25:
                return (<span>&#128543;</span>)
            case 0:
                return (<span>&#128532;</span>)
            default:
                return (<span>&#128532;</span>)
        }
    }

    return (<div style={{ display: startSurvey ? 'none' : '' }}>
        <div className="survey-container">
            <input type="text" placeholder="What is four name?" onChange={personCharacter} name='name' required/>
            <input type="number" placeholder="How old are you?" onChange={personCharacter} name='age' required />
            <div className='happy-level'>
                <input type="range" placeholder="How happy are you?" onChange={personCharacter} name='happiness' id='happy' step='25' value={props.person.happiness} />
                <label htmlFor="happy">Your Happinnes Level</label>
                {getHappinnesLevel(props.person.happiness)}
            </div>
            <div className='arrow-container'>
                <span className='arrow arrow-animation' onClick={() => {
                props.updateSurveyVisible(false)
                props.updateQuizVisible(true)
                setStartSurvey(true)
            }}>&#8594;</span>
            </div>
        </div>
    </div>)
}

export default Survey