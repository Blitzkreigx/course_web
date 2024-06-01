import { FreeCourseCard, PaymentCourseCard } from "@/components/cards/course-card";

export default function Biblioteca() {
    return (
        <>
            <section className="px-[10px] py-[25px]">
              <div className="py-[25px] lg:max-w-[95%] mx-auto">
                <h2 className="text-3xl">Mis Cursos</h2>
              </div>
              <div className="flex flex-row flex-wrap justify-start items-center gap-[20px] lg:max-w-[95%] mx-auto my-[30px]">
                <FreeCourseCard />
              </div>
            </section>
        </>
    )
}