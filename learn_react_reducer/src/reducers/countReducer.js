/**
 * fileName       : countReducer
 * author         : Yeong-Huns
 * date           : 2024-12-29
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-12-29        Yeong-Huns       최초 생성
 */

export const initialState = {
	count: 0,
}

export const countReducer = (state, action) => {
	const value = action.payload;

	const { x,y } = action.meta;
	switch (action.type) {
		case 'INCREMENT':
			console.log(`Click: (${x}, ${y})`)
			return {
				...state,
				count: state.count + value,
			}
		case 'DECREMENT':
			console.log(`Click: (${x}, ${y})`)
			return {
				...state,
				count: state.count - value,
			}
	}
	throw new Error(`[countReducer] unknown action type`);
}