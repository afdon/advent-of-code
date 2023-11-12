"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




export default function CodeCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const data = [
    {
      "Challenge 1": "Challenge number one",
    },
    {
      "Challeneg 2": "Challenge number two",
    }
  ]

  return (
    <>

      <Card>
        <CardHeader>
          <CardTitle>Calendar of Code</CardTitle>
          <CardDescription>Coding Challenges</CardDescription>
        </CardHeader>
        <CardContent>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"

            // showOutsideDays={false}
            fixedWeeks={true}
            fromYear={2023} toYear={2025}
            weekStartsOn={1}
          />

        </CardContent>
        <CardFooter>
          {
            date &&
            <p>You're viewing: {date.toString()}</p>
          }
        </CardFooter>



      </Card>
    </>
  )
}

