import classes from './InputQueue.module.scss';

const InputQueue = (props) => {
    return (
        <form className={classes.Form}>
            <h1>Queue Rollecoaster</h1>
            <div className={classes.FormControl}>
                <input type="text" required value={props.queue} onChange={props.queueInputChange}/>
                <label htmlFor="queue">Queue</label>
            </div>
            <button type="button" className={classes.btn} onClick={props.onSort}>Sort</button>
        </form>
    )
}

export default InputQueue;