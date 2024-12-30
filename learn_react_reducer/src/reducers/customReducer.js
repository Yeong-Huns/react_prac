

const defaultState = {
    name: '',
    age: '',
    warning: '',
}

export const customInit = (data) => {
    return {
        ...defaultState,
        ...data,
    }
}

export const customReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_NAME':
            return {
                ...state,
                name: payload.toLowerCase(),
            }
        case 'SET_AGE':
            const age = new Date().getFullYear() - payload;
            if(age < 18) {
                return {
                    ...state,
                    warning: 'Must be at least 18 years old!'
                }
            } else {
                return {
                    ...state,
                    age: payload,
                    warning: ''
                }
            }
        case 'RESET':
            return customInit(action.payload);
    }
    throw new Error('[customReducer] unknown action type');
}