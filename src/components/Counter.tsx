import React from 'react';
import classes from './Countes.module.scss'

export const Counter = () => {
    const [count, setCount] = React.useState(0)
    const add = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={add} className={classes.button}>Add</button>
        </div>
    );
};
