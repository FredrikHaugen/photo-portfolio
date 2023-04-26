import React from 'react';
import { FaUnsplash, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="p-12 py-24 h-auto bg-slate-100" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={"https://images.unsplash.com/profile-1661170419611-007ec2432a11?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"} className="rounded-full h-52 w-52 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">My name is </span>
          <div className="text-cyan-500 text-4xl font-bold">Mos Sukjaroenkraisri</div>
          <div className="text-xl text-gray-500 font-semibold">I have a deep passion for urban and landscape photography</div>
          <div className="font-light text-gray-400">
          As a passionate photographer, I am constantly seeking out new opportunities to capture the world through my lens. Whether I'm exploring the great outdoors or photographing candid moments of people, my goal is to convey the beauty and complexity of life through my work. I am grateful for the support of those who have encouraged me on this journey, and I value each and every credit given to me for my photography. If you're interested in seeing more of my work, please check out my Instagram page: @sauntered.globe.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full hover:scale-105 ease-in-out duration-500"
              >
                { link.icon }
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const social = [
  {
    icon: <FaUnsplash size={40}/>,
    link: 'https://unsplash.com/@sauntered_globe',
  },
  {
    icon: <FaInstagram size={40}/>,
    link: 'https://instagram.com/sauntered.globe?igshid=YmMyMTA2M2Y=',
  }
];
