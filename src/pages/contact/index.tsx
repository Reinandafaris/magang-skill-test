import Footer from '../../../components/layouts/Footer';
import Navbar from '../../../components/layouts/Navbar/NavUser';
import { PrismaClient } from '@prisma/client';
import type { Contact } from '@prisma/client';

export default function Home({ contact }: { contact: Contact[] }) {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="tabel-home rounded-3">
          <table className="table rounded-3">
            <thead className="table-warning rounded-3">
              <tr>
                <th className="col-2">#</th>
                <th className="col">Name</th>
                <th className="col">Email</th>
                <th className="col">Phone</th>
                <th className="col-3">Handle</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((contact, index) => (
                <tr key={contact.id}>
                  <th scope="row">{index + 1}</th>
                  <td scope="row-9">{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
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
  const contact = await prisma.contact.findMany();

  prisma.$disconnect();

  return {
    props: {
      contact,
    },
  };
}
