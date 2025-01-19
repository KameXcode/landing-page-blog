import Image from "next/image"
export function Navbar(){
    return(
        <div className="flex justify-between gap-[60px] w-full h-auto mt-[50px] pr-[20px] pl-[20px] ">
            <div className="">
                <Image src={"/assets/images/logo.svg" } alt="logo" width={101} height={40}>
                </Image>
            </div>
            
            <div>
                <Image src={"/assets/images/icon-hamburger.svg" } alt="menu hamburger" width={32} height={18}>
                </Image>
            </div>
        </div>
    )
}

export default Navbar