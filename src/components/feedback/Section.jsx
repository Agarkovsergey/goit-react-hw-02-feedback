import React from 'react';

import styles from './feedback.module.scss';

const Section = ({ title, children }) => (
    <>
        <h3 className={styles.title}>
            {title}
        </h3>
        {children}
    </>
)


export default Section;