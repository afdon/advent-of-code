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
                    You are lost in a forest at dusk. Dense clusters of trees loom all around.
                </p>


                <p>
                    Nightfall is descending rapidly. You can barely see in front of you.
                </p>

                <p>
                    Your backpack is weighing on your shoulders. You heave it off and unzip it.
                </p>

                <Link href='/challenges/backpack' className='font-bold underline hover:text-blue-700'>Open your backpack.</Link>

        </div>
    )
}