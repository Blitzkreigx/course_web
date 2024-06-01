export default function ContentCourseHtml() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-12 w-full height-scroll">
                <div className="col-span-3 bg-zinc-100 p-[15px] overflow-y-scroll height-scroll hidden md:block">
                    <div>
                        <a href="/cursos/introduccion-a-html" className="inline-flex justify-start items-center gap-[5px] text-zinc-600 hover:text-black">
                            <img src="/chevron-left.png" alt="regresar a los cursos" className="max-w-[25px] cursor-pointer" />
                            <h2>Cursos</h2>
                        </a>
                        <div className="mt-[15px] mb-[30px]">
                            <h2 className="text-xl"><b>Clase Maestra de HTML</b></h2>
                        </div>
                    </div>
                    <div className="my-[25px]">
                        <h3 className="text-lg"><b>Introducción</b></h3>
                        <ul>
                            <li>
                                <a href="">Bienvenida</a>
                            </li>
                            <li>
                                <a href="">Prerequisitos</a>
                            </li>
                            <li>
                                <a href="">Tutorial Básico de ChatGPT</a>
                            </li>
                            <li>
                                <a href="">Tutorial Básico de VSCode</a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-[25px]">
                        <h3 className="text-lg"><b>Primeros Pasos</b></h3>
                        <ul>
                            <li>
                                <a href="">¿Qué Es HTML?</a>
                            </li>
                            <li>
                                <a href="">Hola Mundo</a>
                            </li>
                            <li>
                                <a href="">Configración</a>
                            </li>
                            <li>
                                <a href="">Partes</a>
                            </li>
                            <li>
                                <a href="">Cómo evitar bloqueos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-[25px]">
                        <h3 className="text-lg"><b>Etiquetas de Documento</b></h3>
                        <ul>
                            <li>
                                <a href="">html</a>
                            </li>
                            <li>
                                <a href="">head</a>
                            </li>
                            <li>
                                <a href="">body</a>
                            </li>
                            <li>
                                <a href="">header</a>
                            </li>
                            <li>
                                <a href="">main</a>
                            </li>
                            <li>
                                <a href="">footer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-[25px]">
                        <h3 className="text-lg"><b>Etiquetas Multimedia</b></h3>
                        <ul>
                            <li>
                                <a href="">img</a>
                            </li>
                            <li>
                                <a href="">audio</a>
                            </li>
                            <li>
                                <a href="">video</a>
                            </li>
                            <li>
                                <a href="">iframe</a>
                            </li>
                            <li>
                                <a href="">canvas</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-9 height-scroll">
                    <video src="" controls className="w-full -z-50"></video>
                    <div className="flex justify-between items-center py-[10px] px-[20px]">
                        <div className="flex justify-center items-center gap-[5px]">
                            <img src="/clock.png" alt="Duración de la clase" className="max-w-[20px]" />
                            <p className="text-zinc-800">15 minutos</p>
                        </div>
                        <button>
                            <img src="/chevron-right.png" alt="siguiente clase" title="Siguiente clase" className="max-w-[25px] cursor-pointer" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}