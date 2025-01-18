function Styles() {
    return(
        <>
          <section className="Styles flex-col justify-center items-center bg-slate-50 font-serif">
              <div  className="py-8 text-[20px] md:text-[40px]  text-black font-semibold text-center" >
                  <h1>TRENDING STYLES</h1>
              </div>
               
              <div className="Pictures flex-row justify-items-center w-full  grid grid-cols-1  md:grid-cols-6  gap-2">
  <img src="first.webp" alt="Description of Image 1" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover rounded"/>
  <img src="sec.jpg" alt="Description of Image 2" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover rounded"/>
  <img src="third.jpg" alt="Description of Image 3" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover roundedd"/>
  <img src="forth.webp" alt="Description of Image 4" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover rounded"/>
  <img src="th.jpg" alt="Description of Image 5" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover rounded"/>
  <img src="sixth.jpg" alt="Description of Image 6" className=" w-[70%]  md:w-full h-[400px]   md:h-200  object-cover rounded"/>
</div>


          </section>
        </>
    )
}

export default Styles;