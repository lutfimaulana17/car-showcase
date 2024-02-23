export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '907d92c6a7msh514c455201c90b8p1ae92djsn23501ab80259',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })
    const result = await response.json()
	return result
}