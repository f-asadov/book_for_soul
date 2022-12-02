import { ChangeEventHandler, useEffect, useState } from 'react'
import { ICharacter } from '../interfaces'
import '../styles/survey-style.css'

const initialPerson: ICharacter = {
    name: '',
    age: 0,
    happiness: 0
}
const Survey = () => {

    const [person, setPerson] = useState<ICharacter>(initialPerson)

    const personCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.name === 'name') {
            setPerson({ ...person, name: event.target.value })
        }
        else if (event.target.name === 'age') {
            setPerson({ ...person, age: parseInt(event.target.value) })
        }
        else if (event.target.name === 'happiness') {
            setPerson({ ...person, happiness: parseInt(event.target.value) })
        }
    }

    return (<div>
        <div className="survey-container">
            <input type="text" placeholder="What is four name?" onChange={personCharacter} name='name' />
            <input type="number" placeholder="How old are you?" onChange={personCharacter} name='age' />
            <input type="range" placeholder="How happy are you?" onChange={personCharacter} name='happiness' id='happy' step='10' value={person.happiness} />
            <label htmlFor="happy">{person.happiness}</label>
            <div className='arrow-container'>
                <span className='arrow arrow-animation'>&#8594;</span>
            </div>
        </div>
    </div>)
}

export default Survey