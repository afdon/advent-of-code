"use client"


export default function map() {

    return (
        <div className='flex flex-col gap-2 m-12 text-2xl w-[100vmin]'>

            <p>
                Using your notebook and pen, you decide to make a map of the surrounding area as you explore.
            </p>

            <p>
                You map the areas you've explored in a grid, like so:
            </p>

            <div className="m-auto">
                <div className="flex flex-row font-mono">
                    <div>4</div>
                    <div>0</div>
                    <div>R</div>
                    <div>0</div>
                    <div>7</div>
                    <div>0</div>
                    <div>2</div>
                </div>
                <div className="flex flex-row font-mono">
                    <div>0</div>
                    <div>W</div>
                    <div>C</div>
                    <div>0</div>
                    <div>9</div>
                    <div>3</div>
                    <div>C</div>
                </div>
                <div className="flex flex-row font-mono">
                    <div>0</div>
                    <div>6</div>
                    <div>4</div>
                    <div>R</div>
                    <div>0</div>
                    <div>R</div>
                    <div>R</div>
                </div>
                <div className="flex flex-row font-mono">
                    <div>3</div>
                    <div>R</div>
                    <div>0</div>
                    <div>C</div>
                    <div>9</div>
                    <div>1</div>
                    <div>7</div>
                </div>
            </div>

            <p>
                You intend to scope out a good place to build a shelter.

                Find a clearing that is as close to a source of water as possible.
                
            </p>

            <p>
            It should be boxed in by 4 trees, one in each corner. 

                You will build walls in between each tree.
            </p>

            <p>
                What are the co-ordinates of your shelter?
            </p>

        </div>
    )
}
