'use client'

import { Inter } from "next/font/google";
import { metadata } from "@/metadata";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(false)
  const [showBarProfile, setShowBarProfile] = useState(false)
  const [openNavBar, setOpenNavBar] = useState(false)
  
  const HandleOpenNavBar = () => {
    setOpenNavBar(!openNavBar);
  }

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="mentores, mentoría, aprendizaje, desarrollo profesional" />
      </head>
      <body className={inter.className}>
        <div className={`w-[100%] h-[100vh] bg-black opacity-30 absolute top-[70px] left-0 hidden z-50 ${showNav ? 'md:block' : 'md:hidden'}`}></div>
        <div className="w-full text-black flex flex-row justify-between items-center py-[10px] px-[20px] h-[70px] relative shadow-lg z-50">
          <a href="/" className="flex flex-row justify-center items-center">
            <img
              src="/book.png"
              alt="Course Platform"
              title="Course Platform"
              className="max-w-[30px]"
            />
            <h1 className="hidden md:block text-xl">
              Course Platform
            </h1>
          </a>
          <nav className={`bg-zinc-100 md:bg-transparent absolute top-0 left-0 w-[60vw] h-[100vh] p-[10px] md:relative md:default md:block md:w-auto md:h-auto z-[100] md:z-0 ${openNavBar ? 'flex' : 'hidden'}`}>
            <ul className={`flex flex-col gap-[10px] md:flex-row md:items-center`}>
              <li>
                <a href="/" className="py-[5px] px-[10px] hover:border-b hover:border-zinc-500">Inicio</a>
              </li>
              <li onMouseEnter={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)}>
                <button
                  className="flex flex-row justify-center items-center gap-[5px] py-[5px] px-[10px] md:hover:border-b hover:border-zinc-500"
                >
                  Recursos
                  <img
                    src={`${showNav ? '/chevron-right.png' : '/chevron-down.png'}`}
                    alt="Desplegar recursos"
                    className="max-w-[20px]"
                  />
                </button>
                <div 
                  className={`bg-zinc-100 text-zinc-800 flex flex-col justify-center items-start gap-[15px] pl-[20px] rounded-10px md:fixed md:top-[60px] md:w-[100%] md:h-[50%] left-0 md:flex-row md:justify-around md:gap-[50px] md:py-[10px] md:px-[50px] ${showNav ? 'flex' : 'hidden'}`} 
                >
                  <div>
                    <h2 className="text-lg mb-[15px] text-black">Categorías</h2>
                    <ul className="flex flex-col gap-[2px]">
                      <li><a href="">Ciberseguridad</a></li>
                      <li><a href="">Programación</a></li>
                      <li><a href="">Finanzas e Inversiones</a></li>
                      <li><a href="">Agrícultura</a></li>
                      <li><a href="">Arquitectura</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg mb-[15px] text-black">Mentores Personales</h2>
                    <ul className="flex flex-col gap-[2px]">
                      <li><a href="">Informáticos</a></li>
                      <li><a href="">Arquitectos</a></li>
                      <li><a href="">Agrícultores</a></li>
                      <li><a href="">Idiomas</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg mb-[15px] text-black">Eventos</h2>
                    <ul className="flex flex-col gap-[2px]">
                      <li><a href="">Evento de Programación</a></li>
                      <li><a href="">Evento de Trading</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="/site/sobre-nosotros" className="py-[5px] px-[10px] hover:border-b hover:border-zinc-500">Nosotros</a>
              </li>
              <li>
                <a href="/blog" className="py-[5px] px-[10px] hover:border-b hover:border-zinc-500">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center gap-[5px]">
            {/* <button className="bg-slate-800 py-[10px] px-[20px] rounded-[5px] hover:bg-slate-900">Crear Cuenta</button> */}
            <button
              className="bg-zinc-950 text-white py-[10px] px-[20px] rounded-[5px] flex flex-row justify-center items-center gap-[5px] relative"
              onMouseEnter={() => setShowBarProfile(true)}
              onMouseLeave={() => setShowBarProfile(false)}
            >
                <div className="w-[30px] h-[30px] bg-zinc-100 flex justify-center items-center rounded-full">
                  <img src="" alt="" title="Usuario" />
                </div>
                <h2>Usuario</h2>
                <img
                  src={`${showBarProfile ? '/chevron-right-white.png' : '/chevron-down-white.png'}`}
                  alt="Desplegar apartados del perfil"
                  className="max-w-[20px]"
                />
                <div className={`bg-zinc-950 w-[110%] h-auto absolute top-full p-[5px] rounded-[5px] ${showBarProfile ? 'block' : 'hidden'}`}>
                  <a href="/dashboard/perfil" className="hover:bg-zinc-800 py-[5px] px-[10px] w-full rounded-[5px] my-[5px] text-zinc-300 flex items-center gap-[5px]">
                      <img src="/user.png" alt="Perfil de usuario" className="max-w-[20px]" />
                      Perfil
                  </a>
                  <a href="/dashboard/configuraciones" className="hover:bg-zinc-800 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  text-zinc-300 flex items-center gap-[5px]">
                      <img src="/settings.png" alt="Configuraciones" className="max-w-[20px]" />
                      Configuraciones
                  </a>
                  <a href="/biblioteca" className="hover:bg-zinc-800 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  text-zinc-300 flex items-center gap-[5px]">
                      <img src="/library.png" alt="Biblioteca" className="max-w-[20px]" />
                      Biblioteca
                  </a>
                  <a href="/dashboard/seguridad" className="hover:bg-zinc-800 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  text-zinc-300 flex items-center gap-[5px]">
                      <img src="/lock.png" alt="Configuraciones" className="max-w-[20px]" />
                      Seguridad
                  </a>
                  <a href="" className="hover:bg-zinc-800 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  text-zinc-300 flex items-center gap-[5px]">
                      <img src="/logout.png" alt="Cerrar sesión" className="max-w-[20px]" />
                      Cerrar sesión
                  </a>
                </div>
            </button>
            <button onClick={HandleOpenNavBar}>
              <img src="/menu.png" alt="Desplegar navegación" className="block md:hidden max-w-[40px] cursor-pointer" />
            </button>
          </div>
        </div>
        {children}
        <footer className="bg-zinc-200 flex flex-col sm:flex-row flex-wrap justify-between items-start gap-[25px] px-[20px] py-[25px]">
          <div>
            <h4 className="pb-[5px]">
              <b>Cursos y Mentorías</b>
            </h4>
            <ul>
              <li>
                <a href="">Cursos en línea</a>
              </li>
              <li>
                <a href="">Mentorías personalizadas</a>
              </li>
              <li>
                <a href="">Calendario de eventos</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-[5px]">
              <b>Recursos</b>
            </h4>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="">Testimonios</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-[5px]">
              <b>Empresa</b>
            </h4>
            <ul>
              <li>
                <a href="">Sobre nosotros</a>
              </li>
              <li>
                <a href="">Equipo</a>
              </li>
              <li>
                <a href="">Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-[5px]">
              <b>Legal</b>
            </h4>
            <ul>
              <li>
                <a href="">Política de privacidad</a>
              </li>
              <li>
                <a href="">Términos de servicio</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-[5px]">
              <b>Contacto</b>
            </h4>
            <ul>
              <li>
                <a href="">Soporte</a>
              </li>
              <li>
                <a href="">Ventas</a>
              </li>
            </ul>
            <nav className="pt-[10px]">
              <ul className="flex flex-row justify-center items-center gap-[5px]">
                <li>
                  <a href="https://www.x.com" target="_blank">
                    <img
                      src="/brand-x.png"
                      alt="Redirigir a twitter"
                      className="max-w-[25px]"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <img
                      src="/brand-instagram.png"
                      alt="Redirigir a instagram"
                      className="max-w-[25px]"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank">
                    <img
                      src="/brand-facebook.png"
                      alt="Redirigir a facebook"
                      className="max-w-[25px]"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
