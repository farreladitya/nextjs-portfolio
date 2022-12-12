import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Farrel | Resume</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Farrel Istihsan Aditya</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/farrelistihsan/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href="https://github.com/farreladitya" target="_blank" rel="noreferrer">
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Data Enthusiast <span className="px-1">|</span> Web Development <span className="px-1">|</span> Machine Learning
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Data Enthusiast</p>
            <p className="py-2">Web Development</p>
            <p>Machine Learning</p>
          </div>
        </div>
        <p>
          I&apos;am currently a third-year Information Systems major at Sepuluh Nopember Institute of Technology with prior internship, student study service experience and hackathon participant as backend developer Seeking for a software
          engineer internship especially at backend developer and data scientist to enrich my experience in the field of data science, web developer and machine learning I&apos;am a self-learner and on-time person with leadership experience
          through my activities in university which improves my communication skil
        </p>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Drafta Indonesia</span>
          </p>
          <p className="py-1 italic">Front-End Web Developer (02/2022 - Now)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Ensured comprehensive responsive UI layouts with understanding of HTML, CSS, JavaScript, Next JS, Tailwind CSS.</li>
            <li>Troubleshoot issues and concerns, configure operation and analytic plugins, and design changes as needed.</li>
            <li>Developing Web‑based design from figma prototype design.</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Student Study Service ITS</span>
          </p>
          <p className="py-1 italic">Back-End Web Developer (02/2022 - 10/22)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Converting user research data into a website database</li>
            <li>Developing database for website</li>
            <li>Technologies used : PHP, Laravel, MySQL, Javascript</li>
            <li>Develop a website www.cariikan.com which is engaged in the maritime sector and facilitates the relationship between fish sellers and buyers</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Himpunan Mahasiswa Sistem Informasi ITS</span>
          </p>
          <p className="py-1 italic">Human Resource Development Staff (01/2022 - 12/2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Experienced in communication and building relationship among Information Systems Student</li>
            <li>Analyze student talent interest mapping to design the right student development</li>
            <li>Coordinating with steering and instructor committe related to the implementation of regeneration</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Information Systems Expo! 2022</span>
          </p>
          <p className="py-1 italic">Head of Public Relation (01/2022 - 11/2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Experienced in communication and managing all relationships with outside parties</li>
            <li>Designing promotional strategies such as roadshow to high schools in Indonesia</li>
            <li>Helps increase participant from Surabaya over 60%</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Hackathon in BCA 2021</span>
          </p>
          <p className="py-1 italic">Back-End Developer (12/2021 - 04/2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Chosen as one of the semi‑finalists who received an offer to work at BCA</li>
            <li>Technologies used : Java, Spring Boot, SQL, HTML, CSS, Javascript, Bootstrap</li>
            <li>Develop a product management website which is store the product and product category information</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
