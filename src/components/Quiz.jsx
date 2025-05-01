import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImage from '../assets/quiz-complete.png'

export default function Quizz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers=> {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return <div id='summary'>
        <img src={quizCompleteImage} alt='Trophy icon' />
            <h2>Quiz Completed</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(()=> Math.random() - 0.5) // will not return new array, buy edit the array

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000} 
                    onTimeout={()=> handleSelectAnswer(null)} 
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

/*
when i put the key={activeQuestionIndex} in <QuestionTimer> it resets the timer i put, resets the component
*/