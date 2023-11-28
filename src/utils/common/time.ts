import type { QUnitType } from 'dayjs'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
dayjs.extend(LocalizedFormat)
dayjs.locale('ru')

export enum DateFormat {
  'MMM DD YYYY',
  'HH:mm',
  'LLLL',
  'H:mm:ss A',
  'YYYY-MM-DD',
  'YYYY-MM-DD dddd',
  'YYYY-MM-DD ddd',
  'MM-DD ddd',
  'MM-DD',
  'DD/MM',
  'dddd',
  'YYYY',
}

export function isTwoDateDifference(atDate: string | Date, toDate: string | Date, unit: QUnitType) {
  const at = dayjs(atDate)
  const to = dayjs(toDate)

  return to.diff(at, unit)
}

export function parseDate(time: string | Date, format: keyof typeof DateFormat) {
  return dayjs(time).format(format)
}
