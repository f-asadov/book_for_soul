import { ICharacter, IQuestion, IResult } from '../interfaces'
import '../styles/quiz-style.css'
import questions from '../constansts/question.json'
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../styles/slider.css";


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
    const [test, setTest] = useState<boolean>(false)
    const currentQuestion = quiestionArray[step]

    const Slider = (book: any) => {
        return (
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <div className='book-cell'>
                        <img id='image' className='book-image' src="https://data.whicdn.com/images/344838588/original.jpg" alt="image" />
                        <span className='book-description'>Богатый наследник и потомок пирата Генри Моргана Фрэнсис отправляется на поиски сокровищ своего предка в Южную Америку. На пути он знакомится со своим дальним родственником — Генри Морганом. Их ждут опасные приключения, неведомые земли и любовь…</span>
                        <span className='test'>Подойдет для : Сангвиник</span>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='book-cell'>
                        <img id='image' className='book-image' src="https://data.whicdn.com/images/344838588/original.jpg" alt="image" />
                        <span className='book-description'>Богатый наследник и потомок пирата Генри Моргана Фрэнсис отправляется на поиски сокровищ своего предка в Южную Америку. На пути он знакомится со своим дальним родственником — Генри Морганом. Их ждут опасные приключения, неведомые земли и любовь…</span>
                        <span className='test'>Подойдет для : Сангвиник</span>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='book-cell'>
                        <img id='image' className='book-image' src="https://data.whicdn.com/images/344838588/original.jpg" alt="image" />
                        <span className='book-description'>Богатый наследник и потомок пирата Генри Моргана Фрэнсис отправляется на поиски сокровищ своего предка в Южную Америку. На пути он знакомится со своим дальним родственником — Генри Морганом. Их ждут опасные приключения, неведомые земли и любовь…</span>
                        <span className='test'>Подойдет для : Сангвиник</span>
                    </div></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
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

    const showResult = () => {
        let divElem = document.getElementById('question')
        console.log(divElem)
        setTest(true)
    }

    return <div className="question-container">
        <div className="top-person">
            <span className='book'>&#128214;</span>
            <div className='person-info'>
                <span>Name: {props.person.name}</span>
                <span>Age: {props.person.age}</span>
            </div>

        </div>
        <div id='question' className='question-list' style={{ display: test ? 'none' : '' }}>
            <progress value={progress} max={100} >ss</progress>
            <h1>{currentQuestion.title}</h1>
            <ul onClick={() => setProgress(progress + (100 / quiestionArray.length))}>
                {currentQuestion.answers.map((answer, index) =>
                    <li key={answer.answer} onClick={() => onClickAnswer(index, answer)}>{answer.answer}</li>
                )}
            </ul>
            {progress >= 100 && <span onClick={showResult} className='arrow arrow-animation'>&#8594;</span>}
        </div>
        <Slider />
        {test && <div className='result'>
        </div>}


    </div>
}

export default Quiz