import {init, userReducer} from "../../reducers/userReducer.js";
import {externalData} from "../../data/data.js";
import {TextInput} from "../atoms/TextInput.jsx";
import {NumberInput} from "../atoms/NumberInput.jsx";

import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";
import {useReducer} from "react";

export const UserForm = () => {
    const [state, dispatch] = useReducer(userReducer, externalData, init);

    return(
        <SectionTag>
            <TextInput value={state.name} onChange={e => dispatch({type: 'SET_NAME', payload: e.target.value})}/>
            <NumberInput value={state.age} onChange={e => dispatch({type: 'SET_AGE', payload: e.target.value})}/>
            {state.warning && <p className={'text-2xl text-red-400 font-semibold'}>{state.warning}</p>}
            <p className={'text-xl font-semibold'}>Name : {state.name}</p>
            <p className={'text-xl font-semibold'}>Year: {state.age}</p>
            <SmallButton buttonName={'RESET'} onClick={() => dispatch({type: 'RESET' , payload: externalData})}/>
        </SectionTag>
    )

}