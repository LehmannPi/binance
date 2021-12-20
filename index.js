
// * Módulos instalados no Node não precisam do caminho do arquivo
const api = require('./api')

setInterval(async () => {
	const result = await api.depth();
	console.log(`Highest Buy: ${result.bids[0][0]}`);
	console.log(`Highest Sell: ${result.asks[0][0]}`);

	const sell = parseInt(result.asks[0][0]);
	if (sell < 200000) {
		console.log("Hora de X");
	}
	else {
		console.log("Não sei")
	}

}, process.env.CRAWLER_INTERVAL);