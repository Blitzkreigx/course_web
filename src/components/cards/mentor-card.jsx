export function MentorCard() {
    return (
        <>
            <div className="max-w-[400px] border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200">
                <div className="w-full h-[300px] bg-zinc-200">
                  <img src="" alt="" />
                </div>
                <div className="px-[20px] py-[20px]">
                  <h3 className="text-2xl pb-[10px]">Juan Pérez</h3>
                  <p className="text-zinc-600 pb-[10px]">Experto en desarrollo web con más de 10 años de experiencia.</p>
                    <button className="bg-zinc-900 hover:bg-black text-white py-[8px] px-[16px] rounded-[5px] ">
                      <a href="/site/mentor">Ver Perfil</a>
                    </button>
                </div>
            </div>
        </>
    )
}
