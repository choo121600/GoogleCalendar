import AddScheduleBtn from '../components/AddScheduleBtn'
import AddScheduleModal from '../components/AddScheduleModal'
import MainHeader from '../components/MainHeader'
import MainCalendar from '../components/MainCalendar'
import SideCalendar from '../components/SideCalendar'
import SideCalendarHeader from '../components/SideCalendarHeader'

import {SideBar, Section, Container} from '../styles/MainStyles'

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Container>
        <SideBar>
          <AddScheduleBtn />
          <SideCalendarHeader />
          <SideCalendar />
        </SideBar>
        <Section>
          <MainCalendar />
          <AddScheduleModal />
        </Section>
      </Container>
    </div>
  )
}
