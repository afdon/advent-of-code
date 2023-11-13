"use client"

import { useState } from 'react'

import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function zero() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='m-4 text-2xl'>

            <>
                It is nighttime. You are lost in a forest. You can barely see your surroundings.

                <br />

                There are clusters of dense trees all around you, as well as several navigable paths. 

                You are wearing a backpack.

                <br />
                Night is rapidly falling. What will you decide to do?

                <ul>
                    <li>scope out the area with the remaining light</li>
                    <li>investigate the contents of your backpack</li>
                </ul>

                ...
                    
                <ul>
                    <li>make a fire</li>
                    <li>hunt for food</li>
                    <li>build a shelter</li>
                </ul>

            </>

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
                    Explore the area
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Chop firewood
                    </div>
                    <div className="rounded-md border px-4 py-3 text-lg">
                        Follow the path
                    </div>
                </CollapsibleContent>

            </Collapsible>




        </div>
    )
}
