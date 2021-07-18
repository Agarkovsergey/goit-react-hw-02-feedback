import React from 'react';

import styles from './feedback.module.scss';

const Notification = ({ message }) => (
    <p className={styles.notificationMsg}>
        {message}
    </p>
)


export default Notification;