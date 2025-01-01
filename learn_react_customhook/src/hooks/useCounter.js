/**
 * fileName       : useCounter
 * author         : Yeong-Huns
 * date           : 2025-01-02
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2025-01-02        Yeong-Huns       최초 생성
 */
import {useState} from "react";

function useCounter(initialValue = 0){
	const [count, setCount] = useState(initialValue);

	const increment = () => {
		setCount(value => value + 1);
	}

	const decrement = () => {
		setCount(value => value - 1);
	}

	return {count, increment, decrement}
}

export default useCounter;