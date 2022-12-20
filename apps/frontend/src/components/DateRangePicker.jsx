import React from 'react'
import { Flex, Box } from 'theme-ui'
import DayPicker, { DateUtils } from 'react-day-picker'
import { Button } from 'components'
import PopOver2 from './PopOver2'
import './DateRangePicker.css'

const weekdays = 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_')
const months = 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_')

function lastXDays(days) {
  const date = new Date()
  date.setDate(date.getDate() - days)
  date.setHours(0, 0, 0, 0)
  return date
}

function today() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

function tomorrow() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  return tomorrow
}

function lastWeek() {
  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)
  lastWeek.setHours(0, 0, 0, 0)
  return lastWeek
}

const weekdaysShort = weekdays.map((item) => item.slice(0, 2))

function formatDate(date, locale = (window.navigator.userLanguage || window.navigator.language)) {
  if (!date) {
    return ''
  }
  return date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' })
}

function DateRangePicker({ from, to, onChange, locale }) {

  const handleDayClick = (day) => {
    if (day.getTime() < tomorrow().getTime()) {
      const range = DateUtils.addDayToRange(day, { from, to })
      onChange(range)
    }
  }

  const handleRangeToday = () => {
    const todayDate = today()
    onChange({ name: 'today', from: todayDate, to: todayDate })
  }

  const handleRangeLastWeek = () => {
    onChange({ name: 'last-week', from: lastWeek(), to: today() })
  }

  const handleRangeLast3Days = () => {
    onChange({ name: 'last-3-days', from: lastXDays(3), to: today() })
  }

  return (
    <PopOver2 width={610} placement='bottom-start' render={({ onRequestClose }) => (
      <Box>
        <DayPicker
          month={from}
          disabledDays={{ after: today() }}
          className='Selectable'
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          modifiers={{ start: from, end: to }}
          onDayClick={handleDayClick}
          months={months}
          weekdaysLong={weekdays}
          weekdaysShort={weekdaysShort}
          firstDayOfWeek={0}
        />
        <Flex>
          <Box sx={{ m: 2 }}><Button onClick={onRequestClose}>Fechar</Button></Box>
          <Box sx={{ m: 2 }}><Button onClick={() => { handleRangeToday(); onRequestClose() }}>Hoje</Button></Box>
          <Box sx={{ m: 2 }}><Button onClick={() => { handleRangeLast3Days(); onRequestClose() }}>Últimos 3 dias</Button></Box>
          <Box sx={{ m: 2 }}><Button onClick={() => { handleRangeLastWeek(); onRequestClose() }}>Última semana</Button></Box>
        </Flex>
      </Box>
    )}>
      {`${formatDate(from, locale)} - ${formatDate(to, locale)}`}
    </PopOver2>
  )

}

export default DateRangePicker
