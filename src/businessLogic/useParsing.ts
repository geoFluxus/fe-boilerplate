import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const FORMAT = 'DD/MM/YYYY - HH:mm'
const CHAR_LEN = 75

type HookType = () => {
  parseFromUtc: (utcString: string) => string
  truncate: (string: string) => string
}

const useParsing: HookType = () => {
  const parseFromUtc = (utcString: string) => {
    return dayjs.utc(utcString).format(FORMAT)
  }

  const truncate = (string: string) =>
    string?.length > CHAR_LEN ? `${string.slice(0, CHAR_LEN)}...` : string
  return {
    parseFromUtc,
    truncate
  }
}

export default useParsing
