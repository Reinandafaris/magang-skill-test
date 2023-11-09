import Image from 'next/image';
import Footer from '../../../components/layouts/Footer';
import Navbar from '../../../components/layouts/Navbar/NavUser';
import herologo from '../../../public/herologo.png';

const index = () => {
  return (
    <div className="warapper-test">
      <Navbar />
      <div className="test-main-left">
        <h1>Company Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum rerum tenetur quibusdam voluptatem, temporibus cumque excepturi id molestias totam?</p>
      </div>
      <div className="test-main-right">
        <Image
          src={herologo}
          alt="logo"
        />
      </div>
      <Footer />
    </div>
  );
};

export default index;
