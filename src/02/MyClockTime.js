import React, { useState, useEffect } from 'react';
import styles from './MyClockTime.module.css';

function MyClockTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // 1초마다 현재 시간을 갱신
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // 컴포넌트 언마운트 시 인터벌 제거
        return () => clearInterval(interval);
    } , []);

    return (
        <div className={styles.c3}>
            현재 시각 : {time.toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime;