import React from 'react';

const Footer = () => (
  <div className="py-4 flex flex-col gap-2 text-center text-lg px-4">
    <span>Made with ❤️ by Jk</span>
    <div className="flex justify-center gap-4">
      <a href="https://www.linkedin.com/in/ohyajk/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin fa-xl" />
      </a>
      <a href="https://github.com/ohyajk" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github fa-xl" />
      </a>
      <a href="https://www.ohyajk.me/" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-globe fa-xl" />
      </a>
    </div>
  </div>
);

export default Footer;
