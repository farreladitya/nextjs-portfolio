import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="mx-auto bg-gradient-to-b from-[#5651e5] rounded-full w-40 h-40 mt-8 relative overflow-hidden md:h-52 md:w-52">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <h1 className="py-4 text-[#5651e5]">Farrel Istihsan Aditya</h1>
          <h1 className="py-2 text-gray-700">Information Systems ITS 2020</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">Seeking for a data analyst internship to enrich my experience in the field of data science and machine learning.</p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="www.linkedin.com/in/farrelistihsan" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/farreladitya" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
