import {useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {LabelWithRadio} from "../molecules/LabelWithRadio.jsx";
import ClassComp from "../molecules/ClassComp.jsx";
import {FuncComp} from "../molecules/FuncComp.jsx";

export const SelectComp = () => {
    const [state, setState] = useState('');

    return (
        <SectionTag>
            <div className={'flex gap-x-4 justify-center items-center' }>
                {
                    ['', 'ClassComp', 'FuncComp'].map((option) => (
                        <LabelWithRadio option={option} checked={state === option} onChange={(e) => setState(e.target.value)}/>
                    ))
                }
            </div>
            {state && (state === 'ClassComp' ? <ClassComp/> : <FuncComp/>)}
        </SectionTag>
    )
}