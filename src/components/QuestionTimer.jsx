import {useState, useEffect} from 'react';

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=> {
        console.log('SETTING TIMEOUT')
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer); // clear time
        }
    }, [timeout, onTimeout])
    // because we aer using two props onTimeout and timeout, we need to populate dependecies
    // setTimeout(()=> {
    //     onTimeout();
    // }, timeout)

    useEffect(()=> {
        console.log('SETTING INTERVAL')
        const interval = setInterval(()=> {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
    }, 100);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return <progress id='question-time' max={timeout} value={remainingTime}/>
}