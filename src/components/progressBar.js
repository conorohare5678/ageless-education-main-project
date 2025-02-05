// import React, { useState } from "react";

// function ProgressBar() {
//     const [progress, setProgress] = useState(0);
//     const handleButtonClick = () => {
//         if (progress < 100) {
//             setProgress(progress + 20);
//         }
//     }

//     const getColor = () => {
//         if (progress < 40) {
//             return "#fff";
//         } else if (progress < 70) {
//             return "#ffa500";
//         } else {
//             return "#2ecc71";

//         }
//     }
//     return (
//         <>
//             <div className="progressContainer">
//                 <div className="progress-bar">
//                     <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
//                         {" "}
//                     </div>
//                 </div>
//             </div>
//             <div className="progress-label">
//                 {progress}%
//             </div>
//             <button onClick={handleButtonClick}>progress</button>
//         </>
//     );
// }

// export default ProgressBar;