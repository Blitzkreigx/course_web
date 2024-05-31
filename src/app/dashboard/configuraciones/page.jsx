export default function User() {
    return (
        <>
            <section className="md:col-span-8 col-span-10">
                <div className="flex flex-col justify-center items-start border-[1px] border-zinc-300 p-[20px]">
                    <div className="py-[25px] w-full">
                        <h2 className="text-3xl">Perfil de Usuario</h2>
                        <p>Actualiza la información de tu perfil</p>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Nombre</label>
                            <input type="text" placeholder="Nombre" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px]" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Biografía</label>
                            <textarea name="" id="" placeholder="Bio" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px] h-[100px] resize-none"></textarea>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Ubicación</label>
                            <input type="text" placeholder="Ubicación" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px]" />
                        </div>
                        <div className="mt-[25px]">
                            <h2 className="text-lg">Social Links</h2>
                            <div className="flex flex-col justify-center items-start gap-[5px] ml-[30px] my-[15px]">
                                <label htmlFor="">Facebook</label>
                                <input type="text" placeholder="Facebook" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[770px]" />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-[5px] ml-[30px] my-[15px]">
                                <label htmlFor="">Instagram</label>
                                <input type="text" placeholder="Instagram" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[770px]" />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-[5px] ml-[30px] my-[15px]">
                                <label htmlFor="">Linkedin</label>
                                <input type="text" placeholder="Linkedin" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[770px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-full py-[25px] px-[10px]">
                        <button>Guardar Cambios</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start border-[1px] border-zinc-300 p-[20px]">
                    <div className="py-[25px] w-full">
                        <h2 className="text-3xl">Actualiza la Contraseña</h2>
                        <p>Actualiza tu contraseña</p>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Contraseña anterior</label>
                            <input type="text" name="" id="" placeholder="Contraseña anterior" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px]" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Nueva contraseña</label>
                            <input type="text" name="" id="" placeholder="Nueva contraseña" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px]" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-[5px] my-[15px]">
                            <label htmlFor="">Confirmar contraseña</label>
                            <input type="text" name="" id="" placeholder="Confirmar contraseña" className="border-[1px] border-black p-[5px] rounded-[5px] w-full max-w-[800px]" />
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
