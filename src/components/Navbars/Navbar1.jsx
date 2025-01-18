import { GiWorld } from "react-icons/gi";


function Navbar1() {
    

    return(
      <>
       
     <section className="body-container md:h-auto bg-slate-50 w-full text-sm font-thin m-0 hidden sm:block">
          <div className="p-tag flex justify-end pr-28 pb-2 ">
            <p className="border-l border-r border-gray-300 w-[120px] flex justify-center hover:text-red-400 ">Marketplace</p>
            <p className=" border-r border-gray-300 w-[120px] flex justify-center hover:text-red-400">Help & FAQs</p>
            <p className=" border-r border-gray-300 w-[50px] flex justify-center items-center pt-1 hover:text-red-400"><GiWorld /></p>
          </div>
     </section>

      </>
    )
}



export default Navbar1;