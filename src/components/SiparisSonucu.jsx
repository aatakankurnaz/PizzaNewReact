import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function SiparisSonucu() {
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>Gösterilecek veri yok!</p>;

  return (
    <>
      <div className="h-screen flex flex-col items-center bg-red-600 text-white">
        <p className='font-londrina-solid text-white pt-20 text-3xl pb-5 sm:pt-14 md:pt-17 lg:pt-10 sm:pb-3 md:pb-1 lg:pb-0 sm:text-3xl md:text-4xl lg:text-5xl'>Teknolojik Yemekler</p>
        <p className='pt-15 font-satisfy text-3xl text-[#FDC913] hidden md:block lg:block'>lezzetin yolda</p>
        <h1 className='font-roboto-condensed font-light text-[50px]/[60px] text-white text-center tracking-[1.5px] lg:text-[86px]/[92px]'>
          SİPARİŞ ALINDI</h1>
        <hr className="border-0 h-[1px] bg-white w-1/3 my-10" />

        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold mb-10">{data.pizzaisim}</p>
          <p>Boyut: <b>{data.boyut}</b></p>
          <p>Kalınlık: <b>{data.kalınlık}</b></p>
          <p>Malzemeler: <b>{data.malzemeler.join(", ")}</b></p>
          <p>Adet: <b>{data.sayı}</b></p>

          <p>Not: <b>{data.not.isim} {data.not.soyisim} - {data.not.metin}</b></p>

          <p className="my-10 text-xl">Tutar: <b>{data.tutar} TL</b></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
