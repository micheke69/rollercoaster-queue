import classes from './QueueContainer.module.scss';
import InputQueue from '../components/InputQueue/InputQueue';
import Queue from '../components/Queue/Queue';
import { useState } from 'react';
import { convertStringToArray, convertInputToString } from '../utils/helper';
import Result from '../components/Result/Result';

const QueueContainer = (props) => {

    const [stringQueue, setStringQueue] = useState('');
    const [arrayQueue, setArrayQueue] = useState([]);
    const [sortedArray, setSortedArray] = useState([]);
    const [bribesObj, setBribesObj] = useState(null);
    const [tooChaotic, setTooChaotic] = useState(false);
    const [cantBribes, setCantBribes] = useState(0);

    const queueChangeHandler = (event) => {

        setTooChaotic(false);
        setBribesObj(null);
        setSortedArray([])

        let str = convertInputToString(event.target.value);
        setStringQueue(str);

        let arr = convertStringToArray(str);
        setArrayQueue(arr);
    }

    const onSortHandler = () => {
        bribesHandler([...arrayQueue]);
    }

    const bribesHandler = (q) =>{
        let bribes= {};
        let cant = 0;

        for(let i = 0; i<q.length; i++){
            for(let j =0; j<q.length-1-i; j++){
                if(q[j] > q[j+1]){
                    bribes[q[j]] = bribes[q[j]] != null ? bribes[q[j]]+1 : 1;
                    if(bribes[q[j]]>2){ setTooChaotic(true);return}
                    cant ++; // increase cant bribes

                    let temp = q[j+1];
                    q[j+1] = q[j];
                    q[j] = temp;
                }
            }
        }
        setSortedArray(q);
        setCantBribes(cant);
        setBribesObj(bribes);
    }

    return (
        <div className={classes.QueueContainer} >
            <InputQueue queue={stringQueue} queueInputChange={queueChangeHandler} onSort={onSortHandler} />
            {arrayQueue.length > 0 && <Queue queue={arrayQueue} sorted={false}/>}

            {(bribesObj !== null || tooChaotic) && <Result isChaotic={tooChaotic} cant={cantBribes} bribes={bribesObj}/>}

            {sortedArray.length > 0 && <Queue queue={sortedArray} sorted={true}/>}
        </div >
    )
}

export default QueueContainer;