export default function Seguridad() {
    return (
        <>
            <section className="">
                <div className="flex flex-col justify-between items-start border-[1px] border-zinc-300 p-[20px] h-full height">
                    <div className="w-full h-full">
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <h2 className="text-3xl">Autenticación de dos factores</h2>
                            <button className="py-[8px] px-[20px] bg-zinc-900 hover:bg-zinc-950 text-white rounded-[5px]">Activar</button>
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