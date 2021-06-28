import classes from './Result.module.scss';

const Result = (props) => {

    let resultComp = null;

    if (props.isChaotic) {
        resultComp = (<h3 >It is too chaotic.</h3>);
    } else {
        resultComp = (<ul>
            {
                Object.keys(props.bribes).map((b,index) => {
                    return <li key={'r'+b+index}>
                        <p>No.Ticket <strong>{b}</strong>:</p> <span><strong>{props.bribes[b]} brides.</strong></span></li>
                })
            }
        </ul>)
    }
    return (
        <div className={classes.Result}>
            <h1>Result</h1>

            {resultComp}
        </div>
    )
}

export default Result;