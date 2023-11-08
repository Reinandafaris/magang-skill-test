import { useState } from 'react';
import NavAdmin from '../../../../components/layouts/Navbar/NavAdmin';
import axios from 'axios';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/addContact', { name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
      <div className="d-flex">
        <NavAdmin />

        <div className="wrapper">
          <div className="wrapper2">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name"
                style={{ width: 503 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                style={{ width: 503 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingEMail">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name"
                style={{ width: 503 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="btn btn-primary button-submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
