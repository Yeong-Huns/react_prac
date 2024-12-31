import {useEffect, useState} from "react";

export const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Interval 청소완료');
        }
    }, []);

    return (
        <h2 className={'text-2xl'}>Timer: {count} seconds</h2>
    )
}