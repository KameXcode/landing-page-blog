import Image from "next/image"
export default function Main(){
    return(
        <>
           <div className="flex flex-col font-interstate-blackcondensed items-center mt-[90px]">
                <span className="text-black-light font-bold text-[30px] mb-[30px]">Designed for the future</span>
                <div className="relative">
                    <Image className="" src="/assets/images/illustration-editor-mobile.svg" alt="illustration" width={406} height={331}  ></Image>
                </div>
                < div className="font-interstate-blackcondensed mt-[60px]">
                    <h2 className="text-black-light font-bold text-[30px] text-center flex flex-col mb-[30px] "><span>Introducing an</span><span className="-mt-[15px]">extensible editor</span></h2>
                    <p className="text-center w-[300px] mt-[10px]">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.
                    </p>
                </div>
                < div className="font-interstate-blackcondensed mt-[60px]">
                    <h2 className="text-black-light font-bold text-[30px] text-center flex flex-col mb-[30px] "><span>Robust Content</span><span className="-mt-[15px]">management</span></h2>
                    <p className="text-center w-[300px] mt-[10px]"> 
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </div>
                <Image src={"/assets/images/illustration-phones.svg"} width={552} height={579} alt="phones" className="mt-[60px] -mb-[150px] z-20"></Image>
                <div className="flex flex-col h-[750px] w-full rounded-bl-[100px] rounded-tr-[100px] bg-bg-purple overflow-hidden relative items-center justify-center">
                    
                    <Image src={"/assets/images/bg-pattern-circles.svg"} width={600} height={600} alt="circles" className="absolute top-[-190px] max-w-none z-0 "></Image>
                    <div className="z-10  text-center mt-[130px]">
                        <h2 className="text-white font-bold text-[50px] text-center flex flex-col mb-[30px]  "><span>State of the art</span><span className="-mt-[15px]">Infrastructure</span></h2>
                        <p className="text-center w-[230px] text-[18px] mt-[10px] font-medium text-white scale-x-110 ">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
                <div className="mt-[70px] flex flex-col items-center ">
                    <Image src={"/assets/images/illustration-laptop-mobile.svg"} width={498} height={359} alt="" ></Image>
                        <div className="font-interstate-blackcondensed mt-[60px]">
                        <h2 className="text-black-light font-bold text-[35px] text-center flex flex-col mb-[30px] "><span>Free, open, simple</span></h2>
                        <p className="text-center w-[300px] mt-[10px]"> 
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                        </div>    
                </div>
                <div className="mt-[10px] flex flex-col items-center ">
                    <div className="font-interstate-blackcondensed mt-[10px]">
                    <h2 className="text-black-light font-bold text-[35px] text-center flex flex-col mb-[30px] "><span>Powerful tooling</span></h2>
                    <p className="text-center w-[300px] mt-[10px]"> 
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                    </p>
                    </div>    
                </div>
            </div>

        </>
    )
}
