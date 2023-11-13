"use client"

// import { useState } from 'react'

import Link from 'next/navigation'

import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Intro() {

    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-col gap-2 m-12 text-xl w-[50vmin]'>

            <>

                <p>
                    You are lost in a forest at dusk.
                </p>

                <p>
                    You can barely see around you, and your backpack is weighing on your shoulders.
                </p>

                <p>
                    Dense clusters of trees loom around you, but you see several navigable paths.
                </p>

                <p>
                    Nightfall is descending rapidly.
                </p>

                <p>
                    How will you use the remaining daylight?
                </p>

                <p>
                    - Look through your backpack
                </p>

                <p>
                    - Check out your surroundings
                </p>

            </>

        </div>
    )
}
