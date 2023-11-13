"use client"


import { useState } from 'react'
import CodeCalendar from '../../components/codecalendar/CodeCalendar'

import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='m-4'>

            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-[300px] space-y-2"
            >

                <div className="flex items-center justify-between space-x-4 px-4">
                    <CollapsibleTrigger asChild>
                        <div className='flex flex-row'>
                            <h4 className="text-2xl font-semibold">
                                Coding Challenges
                            </h4>
                            <Button variant="ghost" size="sm" className="w-9 p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </div>
                    </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 text-lg">
                    Intro
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Backpack
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Map
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Shelter
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Campfire
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Water
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Berries
                    </div>
                </CollapsibleContent>

            </Collapsible>




        </div>
    )
}
