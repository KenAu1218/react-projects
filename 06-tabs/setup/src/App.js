// import React, { useState, useEffect } from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";
// // ATTENTION!!!!!!!!!!
// // I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tabs-project";
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(0);

//   const fetchJobs = async () => {
//     const reponse = await fetch(url);
//     const newJobs = await reponse.json();
//     setJobs(newJobs);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   if (loading) {
//     return (
//       <section className="section loading">
//         <h1>Loading...</h1>
//       </section>
//     );
//   }

//   const { company, dates, duties, title } = jobs[value];

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>experience</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="jobs-center">
//         {/* btn container */}
//         <div className="btn-container">
//           {jobs.map((item, index) => {
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setValue(index)}
//                 className={`job-btn ${index === value && "active-btn"}`}
//               >
//                 {item.company}
//               </button>
//             );
//           })}
//         </div>
//         {/* job info */}
//         <article className="job-info">
//           <h3>{title}</h3>
//           <h4>{company}</h4>
//           <p className="job-date">{dates}</p>
//           {duties.map((duty, index) => {
//             return (
//               <div key={index} className="job-desc">
//                 <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
//                 <p>{duty}</p>
//               </div>
//             );
//           })}
//         </article>
//       </div>
//       <button type="button" className="btn">
//         more info
//       </button>
//     </section>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [indexs, setIndexs] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAJob = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    getAJob();
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  const { title, dates, duties, company } = jobs[indexs];

  return (
    <section className="section">
      <div className="title">
        <h2>
          Experience<div className="underline"></div>
        </h2>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setIndexs(index)}
                class={`job-btn ${indexs == index && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h2>{title}</h2>
          <h4>{company}</h4>
          <h3 className="job-date">{dates}</h3>

          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <span>
                  <FaAngleDoubleRight className="job-icon" />
                </span>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
