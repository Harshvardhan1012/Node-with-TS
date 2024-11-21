import dayjs from "dayjs"
import logger from "pino"

const log = logger({
  base: {
    pid: false,
  },
})

export default log
