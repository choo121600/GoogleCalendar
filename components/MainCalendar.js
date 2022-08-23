import React from 'react'
import { useSelector } from 'react-redux'
import { Container, DateContainer, MainMonthCalendar, WeekBar } from '../styles/MainCalendarStyles' 
import { calcMonth } from '../utils/calcMonth'

function MainCalendar() {
  const {year, month} = useSelector(state => state.monthCalendar)
  const {prevMonth, currMonth, nextMonth} = calcMonth()

  console.log(prevMonth, currMonth, nextMonth)
  const renderPrevMonth = prevMonth.map(date => (
    <DateContainer key={date}>
      {date}
    </DateContainer>
  ))

  const renderCurrMonth = currMonth.map(date => (
    <DateContainer key={date}>
      {date === 1 ? `${month}월 1일` : date}
    </DateContainer>
  ))

  const renderNextMonth = nextMonth.map(date => (
    <DateContainer key={date}>
      {date === 1 ? `${month+1}월 1일` : date}
    </DateContainer>
  ))

  const renderMonthCalendar = () => {
      {renderPrevMonth}
      {renderCurrMonth}
      {renderNextMonth}
  }

  return (
    <Container>
      <WeekBar>
        <h5>일</h5>
        <h5>월</h5>
        <h5>화</h5>
        <h5>수</h5>
        <h5>목</h5>
        <h5>금</h5>
        <h5>토</h5>
      </WeekBar>
      <MainMonthCalendar>
        {renderPrevMonth}
        {renderCurrMonth}
        {renderNextMonth}
      </MainMonthCalendar>
    </Container>
  )
}

export default MainCalendar