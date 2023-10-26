import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <header>
          <div className="w-full hidden lg:block  border-b fixed top-0 right-0 left-0 z-50 transition-all ease-in-out duration-100">
            <div className="section  !max-w-[1400opx] flex py-5  justify-between ">
              <div className="flex-1 text-2xl font-bold mt-9  gap-4 w-full   justify-end inline-flex items-center  border-transparent  pt-1 hover:border-gray-300 hover:text-gray-700  ">
                <div>
                  <h1>TOREX</h1>
                </div>
                <div className="">
                  
                  <button className=" px-4 py-3 rounded-xl border border-[bg-Color-14] shadow-sm  bg-Foundation   whitespace-nowrap text-Color-18 font-medium text-base tracking-[-0.2px]">
                    <div>Sign Up</div>
                  </button>
                  <button className=" px-3 py-3 rounded-xl border border-[bg-Color-14] shadow-sm  bg-Foundation   whitespace-nowrap text-Color-18 font-medium text-base tracking-[-0.2px]">
                    <div>Contact Us</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
     
        <div className=" text-center ">
          <h2 className=" font-extrabold text-[90px] mt-[200px] ml-[110px] leading-[100px] tracking-[-1.6px]">
            A Class Of
            <br />
            Your Own
          </h2>
          <div>
            <p className=" font-medium ml-[110px] text-[22px] ">
              Where Elegance Is Obtained.
            </p>
          </div>
        </div>
        <div className="flex ml-[910px] mr-[16.52px] h-[50px] my-2   ">
          <button className=" px-3 py-3 rounded-xl border border-[bg-Color-14] shadow-sm  bg-Foundation   whitespace-nowrap text-Color-18 font-medium text-base tracking-[-0.2px]">
            Log in
          </button>

          <button className="flex items-center justify-center ml-[17px] mr-[16.1px]  whitespace-nowrap self-stretch px-3 py-3 rounded-xl bg-Color-5  border border-[bg-Color-17] ">
            SHOP NOW
          </button>
        </div>
  
      </div>

      <section>
        <div className="  pt-[500px] ">
          <div className=" text-center">
            <h2 className=" font-bold text-[60px] ">
             PRODUCT CATEGORIES
            </h2>
          </div>

        <div className=" lg:flex  justify-center w-full  h-auto  hidden    rounded-md  p-2">
          <div className=" pr-5">
            <Image src="/1pic.jpg" width={700} height={100} alt="" />
            <h3>WOMENS WEAR</h3>
          </div>
          <div className=" pr-5">
            <Image src="/2pic.jpg" width={700} height={100} alt="" />
            <h3>PERFUME</h3>
          </div>
          <div className="pr-5">
            <Image src="/7pic.jpg" width={700} height={100} alt="" />
            <h3>SHOE WEAR</h3>
          </div>
          <div className=" pr-5">
            <Image src="/4pic.jpg" width={700} height={100} alt="" />
            <h3>JEWELRY</h3>
          </div>
          <div>
            <Image src="/5pic.jpg" width={700} height={100} alt="" />
            <h3>MENS WEAR</h3>
          </div>
        </div>
        </div>
      </section>
    </section>
  );
}
