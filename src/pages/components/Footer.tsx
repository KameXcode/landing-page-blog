import Image from "next/image"
export default function Footer(){
return(
    <div className=" mt-[60px] flex text-white flex-col gap-[30px] h-[800px] rounded-bl-[100px] rounded-tr-[100px] items-center justify-center font-interstate-blackcondensed bg-bg-footer text-[18px]">
             <Image src={"/assets/images/logo.svg" } alt="logo" width={101} height={40}/>
            <ul className="flex flex-col items-center justify-center scale-x-125">
                <h3 className="font-bold ">Product</h3>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>

            </ul>
            <ul className="flex flex-col items-center justify-center scale-x-125">
            <h3 className="font-bold">Company</h3>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <ul className="flex flex-col items-center justify-center scale-x-125">
                <h3 className="font-bold">Connect</h3>
                <li>Contact</li>
                <li>Newsletter</li>  
                <li>Linkedin</li>
            </ul>
        


    </div> 
) 
}
