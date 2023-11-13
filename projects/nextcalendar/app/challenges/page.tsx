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
                className="w-[280px] space-y-2"
            >
                <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-xl font-semibold">
                        Coding Challenges
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 text-lg">
                    Challenge 0
                    <>
                    <br/>
                    It is nighttime. You are lost in a forest. There are clusters of dense trees all around you. You decide to...

                    <ul>
                        <li>explore the area</li>
                    </ul>

                    - You decide to explore the area.
                        Task: build a 2D map of the area.
                    - You decide to build a campfire.
                        Task: chop firewood from surrounding trees.
                    - You decide to follow the first path.
                        Task: follow the path and track where you've been.

                    </>
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Challenge 1
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Challenge 2
                    </div>
                </CollapsibleContent>

            </Collapsible>




        </div>
    )
}
