const initialState = {
	isLoading: false,
	isError: false,
	data: []
}

export default function moviesReducer(state = initialState, action) {
	switch (action.type) {
		case "DATA_LOADING": {
			return { ...state, isLoading: true }
		}

		case "DATA_FETCHED": {
			return { ...state, isLoading: false, data: action.data, isError: false }
		}

		case "DATA_ERROR":{
			return { ...state, isLoading: false, isError: true }
		}

		default:
			return state
	}
}