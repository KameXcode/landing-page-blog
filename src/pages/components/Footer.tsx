import Image from "next/image"
export default function Footer(){
return(
    <div className=" mt-[60px] flex text-white max-md:flex-col  gap-[30px] h-[350px] max-md:h-[800px] max-md:rounded-bl-[100px] rounded-tr-[100px] max-md:items-center sm:pt-[50px] sm:pl-[200px] sm:pr-[200px] justify-center font-interstate-blackcondensed bg-bg-footer text-[18px]">
            <div className="sm:w-[25%]">
                <Image src={"/assets/images/logo.svg" } alt="logo" width={101} height={40} className="h-[40px]" />
            </div>
            <ul className="flex flex-col max-md:items-center  max-md:justify-center scale-x-125 sm:w-[25%]">
                <h3 className="font-bold sm:mb-[50px] ">Product</h3>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>

            </ul>
            <ul className="flex flex-col max-md:items-center max-md:justify-center scale-x-125 sm:w-[25%]">
            <h3 className="font-bold sm:mb-[50px]">Company</h3>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <ul className="flex  flex-col max-md:items-center max-md:justify-center scale-x-125 sm:w-[25%]">
                <h3 className="font-bold sm:mb-[50px]">Connect</h3>
                <li>Contact</li>
                <li>Newsletter</li>  
                <li>Linkedin</li>
            </ul>
        


    </div> 
) 
}
