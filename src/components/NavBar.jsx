import logo1 from '../assets/1.svg';
import logo2 from '../assets/2.svg';
import logo3 from '../assets/3.svg';
import logo4 from '../assets/4.svg';
import logo5 from '../assets/5.svg';
import logo6 from '../assets/6.svg';

const items = [
  { logo: logo1, text: 'YENİ! Kore' },
  { logo: logo2, text: 'Pizza' },
  { logo: logo3, text: 'Burger' },
  { logo: logo4, text: 'Kızartmalar' },
  { logo: logo5, text: 'Fast Food' },
  { logo: logo6, text: 'Gazlı içecek' },
];

export default function NavBar() {
  return (
    <div className="grid grid-cols-2 gap-x-2 sm:flex sm:justify-center sm:gap-10 py-6">
      {items.map(({ logo, text }, index) => (
        <div
          key={index}
          className="flex items-center gap-2 font-barlow font-semibold text-base sm:text-xl justify-center py-2"
        >
          <img src={logo} alt="logo" className="w-8 sm:w-12" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}




