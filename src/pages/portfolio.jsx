import React from 'react';
import { FaBeer } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className=" bg-slate-900 relative overflow-hidden h-auto" id="portfolio">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Portfolio
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
  {projects.map((proj) => {
    return (
      <div className="p-4 shadow-md space-y-4 bg-white">
        <div className="h-[20vh] relative">
          <img loading='lazy' alt="" src={proj.img} className="absolute inset-0 object-cover object-center w-full h-full" />
        </div>
        <div className="flex justify-end space-x-4 items-center opacity-40">
          {proj.links.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}

const projects = [
  {
    title: '',
    details: '',
    img: 'https://images.unsplash.com/photo-1682421231288-ffbc22975c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaBeer/>,
        link: '',
      },
      {
        icon: <FaBeer/>,
        link: '',
      },
    ]
  },
  {
    title: '',
    details: '',
    img: 'https://images.unsplash.com/photo-1667643727136-bbed174324e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
    links: [
      {
        icon: 
          <FaBeer />,
        link: '',
      },
    ],
  },
  {
    title: '',
    details:
      '',
    img: 'https://images.unsplash.com/photo-1664020375387-d4c3ebd68755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaBeer/>,
        link: '',
      },
      {
        icon: <FaBeer/>,
        link: '',
      },
    ],
  },
  {
    title: '',
    img: 'https://images.unsplash.com/photo-1660737793001-715a6bc338d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    details: "",
    links: [
      {
        icon: <FaBeer/>,
        link: '',
      },
      {
        icon: <FaBeer/>,
        link: '',
      },
    ],
  },
];
