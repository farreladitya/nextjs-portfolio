import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid ">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">Services</p>
        <h2 className="pt-4">What I Offer</h2>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-3 bg-white  flex-1">
            <Image src={design} width={100} height={100} />
            <h3 className="text-lg text-[#5651e5] pt-8 pb-2 font-bold ">Analyze your data</h3>
            <p className="text-gray-700 py-2 ">Turn your complex datasets into actionable insight for decision making</p>
            <h4 className="py-4 text-[#5651e5] font-bold">Tools</h4>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Power BI</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Tableau</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-3 bg-white  flex-1">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg text-[#5651e5] pt-8 pb-2 font-bold ">Code your dream project</h3>
            <p className="text-gray-700 py-2 ">Do you have an idea for your next great website? Lets make it a reality.</p>
            <h4 className="py-4 text-[#5651e5] font-bold">Tools</h4>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Next.Js/React</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Spring Boot</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">MySQL</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Laravel</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Tailwind</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-3 bg-white  flex-1">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg text-[#5651e5] pt-8 pb-2 font-bold ">Improve Performance</h3>
            <p className="text-gray-700 py-2 ">
              Unlock the value of your data with <span className="text-[#5651e5]">Machine Learning</span> to improve operation
            </p>
            <h4 className="py-4 text-[#5651e5] font-bold">Tools</h4>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Python</p>
            <p className="text-gray-700 font-semibold py-1 dark:text-gray-800">Tensorflow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
