'use client'
import { FreeCourseCard, PaymentCourseCard } from "@/components/cards/course-card";
import FAQCard from "@/components/cards/faq-card";
import { MentorCard } from "@/components/cards/mentor-card";
import TestimonialCard from "@/components/cards/testimonial-card";

export default function Home() {
  return (
    <>
      <section className="px-[10px] py-[25px]">
        <div className="py-[25px] lg:max-w-[95%] mx-auto">
          <h2 className="text-3xl">Cursos Gratuitos</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
          <FreeCourseCard />
          <FreeCourseCard />
          <FreeCourseCard />
        </div>
      </section>
      <section className="px-[10px] py-[25px]">
        <div className="py-[25px] lg:max-w-[95%] mx-auto">
          <h2 className="text-3xl">Cursos de Pago</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
          <PaymentCourseCard />          
          <PaymentCourseCard />          
          <PaymentCourseCard />          
        </div>
      </section>
      <section className="px-[10px] py-[25px]">
        <div className="py-[25px] lg:max-w-[95%] mx-auto">
          <h2 className="text-3xl">Acceso a Mentores</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
          <MentorCard />          
          <MentorCard />          
          <MentorCard />          
        </div>
      </section>
      <section className="px-[10px] py-[25px]">
        <div className="pb-[20px] md:ml-[30px]">
            <h2 className="text-2xl">Frequently Asked Questions</h2>
            <p className="text-zinc-600">Here are some of the most common questions we receive from our students. If you have any other questions, please dont hesitate to contact us.</p>
        </div>
        <div>
            <FAQCard />
            <FAQCard />
            <FAQCard />
        </div>
      </section>
      <section className="px-[10px] py-[25px] bg-zinc-100">
        <div className="py-[25px] lg:max-w-[95%] mx-auto">
          <h2 className="text-3xl">Testimonios de nuestros estudiantes</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] lg:max-w-[95%] mx-auto">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <section className="px-[10px] py-[25px] bg-zinc-100">
        <div className="py-[25px] max-w-[900px] mx-auto">
          <h2 className="text-3xl">Contacta un Mentor</h2>
          <p className="text-zinc-500">Llena el siguiente formulario y uno de nuestros mentores se pondrá en contacto con base a tus necesidades.</p>
        </div>
        <form className="flex flex-col justify-center max-w-[900px] mx-auto">
          <label htmlFor="name" className="py-[5px] cursor-pointer">Nombre Completo</label>
          <input type="text" id="name" name="name" placeholder="Escriba su nombre completo" required className="w-full border-[1px] border-zinc-300 py-[10px] px-[5px] mb-[15px] rounded-[5px]" />
          <label htmlFor="email" className="py-[5px] cursor-pointer">Correo Electronico</label>
          <input type="email" id="email" name="email" placeholder="Escriba su correo electronico" required className="w-full border-[1px] border-zinc-300 py-[10px] px-[5px] mb-[15px] rounded-[5px]" />
          <label htmlFor="message" className="py-[5px] cursor-pointer">Mensaje</label>
          <textarea id="message" name="message" placeholder="Escriba su mensaje" required className="w-full h-[100px] border-[1px] border-zinc-300 py-[10px] px-[5px] resize-none mb-[20px] rounded-[5px]"></textarea>
          <input type="submit" value="Enviar" className="w-full bg-zinc-900 hover:bg-zinc-950 text-white py-[10px] rounded-[5px] text-lg cursor-pointer" />
        </form>
      </section>
    </>
  );
}
