'use client'
import { useState } from "react"

export default function Mentor() {
    const [contactMentor, setContactMentor] = useState(false)

    return (
        <>
            <section className="px-[10px] py-[25px]">
                <div className="flex flex-col justify-center items-start gap-[5px] my-[15px] lg:max-w-[90%] mx-auto">
                    <div className="flex justify-start items-center gap-[15px] mb-[25px]">
                        <div className="bg-zinc-200 w-[80px] h-[80px] rounded-full flex justify-center items-center text-xl">
                            CB
                        </div>
                        <div>
                            <h1 className="text-lg"><b>Juan Pérez</b></h1>
                            <h2 className="text-zinc-600">Especialista en Ciberseguridad</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-[25px] py-[10px]">
                        <a href="https://www.facebook.com" target="_blank" className="border-[1px] border-black rounded-[2px] py-[6px] px-[12px] cursor-pointer hover:bg-zinc-200">Facebook</a>
                        <a href="https://www.instagram.com" target="_blank" className="border-[1px] border-black rounded-[2px] py-[6px] px-[12px] cursor-pointer hover:bg-zinc-200">Instagram</a>
                        <a href="https://www.youtube.com" target="_blank" className="border-[1px] border-black rounded-[2px] py-[6px] px-[12px] cursor-pointer hover:bg-zinc-200">YouTube</a>
                        <a href="https://www.linkedin.com/" target="_blank" className="border-[1px] border-black rounded-[2px] py-[6px] px-[12px] cursor-pointer hover:bg-zinc-200">Linkedin</a>
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
                    </div>
                    <div className="py-[25px]">
                        <button 
                            className="bg-zinc-900 hover:bg-black text-white py-[8px] px-[24px] rounded-[5px]" 
                            onClick={() => setContactMentor(true)}
                        >Contactar ahora!</button>
                    </div>
                </div>
                <div className={`w-full h-screen bg-black opacity-30 absolute top-0 left-0 ${contactMentor ? 'block' : 'hidden'}`}></div>
                <div className={`p-[25px] w-[90%] md:w-[60%] min-h-[70%] border-[1px] border-zinc-400 rounded-[10px] absolute bg-white left-[5%] right-[5%] md:left-[20%] md:right-[20%] top-[15%] bottom-[15%] z-[100] ${contactMentor ? 'block' : 'hidden'}`}>
                    <div className="flex justify-end items-center">
                        <button onClick={() => setContactMentor(false)}>
                            <img src="/x.png" alt="Cerrar contacto con mentor" className="max-w-[25px] cursor-pointer" />
                        </button>
                    </div>
                    <form className="flex flex-col justify-center">
                      <label htmlFor="name" className="py-[5px] cursor-pointer">Nombre Completo</label>
                      <input type="text" id="name" name="name" placeholder="Escriba su nombre completo" required className="w-full border-[1px] border-zinc-600 py-[10px] px-[5px] mb-[15px] rounded-[5px]" />
                      <label htmlFor="email" className="py-[5px] cursor-pointer">Correo Electronico</label>
                      <input type="email" id="email" name="email" placeholder="Escriba su correo electronico" required className="w-full border-[1px] border-zinc-600 py-[10px] px-[5px] mb-[15px] rounded-[5px]" />
                      <label htmlFor="message" className="py-[5px] cursor-pointer">Mensaje</label>
                      <textarea id="message" name="message" placeholder="Escriba su mensaje" required className="w-full h-[100px] border-[1px] border-zinc-600 py-[10px] px-[5px] resize-none mb-[20px] rounded-[5px]"></textarea>
                      <input type="submit" value="Enviar" className="w-full bg-zinc-900 hover:bg-zinc-950 text-white py-[10px] rounded-[5px] text-lg cursor-pointer" />
                    </form>
                </div>
            </section>
        </>
    )
}
