
import {  useState } from 'react';
import "../Stockscomponents/Stockimages.css"
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Stockimages() {



   const [file, setFile] = useState();
   const handleFile = (e) => {
    setFile(e.target.files[0])
   }

    const handleUpload = () =>{
      const formdata = new FormData();
      formdata.append('image', file)
      axios.post('http://localhost:3001/upload', formdata)
      .then(res => {
        if (res.data.status === "success") {

        } else console.log("Failed")

      })
      .catch(err => console.log(err));
    }

  return (

    <div className=''>
      <input type="file" onChange={handleFile}/>
      <Button className='' onClick={handleUpload}>Upload</Button>
    </div>

  );
}

export default Stockimages