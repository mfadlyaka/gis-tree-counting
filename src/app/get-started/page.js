// 'use client'

// import { useEffect, useRef } from 'react';
// import data from './prediction.json'

// export default function GetStarted() {
//     useEffect(() => {
//         const image = document.getElementById("image");
//         const canvas = document.getElementById("canvas");
//         const ctx = canvas.getContext("2d");

//         // Set canvas dimensions to match the image
//         canvas.width = image.width;
//         canvas.height = image.height;

//         // const predictions = [
//         //     {
//         //         "x": 4590.5,
//         //         "y": 2322.0,
//         //         "width": 297.0,
//         //         "height": 236.0,
//         //         "confidence": 0.5494790077209473,
//         //         "className": "pohonsawit"
//         //     },
//         //     {
//         //         "x": 4085.5,
//         //         "y": 2983.5,
//         //         "width": 387.0,
//         //         "height": 301.0,
//         //         "confidence": 0.5445661544799805,
//         //         "className": "pohonsawit"
//         //     }
//         // ];

//         const predictions = data.predictions

//         console.log(predictions)

//         // Draw rectangles on the canvas
//         predictions.forEach(prediction => {
//             const x = prediction.x;
//             const y = prediction.y;
//             const width = prediction.width;
//             const height = prediction.height;
//             const classLabel = prediction.className;

//             ctx.strokeStyle = "red";
//             ctx.lineWidth = 2;
//             ctx.strokeRect(x, y, width, height);

//             // Add text label
//             // ctx.fillStyle = "red";
//             // ctx.font = "14px Arial";
//             // ctx.fillText(`${classLabel}: ${prediction.confidence.toFixed(1)}`, x, y - 10);
//         });
//     }, []);

//     return (
//         <div className="pt-20">
//             <div>
//                 <div style={{ position: "relative", display: "inline-block" }}>
//                     <img id="image" src="/assets/medium/c3.png" alt="Image" style={{ width:'100%', height: '100%', maxWidth: "100%" }}/>
//                     <canvas id="canvas" style={{ position: "absolute", top: 0, left: 0 }}></canvas>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // 'use client'

// // import "./get-started.css"
// // import { useEffect } from "react";

// // export default function GetStarted() {
// //     useEffect(() => {
// //         retrieveDefaultValuesFromLocalStorage();
// //         setupButtonListeners();
// //     }, []);

// //     const infer = () => {
// //         // ... Implement infer function logic
// //     };

// //     const retrieveDefaultValuesFromLocalStorage = () => {
// //         // ... Implement retrieveDefaultValuesFromLocalStorage function logic
// //     };

// //     const setupButtonListeners = () => {
// //         // ... Implement setupButtonListeners function logic
// //     };

// //     const getSettingsFromForm = (cb) => {
// //         // ... Implement getSettingsFromForm function logic
// //     };

// //     const getBase64fromFile = (file) => {
// //         return new Promise((resolve, reject) => {
// //             const reader = new FileReader();
// //             reader.readAsDataURL(file);
// //             reader.onload = () => {
// //                 resolve(reader.result);
// //             };
// //             reader.onerror = (error) => {
// //                 reject(error);
// //             };
// //         });
// //     };

// //     return (
// //         <main className="pt-20">
// //             <form id="inputForm">
// //                 <div className="header">
// //                 <div className="header__grid">
// //                     <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Indonesia_%28bordered%29.svg/2560px-Flag_of_Indonesia_%28bordered%29.svg.png" alt="Roboflow Inference"/>
// //                     <div>
// //                         <label className="header__label" for="model">Model Name</label>
// //                         <input className="input" type="text" id="model" />
// //                     </div>
// //                     <div>
// //                         <label className="header__label" for="access_token">Access Token</label>
// //                         <input className="input" type="text" id="access_token" />
// //                     </div>
// //                 </div>	
// //             </div>
        
// //             <div className="content">
// //                 <div className="content__grid">
// //                     <div className="col-12-s6-m4" id="method">
// //                         <label className="input__label">Upload Method</label>
// //                         <div>
// //                             <button data-value="upload" id="computerButton" className="bttn left fill active">Upload</button>
// //                             <button data-value="url" id="urlButton" className="bttn right fill">URL</button>
// //                         </div>
// //                     </div>

