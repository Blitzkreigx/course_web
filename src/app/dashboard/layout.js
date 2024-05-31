export default function RootLayout({ children }) {
    return (
        <>
            <div className="grid grid-cols-10 min-h-screen">
                <aside className="hidden md:block bg-zinc-100 col-span-2 p-[20px]">
                    <div className="flex flex-col justify-center items-start">
                        <a href="/dashboard/perfil" className="hover:bg-zinc-300 py-[5px] px-[10px] w-full rounded-[5px] my-[5px] flex items-center gap-[5px]">
                            <img src="/user.png" alt="Perfil de usuario" className="max-w-[20px]" />
                            Perfil
                        </a>
                        <a href="/dashboard/configuraciones" className="hover:bg-zinc-300 py-[5px] px-[10px] w-full rounded-[5px] my-[5px] flex items-center gap-[5px]">
                            <img src="/settings.png" alt="Configuraciones" className="max-w-[20px]" />
                            Configuraciones
                        </a>
                        <a href="/dashboard/seguridad" className="hover:bg-zinc-300 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  flex items-center gap-[5px]">
                            <img src="/lock.png" alt="Seguridad" className="max-w-[20px]" />
                            Seguridad
                        </a>
                        <button className="hover:bg-zinc-300 py-[5px] px-[10px] w-full rounded-[5px] my-[5px]  flex items-center gap-[5px]">
                            <img src="/logout.png" alt="Cerrar sesión" className="max-w-[20px]" />
                            Cerrar sesión
                        </button>
                    </div>
                </aside>
                {children}
            </div>
        </>
    );
}
