import Image from "next/image"
export default function Main(){
    return(
        <>
           <div className="flex flex-col font-interstate-blackcondensed items-center ">
                <div className=" text-black-light font-bold sm:text-[50px] text-[30px] mb-[0px] max-md:mb-[px] sm:mb-[100px] mt-[30px] pt-[50px]">Designed for the future</div>
                <div className="flex max-md:flex-col relative max-md:items-center sm:self-start sm:h-[1000px] sm:min-h-[1000] sm:pl-[300px] sm:gap-[500px]    w-full bg-center  ">
                    <div className="sm:self-start sm:justify-self-cente mt-[50px] sm:mt-[150px] ">
                            <Image className=" sm:hidden order-3 mb-[50px]" src="/assets/images/illustration-editor-mobile.svg" alt="illustration" width={498} height={359} ></Image>
                            <Image className=" max-md:hidden absolute order-3 left-[1000px] top-[-100px] min-h-882 min-w-925" src="/assets/images/illustration-editor-desktop.svg" alt="illustration" width={925} height={882} ></Image>
                        <div className="flex flex-col max-md:items-center">  
                            <h2 className="text-black-light font-bold text-[30px] sm:text-[40px] max-md:text-center max-md:flex  max-md:flex-col mb-[30px] "><span>Introducing an</span><span className="-mt-[15px]"> extensible editor</span></h2>
                            <p className="max-md:text-center w-[300px] sm:w-[400px] sm:text-[20px] mt-[10px] ">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                            </p>
                      
                            <div className="font-interstate-blackcondensed sm:mt-[20px]">
                                <h2 className="text-black-light font-bold text-[30px] sm:text-[40px] max-md:text-center max-md:flex  max-md:flex-col mb-[30px] "><span>Robust Content</span><span className="-mt-[15px]"> management</span></h2>
                                <p className="max-md:text-center w-[300px] sm:w-[400px] sm:text-[20px] mt-[10px]"> 
                                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
                <Image src={"/assets/images/illustration-phones.svg"} width={552} height={579} alt="phones" className="max-md:mt-[60px] sm:hidden -mb-[150px] sm:-mb-[430px] z-20 sm:self-start"></Image>
                <div className="flex max-md:flex-col h-[750px] sm:h-[500px] w-full rounded-bl-[100px] rounded-tr-[100px] bg-bg-purple overflow-hidden relative items-center justify-center sm:gap-[50px]  ">
                    <Image src={"/assets/images/bg-pattern-circles.svg"} width={600} height={600} alt="circles" className=" absolute max-md:top-[-190px] sm:left-[270px] max-w-none z-0 "></Image>
                    <Image src={"/assets/images/illustration-phones.svg"} width={552} height={579} alt="phones" className=" z-20 sm:self-start overflow-visible max-md:hidden   "></Image>
                    <div className="z-10  max-md:text-center mt-[130px] justify-self-center">   
                        <h2 className="text-white font-bold text-[50px] text-center max-md:flex max-md:flex-col mb-[30px]  "><span>State of the art</span><span className="max-md:-mt-[15px]"> Infrastructure</span></h2>
                        <p className="max-md:text-center max-md:w-[230px] w-[400px] text-[18px] mt-[10px] font-medium text-white scale-x-110 ">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
                    <div className="sm:self-end sm:mr-[250px] mt-[150px] sm:flex sm:gap-[50px]   ">
                            <Image className=" max-md:hidden sm:-mt-[100px] sm:self-start  min-h-882 min-w-925" src="/assets/images/illustration-editor-desktop.svg" alt="illustration" width={925} height={882} ></Image>
                            <div>
                                <div className="font-interstate-blackcondensed ">
                                    <h2 className="text-black-light font-bold text-[30px] sm:text-[40px] max-md:text-center max-md:flex  max-md:flex-col mb-[30px] "><span>Free, Open, Simple</span></h2>
                                    <p className="max-md:text-center w-[300px] sm:w-[400px] sm:text-[20px] mt-[10px]"> Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                                    </p>
                                </div>
                                < div className="font-interstate-blackcondensed mt-[60px]">
                                    <h2 className="text-black-light font-bold text-[30px] sm:text-[40px] text-center max-md:flex  max-md:flex-col mb-[30px] "><span>Powerful Tooling</span></h2>
                                    <p className="text-center w-[300px] sm:w-[400px] sm:text-[20px] mt-[10px]"> 
                                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                                    capable of producing even the most complicated sites.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    )
}
