import { SiElasticcloud } from "react-icons/si";

function Footer2() {

     const year = new Date().getFullYear()

    return(
        <>
             <section className="Footer1 text-[12px] md:text-lg md:border md:border-1 bg-gray-900 flex  justify-around text-center p-1 font-serif text-white ">
                <p className="md:border-l md:border-r md:border-5 md:px-20 border-black flex items-center md:gap-3"><SiElasticcloud /> {year}</p>
                <p className=" md:border-l md:border-r md:border-5 md:px-20 border-black">by emmycoder</p>
               
           </section>
        </>
    )
}

export default Footer2;