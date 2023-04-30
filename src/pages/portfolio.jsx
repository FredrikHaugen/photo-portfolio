import { useState } from 'react';
import { Modal, Box } from '@material-ui/core';
import { FaUnsplash } from 'react-icons/fa';

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    handleOpen();
  };

  return (
    <div className="p-12 py-24 h-auto bg-slate-900" id="portfolio">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        Portfolio
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projects.map((proj) => (
          <div key={proj.id} className="p-4 shadow-md space-y-4 bg-white">
            <div
              className="h-[20vh] relative cursor-pointer"
              onClick={() => openModal(proj.img)}
            >
              <img
                loading="lazy"
                alt=""
                src={proj.img}
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
            </div>
            <div className="flex justify-end space-x-4 items-center opacity-75">
              <p className="text-slate-900 text-sm font-bold pr-[2%]">
                {proj.title}
              </p>
              {proj.links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-5 cursor-pointer text-2xl text-slate-900 flex items-center hover:text-slate-500 ease-in-out duration-500"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeOnOverlayClick={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
          border: "none",
        }}
        onClick={handleClose}
      >
        <Box
          sx={{
            p: 2,
            boxShadow: "none",
          }}
        >
          <img
            src={selectedImg}
            alt=""
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              overflow: "hidden",
              display: "block",
              margin: "auto",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}


const projects = [
  {
    title: 'San Francisco, CA, USA',
    img: '/https://images.unsplash.com/photo-1682421231288-ffbc22975c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaUnsplash/>,
        link: 'https://unsplash.com/photos/JHkacuHHtxM',
      },
    ]
  },
  {
    title: 'Los Angeles, CA, USA',
    img: 'https://images.unsplash.com/photo-1667643727136-bbed174324e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
    links: [
      {
        icon: 
          <FaUnsplash />,
        link: 'https://unsplash.com/photos/oExqljF6dRo',
      },
    ],
  },
  {
    title: 'Las Vegas Strip, NV, USA',
    img: 'https://images.unsplash.com/photo-1664020375387-d4c3ebd68755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaUnsplash/>,
        link: 'https://unsplash.com/photos/D5pNnmegmbU',
      },
    ],
  },
  {
    title: 'Los Angeles, CA, USA',
    img: 'https://images.unsplash.com/photo-1660737793001-715a6bc338d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaUnsplash/>,
        link: 'https://unsplash.com/photos/8kmCsp2yyU4',
      },
    ],
  },
  {
    title: 'Los Angeles, CA, USA',
    img: 'https://images.unsplash.com/photo-1655880931886-e5817c640ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    links: [
      {
        icon: <FaUnsplash/>,
        link: 'https://unsplash.com/photos/jIaZYNwo76I',
      },
    ],
  },
  {
    title: 'Los Angeles, CA, USA',
    img: 'https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
    links: [
      {
        icon: <FaUnsplash/>,
        link: 'https://unsplash.com/photos/vO2XxMeYmnY',
      },
    ],
  },
];
