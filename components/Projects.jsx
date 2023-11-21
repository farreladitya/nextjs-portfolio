import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cariikanImg from '../public/assets/projects/cariikan.jpeg';
import tableauImg from '../public/assets/projects/tableau.jpg';
import pythonImg from '../public/assets/projects/python.jpeg';
import draftaImg from '../public/assets/projects/drafta.jpeg';
import powerbiImg from '../public/assets/projects/powerbi.jpeg';
import sekarImg from '../public/assets/projects/sekarwangi.png';
import jujurlyImg from '../public/assets/projects/jujurly.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-10  ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Jujurly Website" backgroundImg={jujurlyImg} projectUrl="#" tech="Next.JS & MongoDB" desc="Easiest way to create and participate in vote" />
          <ProjectItem title="Drafta Website" backgroundImg={draftaImg} projectUrl="#" tech="Next.JS" desc="Make a beautiful landing page to increase customer interaction" />
          <ProjectItem title="Sekarwangi Florist Website" backgroundImg={sekarImg} projectUrl="#" tech="Laravel & MySQL" desc="Increase productivity of Sekarwangi Florist and ease the product management" />
          <ProjectItem title="Cari Ikan Website" backgroundImg={cariikanImg} projectUrl="#" tech="Laravel & MySQL" desc="facilitates the relationship between fish sellers and buyers to enrich information about availability of fish in certain place" />
          <ProjectItem title="Data Visualization" backgroundImg={powerbiImg} projectUrl="/" tech="Power BI" desc="Visualize spreadsheet data to a graph that ease the data analyze with my team" />
          <ProjectItem
            title="Data Analysis"
            backgroundImg={tableauImg}
            projectUrl="https://public.tableau.com/app/profile/nazriyah.deny.tsaniyah2274/viz/WWICases_Kelompok03_KCBB/Group03?publish=yes"
            tech="Tableau"
            desc="Analyze the data to make a decision for future action with my team"
          />
          <ProjectItem title="Image Recognition" backgroundImg={pythonImg} projectUrl="https://colab.research.google.com/drive/1iL6tJQvL9BZyOgB6_NNU7OsL3rFFfbjo?usp=sharing" tech="Python" desc="Show information of the uploaded image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
