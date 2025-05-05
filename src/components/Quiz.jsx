import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImage from '../assets/quiz-complete.png'

export default function Quizz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers=> {
            console.log("New array:", [...prevUserAnswers, selectedAnswer])
            return [...prevUserAnswers, selectedAnswer]
        })
    }


    return (
       <div id='quiz'>
         <div id='question'>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {QUESTIONS[activeQuestionIndex].answers.map(answer=>  (
                    <li key={answer} className='answer'>
                        <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
       </div>
    )
}

/*
when i put the key={activeQuestionIndex} in <QuestionTimer> it resets the timer i put, resets the component
*/