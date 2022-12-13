import { ICharacter, IQuestion } from '../interfaces'
import '../styles/quiz-style.css'
import questions from '../constansts/question.json'

type QuizPropsType = {
    person: ICharacter;
}

const Quiz = (props: QuizPropsType) => {
    const quiestionArray = questions.questions

    return <div className="question-container">
        <div className="top-person">
            <span className='book'>&#128214;</span>
            <div className='person-info'>
                <span>Name: {props.person.name}</span>
                <span>Age: {props.person.age}</span>
            </div>

        </div>
        <div className='question-list'>
            {quiestionArray.map((question: IQuestion) => {
                return <div className='question'> {question.title}
                    {question.answers.map((answer) => {
                        return<span className='answer'>{answer.answer}</span>
                    })}
                </div>
            })}
        </div>

    </div>
}

export default Quiz