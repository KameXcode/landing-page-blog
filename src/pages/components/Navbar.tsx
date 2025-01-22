import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar(){
    const arrow_down = <Image  src="/assets/images/icon-arrow-light.svg" width={10} height={10} alt="" className="max-h-[10px] mt-[9px]"/>
    return(
        <div className=" sm:pl-[125px] sm:pr-[125px] flex  justify-between gap-[60px] w-full h-auto mt-[50px] pr-[20px] pl-[20px] ">
            <div className="">
                
                <div className="flex  " >
                    <Image src={"/assets/images/logo.svg" } alt="logo" width={101} height={40}>
                    </Image >
                    <ul className=" max-md:hidden flex gap-[25px] ml-[75px] text-white items-center">
                        <li className="flex gap-[7px]"><Link href={""}>Product</Link> {arrow_down} </li> 
                        <li className="flex gap-[7px]"><Link href={""}>Company</Link>  {arrow_down}</li> 
                        <li className="flex gap-[7px]"><Link href={""}>Connect</Link>  {arrow_down}</li> 
                    </ul>
                </div>
            </div>
            <div className=" flex gap-[10px] max-md:hidden ">
                <Button variant={"outline"} className="w-[130px] h-[40px] rounded-full border-none bg-transparent text-white "><span className="">Login</span></Button>
                <Button variant={"secondary"} className="w-[130px] h-[40px] rounded-full">
                        <span className="text-bg-pink font-bold">Sign Up</span>
                </Button>
                </div>
            <div className="sm:hidden">
                <Image src={"/assets/images/icon-hamburger.svg" } alt="menu hamburger" width={32} height={18}>
                </Image>
            </div>
           
        </div>
    )
}

export default Navbar