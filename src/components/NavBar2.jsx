import logo1 from '../assets/1.svg';
import logo2 from '../assets/2.svg';
import logo3 from '../assets/3.svg';
import logo4 from '../assets/4.svg';
import logo5 from '../assets/5.svg';
import logo6 from '../assets/6.svg';

const items = [
  { logo: logo1, text: 'Ramen' },
  { logo: logo2, text: 'Pizza' },
  { logo: logo3, text: 'Burger' },
  { logo: logo4, text: 'French Fries' },
  { logo: logo5, text: 'Fast Food' },
  { logo: logo6, text: 'Soft Drinks' },
];

export default function NavBar() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center md:flex md:gap-4">
      {items.map(({ logo, text }, index) => (
        <div
          key={index}
          className="flex items-center gap-3 font-barlow font-medium text-lg px-4 py-2 border border-white bg-white rounded-[50px]"
        >
          <img src={logo} alt="logo" className="w-9 h-9" />
          <p className="text-black">{text}</p>
        </div>
      ))}
    </div>
  );
}



