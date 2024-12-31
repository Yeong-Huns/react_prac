import {useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {Timer} from "./Timer.jsx";

export const ShowTimer = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <SectionTag>
            <label>
                <input
                type="checkbox"
                checked={showTimer}
                onChange={(e) => setShowTimer(e.target.checked)}/>
                Show Timer
            </label>
            {showTimer && <Timer/>}
        </SectionTag>
    )
}