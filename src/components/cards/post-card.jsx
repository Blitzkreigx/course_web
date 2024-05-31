export default function PostCard() {
    return (
        <>
            <div className="max-w-[400px] border-zinc-300 border-[1px] rounded-[5px] overflow-hidden shadow-lg shadow-zinc-200">
                <div className="w-full h-[300px] bg-zinc-200">
                  <img src="" alt="" />
                </div>
                <div className="px-[20px] py-[20px]">
                  <h3 className="text-2xl pb-[10px]">Unlocking the Secrets of Effective Online Learning</h3>
                  <p className="text-zinc-600 pb-[10px]">Discover the key strategies to create online courses that engage and inspire your students.</p>
                  <div className="flex justify-start items-center gap-[5px] mt-[15px]">
                    <a href="/blog/publicaciones" className="cursor-pointer border-b border-white hover:border-b hover:border-black box-border">Read More</a>
                    <img src="/arrow-right.png" alt="Redirigir al post" className="max-w-[25px] cursor-pointer" />
                  </div>
                </div>
            </div>
        </>
    )
}