  import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
       <h1 className="text-4xl font-bold">R<span className="text-gray-300">S</span></h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rahul-singh-025939359/"
          target="_blank"
          rel="noopener norferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rahul8279"
          target="_blank"
          rel="noopener norferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="htttp://www.instagram.com"
          target="_blank"
          rel="noopener norferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Header;
