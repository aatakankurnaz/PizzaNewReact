import Menus from "./Menus";
import NavBar2 from "./NavBar2";
import Pizzas from "./Pizzas";

export default function MiddleContainer() {
    return (
        <div className="bg-[#FAF7F2] py-15 flex flex-col gap-5 items-center">
            <Menus />
            <div className="flex flex-col items-center gap-3 mt-10">
                <p className="font-satisfy text-3xl mt-2 text-red-700">en çok paketlenen menüler</p>
                <p className="font-barlow font-semibold text-[40px] text-center">Acıktıran <br className="block md:hidden lg:hidden" /> Kodlara Doyuran<br className="block md:hidden lg:hidden" />
                 Lezzetler</p>
            </div>
            <NavBar2 />
            <Pizzas />
        </div>
    )
}