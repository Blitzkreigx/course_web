import { useState } from "react"

export default function FAQCard() {
    const [openFAQ, setOpenFAQ] = useState(false)

    const HanldeOpenFAQ = () => {
      setOpenFAQ(!openFAQ)
    }

    return (
        <>
            <div className="border-[1px] border-zinc-300 max-w-[1000px] mx-auto rounded-[10px] overflow-hidden my-[20px]">
                <div className="bg-zinc-100 py-[20px] px-[20px] flex flex-row justify-between items-center">
                    <h3 className="text-lg">¿Cómo son las mentorías personalizadas?</h3>
                    <button onClick={HanldeOpenFAQ}>
                        <img src={`${openFAQ ? '/chevron-right.png' : '/chevron-down.png'}`} alt="desplegar pregunta frecuente" className='max-w-[25px] cursor-pointer' />
                    </button>
                </div>
                <div className={`p-[10px] ${openFAQ ? 'block' : 'hidden'}`}>
                    <p className="text-zinc-600">En cada mentoría conocerás a tu mentor y con el o ella podrás resolver cualquiera de tus dudas respecto al tema, de manera amable te informará y ayudará.</p>
                </div>
            </div>
        </>
    )
}