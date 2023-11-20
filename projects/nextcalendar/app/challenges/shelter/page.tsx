"use client"


export default function shelter() {

    return (
        <div className='flex flex-col gap-2 m-12 text-xl w-[100vmin]'>

            <p>
                {/* You decide to build a shelter in between 4 trees, using their trunks as support.  */}
                You need to cut down some logs to make walls and a roof.
            </p>

            <p>
                Look for trees of the right size to cut down. Trees should be 6 to 12 feet tall and between 2 and 4 inches. 
            </p>

            <p>
                Clear trees closer to the shelter before you clear trees further away. Trees should be no more than 18 units from any direction of the shelter.
            </p>

            <p>
                How many trees are left standing within 18 units from the shelter?
            </p>
        </div>
    )
}
