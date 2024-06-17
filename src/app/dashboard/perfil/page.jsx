export default function Pefil() {
    return (
        <>
            <section className="">
                <div className="flex flex-col justify-between items-start border-[1px] border-zinc-300 p-[20px] h-full height">
                    <div className="w-full h-full">
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <div className="flex justify-start items-center gap-[15px] mb-[25px]">
                                <div className="bg-zinc-200 w-[80px] h-[80px] rounded-full flex justify-center items-center text-xl">
                                    CB
                                </div>
                                <div>
                                    <h1 className="text-lg"><b>Joaquín Guzmán</b></h1>
                                    <h2 className="text-zinc-600"><time datetime="2024/06/15"></time>Se unió del 15 de junio del 2024</h2>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus a harum quisquam illum in expedita libero magni laborum voluptatibus exercitationem unde consectetur voluptate eaque est deserunt, voluptatem ducimus ut labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, minima.</p>
                            </div>
                            <div className="flex justify-center items-center py-[25px]">
                                <div className="border-zinc-300 border-r-[1px] py-[10px] px-[25px] text-center">
                                    <p className="text-2xl"><b>0</b></p>
                                    <h3>Cursos</h3>
                                </div>
                                <div className="border-zinc-300 border-r-[1px] py-[10px] px-[25px] text-center">
                                    <p className="text-2xl"><b>0</b></p>
                                    <h3>Seguidores</h3>
                                </div>
                                <div className="border-zinc-300 border-r-[1px] py-[10px] px-[25px] text-center">
                                    <p className="text-2xl"><b>0</b></p>
                                    <h3>Favoritos</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-full py-[25px] px-[10px]">
                        <button>Guardar Cambios</button>
                    </div>
                </div>
            </section>
        </>
    )
}