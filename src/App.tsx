import React, { useState } from 'react';
import Greeting from './components/greeting';
import './App.css'
import Survey from './components/survey';
import Quiz from './components/quiz';
import { ICharacter } from './interfaces';

const initialPerson: ICharacter = {
  name: '',
  age: 0,
  happiness: 0
}

function App() {
  const [greetingVisible, setGreetingVisible] = useState<boolean>(true)
  const [surveyVisible, setSurveyVisible] = useState<boolean>(false)
  const [quizVisible, setQuizVisible] = useState<boolean>(false)
  const [person, setPerson] = useState<ICharacter>(initialPerson)

  const updateGreetingState = (greetingState: boolean) => {
    setGreetingVisible(greetingState)
  }
  const updateSurveyVisible = (surveyState: boolean) => {
    setSurveyVisible(surveyState)
  }

  const updateQuizVisible = (quizState: boolean) => {
    setQuizVisible(quizState)
  }
  const setPersonHandleChange = (person: ICharacter) => {
    setPerson(person)
  }

  return (
      <div className={quizVisible?'':'main'}>
        {greetingVisible && <Greeting updateGreetingState={updateGreetingState} updateSurveyVisible={updateSurveyVisible} />}
        {surveyVisible && <Survey person={person} setPerson={setPersonHandleChange} updateSurveyVisible={updateSurveyVisible} updateQuizVisible={updateQuizVisible} />}
        {quizVisible && <Quiz person={person} />}
      </div>
  );


}

export default App;
