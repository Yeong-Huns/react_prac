import {useEffect, useState} from "react";
import {SmallButton} from "../atoms/SmallButton.jsx";
import {SectionTag} from "../atoms/SectionTag.jsx";

export const FuncComp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('1. Mounted');
        return () => console.log('3. UnMounted');
    }, []);

    useEffect(() => {
        console.log('1. Mounted / 2. Updated');
    }, [count])

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    }

    console.log('***RENDERING***')
    return (
        <SectionTag>
            <h2 className={'text-2xl font-bold'}>Function Component</h2>
            <p className={'text-xl font-semibold'}>Count: {count}</p>
            <SmallButton buttonName={'Increment'} onClick={handleIncrement}/>
        </SectionTag>
    );
}