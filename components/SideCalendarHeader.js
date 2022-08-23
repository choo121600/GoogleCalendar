import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image.js'
import right from '../images/right.png'
import left from '../images/left.png'
import { Container, Arrow, ArrowContainer } from '../styles/SideCalendarHeaderStyles'

import { nextMonth, prevMonth } from '../store/modules/monthSlice'

function SideCalendarHeader() {
  const dispatch = useDispatch()
  const {year, month} = useSelector(state => state.monthCalendar)
  return (
    <Container>
      <h5>{year}년 {month}월</h5>
      <ArrowContainer>
        <Arrow onClick={() => dispatch(prevMonth())}>
          <Image src={left} alt='left' width='20' height='20' />
        </Arrow>
        <Arrow onClick={()=> dispatch(nextMonth())}>
          <Image src={right} alt='right' width='20' height='20' />
        </Arrow>
      </ArrowContainer>
    </Container>
  )
}

export default SideCalendarHeader