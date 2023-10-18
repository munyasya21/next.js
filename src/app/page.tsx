import Image from 'next/image'


export default function Home() {
  return (
   
       <section>
          <div>
        <header>
          <div className="flex-1 text-2xl font-bold mt-9  gap-4 w-full  inline-flex items-center  border-transparent  pt-1 hover:border-gray-300 hover:text-gray-700  ">
          <h1>
            TOREX
          </h1>
          </div>
          <div className=" flex-1 text-2xl font-bold pl-[1500px] text-left mt-2  gap-4 w-full  inline-flex items-center  border-transparent  pt-1 hover:border-gray-300 hover:text-gray-700 ">
          <div>
            Contact Us
          </div>
          <div>
            About Us
          </div>
          <div>
            Log In
          </div>
          </div>
          </header>
          <div>
            <h2 className=" font-extrabold text-[90px] mt-[200px] ml-[110px] leading-[100px] tracking-[-1.6px]">
              A Class Of 
              <br/>
              Your Own
            </h2>
            <div>
              <p className=" font-medium ml-[110px] text-[22px] ">
                Where Elegance Is Obtained.
              </p>
            </div>
          </div>
          <div className="flex ml-[110px] mr-[16.52px] h-[50px] my-2  ">
              <button className=" px-3 py-3 rounded-xl border border-[bg-Color-14] shadow-sm  bg-Foundation   whitespace-nowrap text-Color-18 font-medium text-base tracking-[-0.2px]">
                Log in
              </button>

              <button className="flex items-center justify-center ml-[17px] mr-[16.1px]  whitespace-nowrap self-stretch px-3 py-3 rounded-xl bg-Color-5  border border-[bg-Color-17] ">
                Talk To Us
              </button>
            </div>
            <div>
            <Image
      src="/1pic.jpg"
      width={500}
      height={500}
      alt=""
      
    />
    </div>
        </div>
        
        <section>
          <div>

          </div>
        </section>
       </section>

       
)
}  

