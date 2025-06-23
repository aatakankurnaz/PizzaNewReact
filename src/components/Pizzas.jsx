import pic1 from "../assets/food-1.png"
import pic2 from "../assets/food-2.png"
import pic3 from "../assets/food-3.png"


export default function () {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="border border-white bg-white rounded-[12px] pb-7">
        <img src={pic1} alt="pic" className="w-74 p-7" />
        <div className="px-5">
          <p className="font-barlow font-semibold text-xl">Terminal Pizza</p>
          <div className="flex pt-3 place-content-between">
            <p>4.9</p>
            <div className="flex gap-15">
              <p>(200)</p>
              <p className="font-bold">60₺</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white bg-white rounded-[12px]">
        <img src={pic2} alt="pic" className="w-74 p-7" />
        <div className="px-5">
          <p className="font-barlow font-semibold text-xl">Position Absolute Acı Pizza</p>
          <div className="flex pt-3 place-content-between">
            <p>4.9</p>
            <div className="flex gap-15">
              <p>(200)</p>
              <p className="font-bold">60₺</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white bg-white rounded-[12px]">
        <img src={pic3} alt="pic" className="w-74 p-7" />
        <div className="px-5">
          <p className="font-barlow font-semibold text-xl">useEffect Tavuklu Burger</p>
          <div className="flex pt-3 place-content-between">
            <p>4.9</p>
            <div className="flex gap-15">
              <p>(200)</p>
              <p className="font-bold">60₺</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
