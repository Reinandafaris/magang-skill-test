import { useState } from 'react';
import NavAdmin from '../../../../components/layouts/Navbar/NavAdmin';
import axios from 'axios';

const Index = () => {
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/addDeskripsi', { deskripsi });
    setDeskripsi('');
  };

  return (
    <>
      <div className="d-flex">
        <NavAdmin />

        <div className="wrapper">
          <div className="wrapper2">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a Description here"
                id="floatingTextarea2"
                style={{ height: 100, width: 503 }}
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
              <label htmlFor="floatingTextarea2">Deskripsi</label>
            </div>
          </div>
          <div
            onClick={handleSubmit}
            className="btn btn-primary button-submit">
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
