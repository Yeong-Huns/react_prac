/**
 * fileName       : userReducer
 * author         : Yeong-Huns
 * date           : 2024-12-28
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-12-28        Yeong-Huns       최초 생성
 */

export const initialState = {
	name: '',
	age: '',
	warning: ''
}

export const userReducer = (state, action) => {
	switch(action.type) {
		case 'SET_NAME':
			return {
				...state,
				name: action.payload.trim().toLowerCase()}
		case 'SET_AGE':
			const age = new Date().getFullYear() - action.payload;
			if (age < 18) {
				return {
					...state,
					warning: 'Must be at least 18 years old!'
				}
			}
			return {
				...state,
				age: action.payload,
				warning: ''
			}
		case 'RESET':
			return init(action.payload)
	}
	throw new Error('[userReducer] unknown action type');
}

export const init = (data) => (
	{
		...initialState,
		name: data.name,
		age: data.age,
	}
)