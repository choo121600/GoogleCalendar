import { useSelector } from "react-redux";

export const calcMonth = () => {
    const { year, month } = useSelector(state => state.monthCalendar)
    const currStart = (new Date(year, month-1, 1)).getDay()
    const prevEnd = (new Date(year, month-1, 0)).getDate()
    const prevMonth = []
    for (let i = currStart - 1; i >=0; i--){
        prevMonth.push(prevEnd - i)
    }

    const totalDates = (new Date(year, month, 0).getDate())
    const currMonth = []
    for (let i = 1; i  <= totalDates; i++){
        currMonth.push(i)
    }

    const currEnd = (new Date(year, month, 0).getDay())
    console.log(`currEnd: ${currEnd}`)
    const nextMonth = []
    for (let i = 1;i <= (6 - currEnd); i++) {
        nextMonth.push(i)
    }

    return {
        prevMonth,
        currMonth,
        nextMonth
    }
}