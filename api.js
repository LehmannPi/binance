const axios = require('axios')
const querystring = require('querystring')


async function publicCall(path, data, method = 'GET') {
	try {
		// let search = new 	URLSearchParams(data)
		// ? query string no navegador é formato (...)?param1=val1&param2=val2&(...)
		const qs = data ? `?${querystring.stringify(data)}` : ''
		const result = await axios({
			method,
			url: `${process.env.API_URL}${path}${qs}`
		})
		return result.data

	} catch (error) {
		console.log(error)
	}
}

async function time() {
	return publicCall('/v3/time');
}

async function depth(symbol = 'BTCBRL', limit = 5){
	return publicCall('/v3/depth', {symbol, limit})
}

// * Exporta somente essa função para fora do arquivo
module.exports = { time, depth }