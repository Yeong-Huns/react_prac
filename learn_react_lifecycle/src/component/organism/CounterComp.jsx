import {useEffect, useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const CounterComp = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleIncrement = (setter) => {
        setter(prev => prev + 1);
    }

    useEffect(() => {
        console.log('CounterComp 마운트 완료.')
        return () => console.log('CounterComp 언마운트')
    }, []);

    useEffect(() => {
        console.log(`C1 : ${count1} C2: ${count2}`);
    }, [count1]);

    return (
        <SectionTag>
            <div className={'p-4 flex items-center justify-center gap-x-4'}>
                <h2 className={'text-2xl font-bold'}>Count1: {count1}</h2>
                <SmallButton buttonName={'Count1++'} onClick={() => handleIncrement(setCount1)}/>
            </div>
            <div className={'p-4 flex items-center justify-center gap-x-4'}>
                <h2 className={'text-2xl font-bold'}>Count2: {count2}</h2>
                <SmallButton buttonName={'Count2++'} onClick={() => handleIncrement(setCount2)}/>
            </div>

        </SectionTag>
    )
}