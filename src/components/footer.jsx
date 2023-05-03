import React from 'react';
import { FiMail } from 'react-icons/fi';

const Footer = () => (
  <div className="w-full flex justify-between bg-slate-900 p-5 text-center text-gray-400">
    <div className='mx-4'>
      <p>&copy; 2023 Mos Sukjaroenkraisri. All Rights Reserved.</p>
    </div>
    <div className='mx-4 hover:scale-105 scale-100 duration-500 ease-in-out'>
      <a href="mailto:contactme@suantered.net">
        <FiMail size={25} />
      </a>
    </div>
  </div>
);

export default Footer;
