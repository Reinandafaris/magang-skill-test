import Footer from '../../../components/layouts/Footer';
import Navbar from '../../../components/layouts/Navbar/NavUser';
import { PrismaClient } from '@prisma/client';

type Deskripsi = {
  id: number;
  data: string;
};

export default function Home({ deskripsi }: { deskripsi: Deskripsi[] }) {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="tabel-home">
          <table className="table">
            <thead className="table-warning">
              <tr>
                <th className="col-2">#</th>
                <th className="col-7">Deskripsi</th>
                <th className="col-3">Handle</th>
              </tr>
            </thead>
            <tbody>
              {deskripsi.map((deskripsi, index) => (
                <tr key={deskripsi.id}>
                  <th scope="row">{index + 1}</th>
                  <td scope="row-9">{deskripsi.data}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary me-2">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const deskripsi = await prisma.deskripsi.findMany();

  prisma.$disconnect();

  return {
    props: {
      deskripsi,
    },
  };
}
