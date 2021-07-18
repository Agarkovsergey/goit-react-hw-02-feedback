import React from 'react';

import styles from './feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (        
    <div className={styles.statistics_block}>
        <p>Good: <span className={styles.rating}>{good}</span></p>
        <p>Neutral: <span className={styles.rating}>{neutral}</span></p>
        <p>Bad: <span className={styles.rating}>{bad}</span></p>
        <p>Total: <span className={styles.rating}>{total}</span></p>
        <p>Positive Feedback: <span className={styles.rating}>{positivePercentage}%</span></p>
    </div>
)

export default Statistics;