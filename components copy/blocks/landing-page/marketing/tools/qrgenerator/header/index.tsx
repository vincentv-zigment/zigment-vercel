import Image from 'next/image';
// import logo from '../assets/tools/qrgenerator/logo.png';
import logo from '@/assets/images/tools/qrgenerator/logo.png';

const Header: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <Image src={logo} alt="QR Code Generator Logo" width={48} height={48} />
      <span className="text-white text-xl font-bold">QR Code Generator</span>
    </div>
  );
};

export default Header;
