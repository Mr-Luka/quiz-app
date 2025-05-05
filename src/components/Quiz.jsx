import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

import quizCompleteImage from '../assets/quiz-complete.png';


const TIMER = 10000;

export default function Quizz(){

    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);


    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered')
        setUserAnswers(prevUserAnswers=> {
            return [...prevUserAnswers, selectedAnswer]
        });

        setTimeout(()=> {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(()=> {
                setAnswerState('')
            }, 2000)
        }, 1000)
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <div id='summary'>
        <img src={quizCompleteImage} alt='Trophy icon' />
            <h2>Quiz Completed</h2>
        </div>
    }

    
    return (
       <div id='quiz'>
         <Question
            key={activeQuestionIndex}
            questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            answerState={answerState}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
       </div>
    )
}

/*
when i put the key={activeQuestionIndex} in <QuestionTimer> it resets the timer i put, resets the component
Key prop also has another purpose, whenever it changes on a component even if that component is not part of a list, whenever it changes React
will destroy the old component instance and create a new one, so it will unmount and remount it basically.
And that is what we need here, i want to recreate this question timer component whenever we switch to a new question.
i did that same for the Answers component
*/