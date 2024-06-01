export default function ModuleCard() {
    return (
        <>
            <div className="bg-zinc-200 w-[90%] md:w-[80%] rounded-[10px] overflow-hidden p-[20px] flex justify-start items-center gap-[25px] mx-auto">
                <div className="hidden md:block md:min-h-[200px] md:min-w-[200px] bg-zinc-950 rounded-[10px]"><img src="" alt="" /></div>
                <div className="flex justify-between items-center w-full gap-[25px]">
                    <div className="w-[90%]">
                        <h2 className="text-xl md:text-2xl text-center"><b>Clase Maestra de Html</b></h2>
                        <input type="range" value="0" className="w-full" />
                        <h3 className="text-center">Aprende los conceptos fundamentales de HTML y dominalo en un 100%.</h3>
                    </div>
                    <a href="/cursos/introduccion-a-html/content" className="bg-zinc-900 hover:bg-black text-white py-[10px] px-[40px] rounded-full">Acceder</a>
                </div>
            </div>
        </>
    )
}
