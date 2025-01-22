import React from 'react';
import workout from './workout.svg';
import music from './music.svg';
import vehicle from './vehicle.svg';

const Projects = () => {
  return (
    <div id="projects" className="block justify-center ">
      <div className="project max-w-[75vh] bg-white border border-gray-200 mx-auto my-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a className='imageLink' href="https://animated-maamoul-ad9082.netlify.app">
        <img className="center rounded w-full" src={workout} alt="" />
        </a>
        <div className="content p-5">
          <a href="https://animated-maamoul-ad9082.netlify.app">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Workout Buddy</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maintain your daily exercise record with the app</p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Features- Login ,logout ,Add workout, Delete workout for each users<br/> Technology used: React ,MongoDB, Express, Nodejs, JWT Token, AWS, Atlas </p>
        </div>
        <div>
          <a href="https://animated-maamoul-ad9082.netlify.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to app         
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="project max-w-[75vh] bg-white border border-gray-200 mx-auto my-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a className='imageLink' href="https://musicgenre.onrender.com/">
        <img className="center rounded w-full" src={music} alt="" />
        </a>
        <div className="content p-5">
          <a href="https://musicgenre.onrender.com/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music genre prediction app</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Features- Predicting the genre of music based on age and gender  <br/> Technology used: Python, PIP, Numpy, Pandas, Scikit-learn, Decision tree, Jupyter Notebook, Streamlit, AWS </p>
        </div>
        <div>
          <a href="https://musicgenre.onrender.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to app         
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="project max-w-[75vh] bg-white border border-gray-200 mx-auto my-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <a className='imageLink' href="https://github.com/sivasi/Detection-of-Overspeeding-">
          <img className="center rounded w-full" src={vehicle} alt="" />
        </a>
        <div className="content p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Overspeeding Vehicle Detection</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Detection of Overspeeding vehicle from CCTV Recording</p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Features-Moving object Detection, Vehicle Detection, Speed estimation <br/> Technology used: OpenCV, Dlib, Numpy, VS code, Github, Python </p>
        </div>
        <div>
          <a href="https://github.com/sivasi/Detection-of-Overspeeding-" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get the code      
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Projects;
