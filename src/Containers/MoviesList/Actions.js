export const dataLoaded = data => {
	return {
		type: 'DATA_FETCHED',
		data
	}
}

export const dataFailed = err => {
	return {
		type: 'DATA_ERROR',
		err
	}
}