import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function NavLink({ link, closeMobileNav }) {
  const handleClick = (e) => {
    e.preventDefault();
    closeMobileNav();

    const target = document.getElementById(link.id);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 300;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = progress < duration / 2
        ? 2 * Math.pow(progress / duration, 2)
        : 1 - Math.pow(-2 * progress / duration + 2, 2) / 2;

      window.scrollTo(0, startPosition + easedProgress * distance);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <a onClick={handleClick} href={`#${link.id}`} className="tab-button">
        {link.title}
      </a>
    </>
  );
}


export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const menuRef = useRef(null);

  function closeMobileNav() {
    setShowNav(false);
  }

  function toggleNav() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.scrollBehavior = "smooth";
  
    return () => {
      document.documentElement.style.scrollBehavior = "unset";
      document.body.style.scrollBehavior = "unset";
    };
  }, []);
  

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "unset";
      document.body.style.scrollBehavior = "unset";
    };
  }, []);

  const links = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div className="topbar">
      <div onClick={toggleNav} className="nav-toggler py-2">
        <RxHamburgerMenu size={40} className="text-white" />
      </div>
      <div ref={menuRef} className={`tabs ${showNav && "mobile-tabs"}`}>
        {links.map((link, index) => (
          <React.Fragment key={link.id}>
            <NavLink link={link} closeMobileNav={closeMobileNav} />
            {index !== links.length - 1 && showNav && (
              <div className="h-[0.5px] bg-gray-600 w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
