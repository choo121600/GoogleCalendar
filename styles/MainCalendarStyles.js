import styled from "styled-components";

export const Container = styled.div`
    overflow: auto;
    width: 100%;
`;

export const WeekBar = styled.div`
    display: flex;
    justify-content: space-around;
`

export const MainMonthCalendar = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, minmax(100px, auto));
    gap: 1px;
`

export const DateContainer = styled.div`
    text-align: center;
    border: 1px solid lightgray
`