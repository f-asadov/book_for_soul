import { ICharacter, IQuestion, IResult } from '../interfaces'
import '../styles/quiz-style.css'
import questions from '../constansts/question.json'
import React, { useState } from 'react';
import { createHook } from 'async_hooks';

type QuizPropsType = {
    person: ICharacter;
}

const inititalState: IResult = {
    answer: '',
    sanguine: 0,
    choleric: 0,
    phlegmatic: 0,
    melancholic: 0
}

const Quiz = (props: QuizPropsType) => {
    const quiestionArray = questions.questions
    const [progress, setProgress] = useState<number>(0)
    const [step, setStep] = useState<number>(0)
    const [result, setResult] = useState<IResult>(inititalState)
    const currentQuestion = quiestionArray[step]

    const onClickAnswer = (index: number, answer: IResult) => {
        setResult({
            ...result,
            sanguine: answer.sanguine + result.sanguine,
            choleric: answer.choleric + result.choleric,
            phlegmatic: answer.phlegmatic + result.phlegmatic,
            melancholic: answer.melancholic + result.melancholic
        })

        if (step !== quiestionArray.length - 1) {
            setStep(step + 1)
        }
    }

    const showResult = () =>{
        let divElem = document.getElementById('question')
        console.log(divElem)
        
    }

    

    

    return <div className="question-container">
        <div className="top-person">
            <span className='book'>&#128214;</span>
            <div className='person-info'>
                <span>Name: {props.person.name}</span>
                <span>Age: {props.person.age}</span>
            </div>

        </div>
        <div id='question' className='question-list'>
            <progress value={progress} max={100} >ss</progress>
            <h1>{currentQuestion.title}</h1>
            <ul onClick={() => setProgress(progress + (100 / quiestionArray.length))}>
                {currentQuestion.answers.map((answer, index) =>
                    <li key={answer.answer} onClick={() => onClickAnswer(index, answer)}>{answer.answer}</li>
                )}
            </ul>
            {progress >= 100 && <span onClick={showResult} className='arrow arrow-animation'>&#8594;</span>}
        </div>


    </div>
}

export default Quiz