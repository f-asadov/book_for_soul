import { useState } from 'react'
import '../styles/greeting-style.css'
import Survey from './survey'

type props = {
    updateGreetingState:(state:boolean)=>void,
    updateSurveyVisible:(state:boolean)=>void;
}

const Greeting = (props:props) => {
    const [startJourney, setStartJourney] = useState<boolean>(false)

    return <div className='greeting-container' style={{ display: startJourney ? 'none' : '' }}>
        <h1>Hello my friend, <br />
            Find a book to your heart's content <br />

        </h1>
        <h1 className='journey'>Happy Journey!</h1>
        <div className='arrow-container'>
            <span className='arrow arrow-animation' onClick={() => {
                props.updateGreetingState(false)
                props.updateSurveyVisible(true)
                setStartJourney(true)
            }} >&#8594;</span>
        </div>
        
    </div>
    
    
}

export default Greeting