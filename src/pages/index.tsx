import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/layouts/Navbar/NavUser';
import Footer from '../../components/layouts/Footer';
import herologo from '../../public/herologo.png';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skill Test</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
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
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script>
      </main>
    </>
  );
}
