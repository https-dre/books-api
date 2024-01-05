import { app } from "./app"
import { db_con } from "./data/db-postgres"

const main = async () => {
	await db_con()

	app.listen(2007, () => {
		console.log('Server Rodando. http://localhost:2007/')
	})
}

main()