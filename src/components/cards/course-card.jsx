export function FreeCourseCard() {
    return (
        <>
            <div className="max-w-[400px] border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200">
                <div className="w-full h-[300px] bg-zinc-200">
                  <img src="" alt="" />
                </div>
                <div className="px-[20px] py-[20px]">
                  <h3 className="text-2xl pb-[10px]">Introducción a HTML y CSS</h3>
                  <p className="text-zinc-600 pb-[10px]">Aprende los conceptos básicos de HTML y CSS para crear páginas web.</p>
                  <a href="/cursos/introduccion-a-html" className="bg-zinc-900 hover:bg-black text-white py-[8px] px-[16px] rounded-[5px]">Acceder</a>
                </div>
            </div>
        </>
    )
}

export function PaymentCourseCard() {
    return (
        <>
            <div className="max-w-[400px] border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200">
                <div className="w-full h-[300px] bg-zinc-200">
                  <img src="" alt="" />
                </div>
                <div className="px-[20px] py-[20px]">
                  <h3 className="text-2xl pb-[10px]">Desarrollo Web Avanzado</h3>
                  <p className="text-zinc-600 pb-[10px]">Aprende técnicas avanzadas de desarrollo web, incluyendo frameworks, APIs y despliegue.</p>
                  <div className="flex flex-row justify-between items-center">
                    <p><strong>$199</strong></p>
                    <a href="/cursos/introduccion-a-html" className="bg-zinc-900 hover:bg-black text-white py-[8px] px-[16px] rounded-[5px]">Inscribirme</a>
                  </div>
                </div>
            </div>
        </>
    )
}

export default function Cards() {
    CourseCard();
    PaymentCourseCard();
}
