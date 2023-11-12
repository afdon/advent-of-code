import Image from 'next/image'
import CodeCalendar from '../components/codecalendar/CodeCalendar'

export default function Home() {
  return (
    <div>
      {/* Calendar of Code */}

      <div style={{ margin: '0 auto' }}>

      <CodeCalendar /> 

      </div>

    </div>
  )
}
