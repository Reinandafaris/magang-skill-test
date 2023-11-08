import { useState } from 'react';
import NavAdmin from '../../../../components/layouts/Navbar/NavAdmin';
import axios from 'axios';

export default function Index() {
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/addGallery', { image });
    setImage('');
  };

  return (
    <>
      <div className="d-flex">
        <NavAdmin />

        <div className="wrapper">
          <div className="wrapper2">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Link Image"
                style={{ width: 503 }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <label htmlFor="floatingInput">Link Image</label>
            </div>
          </div>
          <div
            onClick={handleSubmit}
            className="btn btn-primary button-submit">
            Submit
          </div>
          <ul className="list-group">
            <li className="list-group-item"> example link : </li>
            <li className="list-group-item">
              <p>https://images.unsplash.com/photo-1695982206826-970fd4e8e27e?ixid=M3w1MjUxMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk0MDc0NTJ8&ixlib=rb-4.0.3</p>
            </li>
            <li className="list-group-item">
              <p>https://images.unsplash.com/photo-1699192693656-d7fb172ff07f?ixid=M3w1MjUxMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk0MDc0NTJ8&ixlib=rb-4.0.3</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
