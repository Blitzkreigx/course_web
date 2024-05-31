import EventCard from "@/components/cards/event-card";
import PostCard from "@/components/cards/post-card";

export default function Blog() {
    return (
        <>
            <section className="px-[10px] py-[25px]">
                <div className="py-[25px] lg:max-w-[95%] mx-auto">
                    <h2 className="text-3xl">Más Relevantes</h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </section>
            <section className="px-[10px] py-[25px]">
                <div className="py-[25px] lg:max-w-[95%] mx-auto">
                    <h2 className="text-3xl">Proximos eventos</h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </section>
        </>
    )
}