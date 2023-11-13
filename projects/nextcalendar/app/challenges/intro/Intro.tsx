"use client"

import Link from 'next/link'

import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Intro() {

    return (
        <div className='flex flex-col gap-2 m-12 text-xl w-[60vmin]'>

                <p>
                    You are lost in a forest at dusk.
                </p>


                <p>
                    Nightfall is descending rapidly. Dense clusters of trees loom all around.
                </p>

                <p>
                    You can barely see in front of you, and your backpack is weighing on your shoulders.
                </p>

                <Link href='/backpack'>examine backpack</Link>

        </div>
    )
}