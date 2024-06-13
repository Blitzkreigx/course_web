export default function TestimonialCard() {
    return (
        <>
            <div className="max-w-[400px] bg-white border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200 p-[20px]">
                <div className="flex flex-row justify-start items-center gap-[20px] mb-[20px]">
                    <div className="bg-zinc-100 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                        <h3>SM</h3>
                    </div>
                    <div>
                        <h3><b>Sarah Miller</b></h3>
                        <h4 className="text-zinc-600">Designer, Acme Inc</h4>
                    </div>
                </div>
                <div>
                    <p>The platform has been a game-changer for our team. The analytics and reporting features are incredibly valuable.</p>
                </div>
            </div>
        </>
    )
}
