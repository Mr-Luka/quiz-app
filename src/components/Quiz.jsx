import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImage from '../assets/quiz-complete.png';

const TIMER = 10000

export default function Quizz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers=> {
            return [...prevUserAnswers, selectedAnswer]
        })
    }, []);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <div id='summary'>
        <img src={quizCompleteImage} alt='Trophy icon' />
            <h2>Quiz Completed</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=> Math.random() - 0.5);


    return (
       <div id='quiz'>
         <div id='question'>
         <QuestionTimer 
            timeout={TIMER} 
            onTimeout={handleSkipAnswer}
            key={activeQuestionIndex}
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'> 
                {shuffledAnswers.map(answer=>  (
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
Key prop also has another purpose, whenever it changes on a component even if that component is not part of a list, whenever it changes React
will destroy the old component instance and create a new one, so it will unmount and remount it basically.
And that is what we need here, i want to recreate this question timer component whenever we switch to a new question.
*/