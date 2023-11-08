import NextImage from 'next/image';
import Footer from '../../../components/layouts/Footer';
import Navbar from '../../../components/layouts/Navbar/NavUser';
import { PrismaClient } from '@prisma/client';
import type { Image } from '@prisma/client';

export default function Gallery({ image }: { image: Image[] }) {
  return (
    <>
      <Navbar />
      <div className="wrapper-image">
        {image.map((image) => (
          <div
            key={image.id}
            className="card">
            <NextImage
              src={image.url}
              width={200}
              height={100}
              alt={`Image ${image.id}`}
              className="card-img-top cardz"
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const image = await prisma.image.findMany();

  prisma.$disconnect();

  return {
    props: {
      image,
    },
  };
}
