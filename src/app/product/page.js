// import './globals.css'

export default function Product () {
    return (
        <main className="pt-[65px]">
            <div className="bg-[#D3CABE] flex flex-row">
                <div className="w-2/3 flex flex-col justify-center gap-10">
                    <p className="w-[600px] pl-20 font-semibold text-4xl leading-relaxed">Welcome to the Palm Tree WebGIS product menu</p>
                    <p className="w-[700px] pl-40 text-xl leading-normal">Optimizing the performance of your oil palm plantations to be more efficient with an innovative automatic calculation feature</p>
                </div>

                <div className="w-1/3">
                    <img src="/assets/medium/tree.png"/>
                </div>
            </div>

            <div className="pt-28 flex items-center justify-center gap-3">
                <div className="w-[300px] h-[200px] px-5 border-2 border-neutral-800 rounded-xl flex items-center justify-center">
                    <button className="px-4 py-2 bg-neutral-800 text-white rounded-xl">Get Started</button>
                </div>
                <div className="w-[300px] h-[200px] px-5 border-2 border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-2">
                    <p className="font-semibold text-lg">Build Your Dataset</p>
                    <div className="mb-[22px] flex gap-4 items-center">
                        <img src="/assets/small/database.png" className="w-10 h-10"/>
                        <p className="leading-snug">You can build a dataset and search your images by objects</p>
                    </div>
                </div>
                <div className="w-[300px] h-[200px] px-5 border-2 border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-2">
                    <p className="font-semibold text-lg">Deploy Your Model</p>
                    <div className="flex gap-4 items-center">
                        <img src="/assets/small/rocket.png" className="w-10 h-10"/>
                        <p className="leading-snug">you can deploy your object detection model to a range of environments</p>
                    </div>
                </div>
                <div className="w-[300px] h-[200px] px-5 border-2 border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-2">
                    <p className="font-semibold text-lg">Show The Table</p>
                    <div className="flex gap-4 items-center">
                        <img src="/assets/small/table.png" className="w-10 h-10"/>
                        <p className="leading-snug">show the table to see the result from the calculations that you have done before</p>
                    </div>
                </div>
            </div>
        </main>
    )
}