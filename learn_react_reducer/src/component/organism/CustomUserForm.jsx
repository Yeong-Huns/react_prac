import {customInit, customReducer} from "../../reducers/customReducer.js";
import {useReducer} from "react";
import {customData} from "../../data/customData.js";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {TextInput} from "../atoms/TextInput.jsx";
import {NumberInput} from "../atoms/NumberInput.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

export const CustomUserForm = () => {
    const [state, dispatch] = useReducer(customReducer, customData, customInit);

    return (
        <SectionTag>
            <TextInput value={state.name} onChange={e => dispatch({type: 'SET_NAME', payload: e.target.value})}/>
            <NumberInput value={state.age} onChange={e => dispatch({type: 'SET_AGE', payload: e.target.value})}/>
            {state.warning && <p className={'text-2xl text-red-400 font-semibold'}>{state.warning}</p>}
            <p className={'text-xl font-semibold'}>Name : {state.name}</p>
            <p className={'text-xl font-semibold'}>Year: {state.age}</p>
            <SmallButton buttonName={'RESET'} onClick={() => dispatch({type: 'RESET', payload: customData})}/>
        </SectionTag>
    )
}