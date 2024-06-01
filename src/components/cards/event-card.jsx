export default function EventCard() {
    return (
        <>
            <div className="max-w-[400px] border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200 p-[20px] flex flex-col justify-center gap-[20px]">
                <div>
                    <p className="bg-zinc-300 py-[4px] px-[10px] inline-block rounded-[6px] text-sm">Próximo Evento</p>
                </div>
                <div>
                    <h2 className="text-lg mb-[10px]"><b>Taller de Ventas</b></h2>
                    <p className="text-zinc-600">Aprende las habilidades clave para ser un líder efectivo en tu organización.</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p>20 de Junio, 2023</p>
                    <a href="/blog/eventos" className="py-[5px] px-[10px] bg-zinc-900 hover:bg-black text-white rounded-[5px]">Registrarse</a>
                </div>
            </div>
        </>
    )
}
