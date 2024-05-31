import TeamCard from "@/components/cards/team-card";

export default function SobreNosotros() {
    return (
        <>
            <section className="px-[10px] py-[25px] grid grid-cols-1 md:grid-cols-3 gap-[25px] justify-center items-center">
                <div className="md:ml-[30px] col-span-2 py-[25px]">
                    <h2>Nombre del CEO</h2>
                    <h2 className="text-4xl mb-[20px]">CEO de la Empresa</h2>
                    <p className="text-zinc-600 mb-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus animi, accusamus sunt harum libero asperiores assumenda doloremque velit? Consequuntur vel mollitia atque sit repellat suscipit libero voluptatum totam quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio illum esse officiis nihil blanditiis recusandae fugiat illo at laboriosam.</p>
                    <p className="text-zinc-600 mb-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus animi, accusamus sunt harum libero asperiores assumenda doloremque velit? Consequuntur vel mollitia atque sit repellat suscipit libero voluptatum totam quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio illum esse officiis nihil blanditiis recusandae fugiat illo at laboriosam.</p>
                </div>
                <div className="flex justify-center items-center max-w-[500px] mx-auto py-[25px]">
                    <img src="/replacement-image.svg" alt="CEO de la empresa" className="md:max-w-[80%]" />
                </div>
            </section>
            <section className="px-[10px] py-[25px] grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                <div className="flex justify-center items-center max-w-[500px] mx-auto py-[25px]">
                    <img src="/replacement-image.svg" alt="Imagen de la empresa" className="md:max-w-[80%]" />
                </div>
                <div className="md:ml-[30px] py-[25px]">
                    <h2 className="text-4xl mb-[10px]">Sobre Nosotros</h2>
                    <p className="text-zinc-600 mb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus animi, accusamus sunt harum libero asperiores assumenda doloremque velit? Consequuntur vel mollitia atque sit repellat suscipit libero voluptatum totam quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio illum esse officiis nihil blanditiis recusandae fugiat illo at laboriosam.</p>
                    <h2 className="text-2xl mb-[10px]">Nuestra Visión a Futuro</h2>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus esse quis quasi vero sapiente, excepturi omnis molestias dolorum beatae dolores, quibusdam quia qui nihil harum dolorem earum nostrum deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum omnis quos, pariatur nostrum nesciunt perferendis sit excepturi modi veritatis.</p>
                    <p className="text-zinc-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eius itaque assumenda corrupti esse reprehenderit vel ab dolorem commodi, exercitationem ullam magni, qui placeat cumque totam minima aspernatur. Nostrum, labore.</p>
                </div>
            </section>
            <section className="px-[10px] py-[25px]">
                <div className="py-[25px] lg:max-w-[95%] mx-auto">
                  <h2 className="text-3xl">Nuestro Equipo</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between items-center gap-[25px] lg:max-w-[95%] mx-auto">
                    <div className="md:col-span-2 row-span-2 bg-zinc-100 w-[100%] min-w-[250px] max-w-[500px] md:max-w-[100%] h-full rounded-[5px] border-[1px] border-zinc-300 shadow-lg shadow-zinc-200 p-[10px] flex flex-col justify-start items-center mx-auto">
                        <div className="w-[80px] h-[80px] rounded-full bg-white mx-auto mt-[10px] mb-[20px]">
                            <img src="" alt="" />
                        </div>
                        <div className="text-center max-w-[80%] flex flex-col gap-[5px]">
                            <h3 className="text-lg"><b>Joaquín Guzman</b></h3>
                            <p className="text-zinc-700">CEO de la Empresa</p>
                            <p className="text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit sed, illo cupiditate neque nihil.</p>
                        </div>
                    </div>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </section>
        </>
    )
}