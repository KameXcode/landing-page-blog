import Navbar from "./Navbar"
import { Button } from "@/components/ui/button"
export function Header(){
    const text_pattern =" text-[24px] text-white font-interstate-blackcondensed"
    return(
        <>
           <div className="bg-custom-gradient flex flex-col w-full h-[600px]  bg-center rounded-bl-[150px]">
                <Navbar>
                </Navbar>
                <div className="text-center self-center space-y-4 font-interstate-blackcondensed text-white scale-x-125  mt-[90px]">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        A modern <br /> publishing platform
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 text-white">
                        Grow your audience and build your <br /> online brand
                    </p>
                </div>
                <div className="self-center flex gap-[15px] mt-[40px]">
                    
                    <Button variant={"secondary"} className="w-[130px] h-[40px] rounded-full">
                        <span className="text-bg-pink font-bold">Start for free</span>
                    </Button>
                    <Button variant={"outline"} className="w-[130px] h-[40px] rounded-full bg-transparent text-white "><span className="">Learn more</span></Button>
                </div>
           </div>
        </>
    )
}
export default Header