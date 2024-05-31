export default function Page() {
    return (
        <>
            <section className="px-[10px] py-[25px] max-w-[1000px] mx-auto">
                <div className="py-[25px] mx-auto text-center">
                    <h2 className="text-3xl"><strong>Lorem, ipsum dolor</strong></h2>
                    <h3 className="text-zinc-700"><time datetime="01/06/2024">1 Mayo 2024</time></h3>
                    <h3 className="text-zinc-700"><time datetime="01/06/2024">8:00pm</time></h3>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet omnis maxime quidem dolorem ut voluptatum, natus corrupti distinctio quia, blanditiis amet commodi quaerat cum quos unde repellendus quod ab veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt, at iure nesciunt quisquam ab magni eum non. Magni, odio? Consequuntur dolore repellat quia adipisci incidunt ipsa est culpa autem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam magni, dolores tenetur nisi enim, dolor consequatur quasi architecto eius soluta nemo beatae ratione maiores quos similique odio nesciunt! Distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aspernatur. Perspiciatis dolores consequatur, mollitia ipsum impedit quae deleniti? Vero accusamus maiores quis tempora velit, molestias odio laboriosam rerum a, nesciunt aliquid eveniet doloremque. Magnam cum, ipsa perspiciatis, quia a enim consectetur repellendus possimus pariatur sed doloremque perferendis incidunt quas recusandae consequuntur dolor.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet omnis maxime quidem dolorem ut voluptatum, natus corrupti distinctio quia, blanditiis amet commodi quaerat cum quos unde repellendus quod ab veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt, at iure nesciunt quisquam ab magni eum non. Magni, odio? Consequuntur dolore repellat quia adipisci incidunt ipsa est culpa autem.</p>
                </div>
                <div className="mt-[50px]">
                    <p className="text-xl"><b>Recibe notificaciónes cuando iniciemos</b></p>
                    <form className="flex justify-start items-center gap-[15px] py-[10px]">
                        <input type="text" placeholder="Nombre Completo" className="border-[1px] border-black rounded-[5px] p-[5px] w-[300px]" />
                        <input type="text" placeholder="Correo Electronico" className="border-[1px] border-black rounded-[5px] p-[5px] w-[300px]" />
                        <button className="bg-zinc-900 hover:bg-zinc-950 text-white py-[5px] px-[20px] rounded-[5px]">Inscribirse</button>
                    </form>
                </div>
            </section>
        </>
    )
}