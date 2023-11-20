import Link from 'next/link'
import Intro from '../challenges/intro/page'
import { Home as HomeIcon, UserCircle, CalendarDays } from 'lucide-react'

export default function Home() {
    return (
        <div>
            <div
                className='flex flex-col
                md:flex-row
                '
            >

                <div className='
                    flex flex-row m-8 justify-between 
                    md:flex-col
                '>
                    <Link href='/'>
                        <div className='flex flex-row'>
                        <HomeIcon />
                        <p className='ml-2'>Home</p>
                        </div>
                    </Link>
                    <Link href='/'>
                    <div className='flex flex-row'>
                        <CalendarDays />
                        <p className='ml-2'>Calendar</p>
                        </div>
                    </Link>
                    <Link href='/'>
                    <div className='flex flex-row'>
                        <UserCircle />
                        <p className='ml-2'>Account</p>
                        </div>
                    </Link>
                </div>

                <div className='
                    flex flex-row
                '
                >

                    <div className='flex flex-row'>

                        <div className='m-auto'>
                            <Intro />
                        </div>

                        {/* <div className='
                    flex flex-col 
                    m-8 
                    p-2
                    justify-between 
                    xs:hidden
                    sm:hidden
                    md:display-flex
                    lg:display-flex
                    xl:display-flex
                    2xl:display-flex
                '>
                            <Link href='/'>
                                <HomeIcon />
                            </Link>
                            <Link href='/'>
                                Cal
                            </Link>
                            <Link href='/'>
                                <UserCircle />
                            </Link>
                        </div> */}

                    </div>

                </div>

            </div>

        </div>
    )
}
