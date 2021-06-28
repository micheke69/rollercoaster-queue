import classes from './Queue.module.scss';

const Queue = (props) => {

    const queueComp =  props.queue.map((q, index) => {
        return <div className={classes.Person}  style={{order: index, backgroundColor: props.sorted ? 'lightgreen' : 'white'}} key={'q'+index+q}>{q}</div>;
    });

    return (
        <div className={classes.Queue} >{queueComp}</div> 
    )
}

export default Queue;