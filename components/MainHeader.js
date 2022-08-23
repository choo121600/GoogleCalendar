import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, TodayBtn, Arrow } from '../styles/MainHeaderStyles.js'
import Image from 'next/image.js'

import { todayMonth, nextMonth, prevMonth } from '../store/modules/monthSlice'

import logo from '../images/calendar_21_2x.png'
import right from '../images/right.png'
import left from '../images/left.png'



function MainHeader() {
    const dispatch = useDispatch()
    const {year, month} = useSelector(state => state.monthCalendar)
    return (
        <>
            <Container>
                <Image src={logo} alt="logo" width="30" height="30" />
                <h1>캘린더</h1>
                <TodayBtn onClick={() => dispatch(todayMonth())}>오늘</TodayBtn>
                <Arrow onClick={() => dispatch(prevMonth())}>
                    <Image src={left} alt='left' width='30' height='30' />
                </Arrow>
                <Arrow onClick={()=> dispatch(nextMonth())}>
                    <Image src={right} alt='right' width='30' height='30' />
                </Arrow>
                <h1>{year} 년 {month}월</h1>
                <TodayBtn>월</TodayBtn>
            </Container>
        </>
    )
}

export default MainHeader