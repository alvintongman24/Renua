import { IoIosPersonAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

function Navbar2() {
    

    return(
      <>
       
       <section className="border-black text-white w-auto h-auto py-2 bg-zinc-800 flex flex-wrap justify-around items-center">
  <div className="LogoName">
    <h1 className="md:border-l border-r border-gray-300 px-3 text-[30px] font-extrabold font-serif">RENUA...</h1>
  </div>
  <div>
    <form className="max-w-sm md:max-w-full px-4">
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search for items..."
          className="text-sm sm:text-base md:text-xl w-[200px] sm:w-[400px] md:w-[700px] py-1 sm:py-2 md:py-3 pl-4 sm:pl-8 md:pl-12 pr-4 sm:pr-8 md:pr-12 text-gray-500 border border-1 sm:border-2 md:border-3 border-black hover:border-5 rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 right-2 sm:right-4 md:right-6 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 my-auto text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  </div>
  <div className="icons flex justify-between space-x-3 sm:space-x-5 md:space-x-10 text-[20px] border-l border-r border-gray-300 px-2 sm:px-3 md:px-3">
    <IoIosPersonAdd />
    <FaHeart />
    <IoBag />
  </div>
</section>


      </>
    )
}



export default Navbar2;