import React, { useState } from 'react';
import axios from 'axios';

const RoboFlow = () => {
    const [formData, setFormData] = useState({
      image: '',
    });
  
    const loadImageBase64 = (event) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(event);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    
    const handleSubmit = async (event) => {
        const image = await loadImageBase64(fileData);
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://detect.roboflow.com/pohonsawit2/7",
            params: {
                api_key: "2PNqpkPLTX6glZUiAPGu"
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gambar :</label>
          <input type="text" name="image" onChange={handleChange} value={formData.image} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default RoboFlow;