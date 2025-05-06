import {useState} from 'react';

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from '../questions.js';

export default function Question({index, onSelectAnswer, onSkipAnswer}){
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(()=> {
           setAnswer({
            selectedAnswer: answer,
            isCorrect: QUESTIONS[index].answers[0] === answer
           })

           setTimeout(()=> {
            onSelectAnswer(answer)
           }, 2000)
        }, 1000);
    }

    let answerState = '';

    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if(answer.selectedAnswer){
        answerState = 'answered'
    }

    return (
    <div id='question'>
        <QuestionTimer 
            key={timer}
            timeout={timer} 
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
            mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers 
            answers={QUESTIONS[index].answers} 
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>)
}


/*
Question component manages the state and logic for a single question, integrating the timer and handling 
answer selection and feedback. The dynamic timer and the answerState variable are key to controlling the user 
experience and visual presentation during the question answering process.
*/