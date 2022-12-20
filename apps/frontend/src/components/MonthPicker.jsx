import React from 'react'
import { Flex, Box } from 'theme-ui'
import DayPicker, { DateUtils } from 'react-day-picker'
import PopOver2 from './PopOver2'
import { Button } from 'components'
import { DateTime } from 'luxon'

import './DateRangePicker.css'


function today() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

// const weekdays = 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_')
const months = 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_')

function formatDate(date, locale = (window.navigator.userLanguage || window.navigator.language)) {
  if (!date) {
    return ''
  }
  return date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' })
}

function MonthPicker({ from, onChange, locale }) {
  const begginingOfMonth = DateTime.fromJSDate(from).startOf('month').toJSDate()
  const endOfMonth = DateTime.fromJSDate(from).endOf('month').toJSDate()


  return (
    <PopOver2 width={'fit-content'} placement='bottom-start' render={({ onRequestClose }) => (
      <Box>
        <DayPicker
          month={from}
          className='Selectable'
          onMonthChange={onChange}
          months={months}
          firstDayOfWeek={0}
        />
        <Flex>
          <Box sx={{ m: 2 }}><Button onClick={onRequestClose}>Fechar</Button></Box>
        </Flex>
      </Box>
    )}>
      {`${formatDate(begginingOfMonth, locale)} - ${formatDate(endOfMonth, locale)}`}
    </PopOver2>
  )

}

export default MonthPicker
