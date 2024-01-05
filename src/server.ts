import { app } from "./app"
import { data } from "./data/db-postgres"

const main = async () => {
	await data.conn()

	app.listen(2007, () => {
		console.log('Server Rodando. http://localhost:2007/')
	})
}

main()