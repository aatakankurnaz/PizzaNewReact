import icon1 from "../assets/icon-1.png"
import icon2 from "../assets/icon-2.png"
import icon3 from "../assets/icon-3.png"
import li1 from "../assets/li-0.png"
import li2 from "../assets/li-1.png"
import li3 from "../assets/li-2.png"
import li4 from "../assets/li-3.png"
import li5 from "../assets/li-4.png"
import li6 from "../assets/li-5.png"
import frame from "../assets/frame.png"
export default function () {
    return (
        <>
            <div className=" flex flex-col items-center bg-black ">
                <div className=" flex flex-col lg:flex-row text-white gap-15 my-10">
                    <div className="flex flex-col gap-10">
                        <p className="font-londrina-solid text-5xl flex ">Teknolojik <br /> Yemekler</p>
                        <div className="flex flex-col gap-7">
                            <div className="flex gap-4">
                                <img src={icon1} alt="" className="w-7 h-7" />
                                <p className="text-lg">341 Londonderry Road,<br />
                                    Istanbul Türkiye</p>
                            </div>
                            <div className="flex gap-4">
                                <img src={icon2} alt="" className="w-7 h-7" />
                                <p className="text-lg">aciktim@teknolojikyemekler.com</p>
                            </div>
                            <div className="flex gap-4">
                                <img src={icon3} alt="" className="w-7 h-7" />
                                <p className="text-lg">+90 216 123 45 67</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-17">
                        <p className="font-medium text-lg">Hot Menu</p>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg">Terminal Pizza</p>
                            <p className="text-lg">5 Kişilik Hackathlon Pizza</p>
                            <p className="text-lg">useEffect Tavuklu Pizza</p>
                            <p className="text-lg">Beyaz Console Frosty</p>
                            <p className="text-lg">Testler Geçti Mutlu Burger</p>
                            <p className="text-lg">Position Absolute Acı Burger</p>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col gap-12">
                        <p className="font-medium text-lg">Instagram</p>
                        <div className="flex grid grid-cols-3 gap-3">
                            <img src={li1} alt="" />
                            <img src={li2} alt="" />
                            <img src={li3} alt="" />
                            <img src={li4} alt="" />
                            <img src={li5} alt="" />
                            <img src={li6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white flex justify-center gap-20 lg:gap-188 border-t border-white border-opacity-15 py-10">
                <p>© 2023 Teknolojik Yemekler.</p>
                <img src={frame} alt="" />
            </div>
        </>
    )
}