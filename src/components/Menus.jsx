import logo1 from '../assets/kart-1.png';
import logo2 from '../assets/kart-2.png';
import logo3 from '../assets/kart-3.png';

export default function Menus() {
  return (
    <div className="flex flex-col md:flex-row justify-center mx-auto gap-3 px-4 py-6">
      
      <div className="relative w-full md:w-auto">
        <img src={logo1} alt="logo" className="rounded-xl w-full md:w-auto" />
        <div className="absolute inset-9 flex flex-col gap-1">
          <p className="font-bold text-6xl leading-[72px] font-quattrocento text-white">
            Özel <br /> Lezzetus
          </p>
          <p className="font-semibold text-lg text-white font-barlow">
            Position:Absolute Acı Burger
          </p>
          <button className="font-barlow font-semibold text-sm border-inherit p-1 lg:p-3 rounded-[50px] mt-6 bg-white max-w-1/3 text-red-600">
            SİPARİŞ VER
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto">
        
        <div className="relative w-full md:w-auto">
          <img src={logo2} alt="logo" className="rounded-xl w-full md:w-auto" />
          <div className="absolute inset-6">
            <p className="text-white font-barlow font-semibold text-2xl lg:text-3xl">
              Hackathlon <br /> Burger Menü
            </p>
            <button className="font-barlow font-semibold text-xs border-inherit p-1 lg:p-3 px-3 lg:px-7 rounded-[50px] mt-3 lg:mt-6 bg-white max-w-1/3 text-red-600">
              SİPARİŞ VER
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-auto">
          <img src={logo3} alt="logo" className="rounded-xl w-full md:w-auto" />
          <div className="absolute inset-6">
            <p className="font-barlow font-semibold text-3xl text-black">
              <span className="text-red-500">Çoooook</span> hızlı <br />
              npm gibi kurye
            </p>
            <button className="font-barlow font-semibold text-xs border-inherit p-1 lg:p-3 px-2 lg:px-7 rounded-[50px] mt-3 lg:mt-6 bg-white max-w-1/3 text-red-600">
              SİPARİŞ VER
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
