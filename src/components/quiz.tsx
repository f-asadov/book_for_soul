import { IBook, ICharacter, IQuestion, IResult } from '../interfaces'
import '../styles/quiz-style.css'
import questions from '../constansts/question.json'
import books from '../constansts/books.json'
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../styles/slider.css";
import poxor from "../images/poxor.jpg"


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
    const bookAray = books.allBooks
    const [progress, setProgress] = useState<number>(0)
    const [step, setStep] = useState<number>(0)
    const [result, setResult] = useState<IResult>(inititalState)
    const [one,setOne] = useState<IBook[]>([])
    const [two,setTwo] = useState<IBook[]>([])
    const [finish, setFinish] = useState<boolean>(false)
    const currentQuestion = quiestionArray[step]
    const finalBooks = one.concat(two)

    const Slider = (book: any) => {
        return (
            <>
                {finish && <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {finalBooks.map((book) => {
                        return <SwiperSlide>
                            <div className='book-cell'>
                                <img id='image' className='book-image' src={poxor} alt="image" />
                                <span className='book-description'>{book.description}</span>
                                <span className='test'>{book.bookName}</span>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>}

            </>
        );
    }

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


    const Pers = () => {
        bookAray.map((book) => {
            let resultdata = 0;
            if (Math.abs(book.choleric - result.choleric) <= 20) {
                resultdata++;
            }
            if (Math.abs(book.melancholic - result.melancholic) <= 20) {
                resultdata++;
            }
            if (Math.abs(book.phlegmatic - result.phlegmatic) <= 20) {
                resultdata++
            }
            if (resultdata === 3) {
                console.log(book)
                setOne((prev) => [...prev, book])
            } else if (resultdata === 2) {
                if (Math.abs(book.sanguine - result.sanguine) <= 20) {
                    console.log(book)
                    setTwo((prev)=>[...prev,book])
                }
            }
        })
    }

    console.log(one,two)


    return <div className="question-container">
        <div className="top-person">
            <span className='book'>&#128214;</span>
            <div className='person-info'>
                <span>Name: {props.person.name}</span>
                <span>Age: {props.person.age}</span>
            </div>

        </div>
        <div id='question' className='question-list' style={{ display: finish ? 'none' : '' }}>
            <progress value={progress} max={100} >ss</progress>
            <h1>{currentQuestion.title}</h1>
            <ul onClick={() => setProgress(progress + (100 / quiestionArray.length))}>
                {currentQuestion.answers.map((answer, index) =>
                    <li key={answer.answer} onClick={() => onClickAnswer(index, answer)}>{answer.answer}</li>
                )}
            </ul>
            {progress >= 100 && <span onClick={() => {
                setFinish(true);
                Pers()
                console.log(result)
            }}
                className='arrow arrow-animation'>&#8594;</span>}
        </div>
        <Slider />


    </div>
}

export default Quiz