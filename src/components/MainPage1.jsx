import React from 'react';
import banner from '../assets/home-banner.png';
import { useNavigate } from 'react-router-dom';

export default function MainPage1() {

   const navigate = useNavigate();

  function handleClick() {
    navigate('/form'); 
  }


  return (
    <div className="h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat text-center" style={{ backgroundImage: `url(${banner})` }}>
      <p className='font-londrina-solid text-white pt-20 text-3xl pb-5 sm:pt-14 md:pt-17 lg:pt-10 sm:pb-3 md:pb-1 lg:pb-0 sm:text-3xl md:text-4xl lg:text-5xl'>Teknolojik Yemekler</p>
      <p className='pt-15 font-satisfy text-3xl text-[#FDC913] hidden md:block lg:block'>fırsatı kaçırma</p>
      <h1 className='font-roboto-condensed font-light text-[50px]/[60px] text-white text-center tracking-[1.5px] lg:text-[86px]/[92px]'>
        KOD{' '}
        <br className="block md:hidden lg:hidden" />
        ACIKTIRIR<br />
        PIZZA,{' '}
        <br className="block md:hidden lg:hidden" />
        DOYURUR</h1>
      <button
        className='font-barlow font-semibold text-lg/[56px] border-inherit px-10 lg:px-20 rounded-[50px] mt-6 bg-[#FDC913]'
        onClick={handleClick}
      >
        ACIKTIM
      </button>
    </div>
  );
}
