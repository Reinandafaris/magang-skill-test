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
        <p>Aplikasi Perusahaan Yang Dapat Meng-input Data Dan Dapat Tersimpan Kedalam Database, Data Yang Tersimpan Di Dalam Database Dapat Dimunculkan Kepada User Aplikasi Melalui Fitur Admin.</p>
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
