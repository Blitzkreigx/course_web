export default function TeamCard() {
    return (
        <>
            <div className="w-[100%] min-w-[250px] max-w-[500px] py-[10px] px-[20px] flex justify-start items-center gap-[25px] bg-zinc-100 border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200 mx-auto">
                <div className="w-[80px] h-[80px] rounded-full bg-white mt-[10px] mb-[20px]">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3 className="text-lg"><b>Lorena Hernandez</b></h3>
                    <p className="text-zinc-700">Ingeniera en software</p>
                </div>
            </div>
        </>
    )
}