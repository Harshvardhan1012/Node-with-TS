import express from "express"
import log from "./logger"
import { prisma } from "./db"
import routes from "./routes"
import config from "config"

const app = express()
const PORT = config.get<number>("port")
// const HOST = config.get<string>('host')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(Number(PORT), async () => {
  try {
    await prisma.$connect()
    log.info(`connected`)
    routes(app)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
  // process.exit(1)
})
