import Link from 'next/link'
import Intro from '../challenges/intro/Intro'
import { Home as HomeIcon, UserCircle, CalendarDays } from 'lucide-react'

export default function Home() {
    return (
        <div>

            <div
                className='flex flex-col'
            >
                <div className='
                    flex flex-row gap-4 m-4 justify-between 
                    xs:hidden 
                    sm:hidden
                    md:display-block
                    lg:display-block
                    xl:display-block
                '>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Calendar of Code</Link>
                    <Link href='/'>Your Account</Link>
                </div>

                <div className='
                    flex flex-row gap-4 m-4 justify-between 
                    sm:display-block
                    md:hidden
                '>
                    <Link href='/'>H</Link>
                    <Link href='/'>Calendar of Code</Link>
                    <Link href='/'>P</Link>
                </div>

                <Intro />

                <div>Another Thing</div>

            </div>

        </div>
    )
}
