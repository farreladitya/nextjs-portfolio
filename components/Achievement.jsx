import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import visualImg from '../public/assets/certificates/visual.jpeg';
import pythonImg from '../public/assets/certificates/python.jpeg';
import mlImg from '../public/assets/certificates/ml.jpeg';
import bcaImg from '../public/assets/certificates/bca.jpg';
import ProjectItem from './ProjectItem';

const Achievement = () => {
  return (
    <div id="projects" className="w-full mt-10  ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Certifications</p>
        <h2 className="py-4">What I&apos;ve Done</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Belajar Dasar Visualisasi Data" backgroundImg={visualImg} projectUrl="https://www.dicoding.com/certificates/1RXYMJ00KXVM" desc="Learn about how to effectively communicate data-driven ideas and findings" />
          <ProjectItem title="Memulai Pemrograman Dengan Python" backgroundImg={pythonImg} projectUrl="https://www.dicoding.com/certificates/JLX1G44QGZ72" desc="Learn about programming using Python for data exploration" />
          <ProjectItem title="Belajar Machine Learning untuk Pemula" backgroundImg={mlImg} projectUrl="https://www.dicoding.com/certificates/1RXYMJ00KXVM" desc="Learn about machine learning to helps any activity based on data" />
          <ProjectItem title="Semi-Finalist Hackathon in BCA 2021" backgroundImg={bcaImg} projectUrl="/" desc="Chosen as one of the semi-finalists who received an offer to work at BCA" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
