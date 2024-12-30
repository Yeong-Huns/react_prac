import {useReducer} from "react";
import {countReducer, initialState} from "../../reducers/countReducer.js";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {CountButton} from "../atoms/CountButton.jsx";

export const Calculator = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    const handleChange = ({type, payload, event: { clientX: x, clientY: y}}) => {
        dispatch({
            type,
            payload,
            meta: {x, y}
        })
    }

    return (
        <SectionTag>
            <p>Count: {state.count}</p>
            <div className={'flex items-center justify-center gap-x-4'}>
                <CountButton value={'+1'} onClick={(e) => handleChange({ type: 'INCREMENT', payload: 1, event: e })}/>
                <CountButton value={'-1'} onClick={(e) => handleChange({ type: 'DECREMENT', payload: 1, event: e })}/>
                <CountButton value={'+2'} onClick={(e) => handleChange({ type: 'INCREMENT', payload: 2, event: e })}/>
                <CountButton value={'-1'} onClick={(e) => handleChange({ type: 'DECREMENT', payload: 2, event: e })}/>
            </div>
        </SectionTag>
    )
}