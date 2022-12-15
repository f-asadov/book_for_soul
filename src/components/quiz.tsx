import { ICharacter, IQuestion } from '../interfaces'
import '../styles/quiz-style.css'
import questions from '../constansts/question.json'
import { useState } from 'react';

type QuizPropsType = {
    person: ICharacter;
}

const Quiz = (props: QuizPropsType) => {
    const quiestionArray = questions.questions
    const [progress, setProgress] = useState<number>(0)
    const [step, setStep] = useState<number>(0)
    const [result,setResult] = useState<IQuestion[]>([])
    const currentQuestion = quiestionArray[step]

    const onClickAnswer = (index: number) => {
        setStep(step + 1)
    }

    return <div className="question-container">
        <div className="top-person">
            <span className='book'>&#128214;</span>
            <div className='person-info'>
                <span>Name: {props.person.name}</span>
                <span>Age: {props.person.age}</span>
            </div>

        </div>
        <div className='question-list'>
            <progress value={progress} max={100} >ss</progress>
            <h1>{currentQuestion.title}</h1>
            <ul onClick={() => setProgress(progress + 20)}>
                {currentQuestion.answers.map((answer, index) => <li  key={answer.answer} onClick={() => onClickAnswer(index)}>{answer.answer}</li>)}
            </ul>
        </div>

    </div>
}

export default Quiz