// //                     <div className="col-12-m8" id="fileSelectionContainer">
// //                         <label className="input__label" for="file">Select File</label>
// //                         <div className="flex">
// //                             <input className="input input--left flex-1" type="text" id="fileName" disabled />							
// //                             <button id="fileMock" className="bttn right active">Browse</button>
// //                         </div>
// //                         <input style={{display: 'none'}} type="file" id="file" />
// //                     </div>

// //                     <div className="col-12-m8" id="urlContainer">
// //                         <label className="input__label" for="file">Enter Image URL</label>
// //                         <div className="flex">
// //                             <input type="text" id="url" placeholder="https://path.to/your.jpg" className="input"/><br/>
// //                         </div>
// //                     </div>
            
// //                     <div className="col-12-m6">
// //                         <label className="input__label" for="classes">Filter Classes</label>
// //                         <input type="text" id="classes" placeholder="Enter className names" className="input"/><br/>
// //                         <span className="text--small">Separate names with commas</span>
// //                     </div>

// //                     <div className="col-6-m3 relative">
// //                         <label className="input__label" for="confidence">Min Confidence</label>
// //                         <div>
// //                             <i className="fas fa-crown"></i>
// //                             <span className="icon">%</span>
// //                             <input type="number" id="confidence" value="50" max="100" accuracy="2" min="0" className="input input__icon"/></div>
// //                         </div>
// //                     <div className="col-6-m3 relative">
// //                         <label className="input__label" for="overlap">Max Overlap</label>
// //                         <div>
// //                             <i className="fas fa-object-ungroup"></i>
// //                             <span className="icon">%</span>
// //                             <input type="number" id="overlap" value="50" max="100" accuracy="2" min="0" className="input input__icon"/></div>
// //                     </div>
// //                     <div className="col-6-m3" id="format">
// //                         <label className="input__label">Inference Result</label>
// //                         <div>
// //                             <button id="imageButton" data-value="image" className="bttn left fill active">Image</button>
// //                             <button id="jsonButton" data-value="json" className="bttn right fill">JSON</button>
// //                         </div>
// //                     </div>
// //                     <div className="col-12 content__grid" id="imageOptions">
// //                         <div className="col-12-s6-m4" id="labels">
// //                             <label className="input__label">Labels</label>
// //                             <div>
// //                                 <button className="bttn left active">Off</button>
// //                                 <button data-value="on" className="bttn right">On</button>
// //                             </div>
// //                         </div>
// //                         <div className="col-12-s6-m4" id="stroke">
// //                             <label className="input__label">Stroke Width</label>
// //                             <div>
// //                                 <button data-value="1" className="bttn left active">1px</button>
// //                                 <button data-value="2" className="bttn">2px</button>
// //                                 <button data-value="5" className="bttn">5px</button>
// //                                 <button data-value="10" className="bttn right">10px</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-12 !-mt-40">
// //                         <button type="submit" value="Run Inference" className="bttn__primary">Run Inference</button>
// //                     </div>
// //                 </div>
// //                 <div className="result" id="resultContainer">
// //                     <div className="divider"></div>
// //                     <div className="result__header">
// //                         <h3 className="headline">Result</h3>
// //                         <a href="#">Copy Code</a>
// //                     </div>
// //                     <pre id="output" className="codeblock">here is your json</pre>
// //                 </div>
// //             </div>
// // 	        </form>
// //         </main>
// //     )
// // }

'use client'

import { useRef } from 'react';  
import axios from 'axios';

export default function getStarted() {

    const fileInputRef = useRef(null);

    const loadImageBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
  
    const handleUpload = () => {
      const selectedFile = fileInputRef.current.files[0];
  
      if (selectedFile) {
        loadImageBase64(selectedFile)
          .then(imageData => {
            axios({
              method: "POST",
              url: "https://detect.roboflow.com/pohonsawit2/7",
              params: {
                api_key: "2PNqpkPLTX6glZUiAPGu"
              },
              data: {
                image: imageData
              },
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
              }
            })
            .then(function(response) {
              console.log(response.data);
            })
            .catch(function(error) {
              console.log(error.message);
            });
          })
          .catch(error => {
            console.log("Error loading image:", error);
          });
      }

    }

    return (
        <main className="pt-20">
             <input type="file" ref={fileInputRef} accept="image/*" />
            <button onClick={handleUpload}>Upload Image</button>
        </main>
    )
}