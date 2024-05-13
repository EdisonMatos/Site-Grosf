import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/Logo.webp";
import ListGroupProducts from "../sectionElements/ListGroupProducts";
import SidebarProducts from "../sectionElements/SidebarProducts";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarSectionProducts() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroupProducts, setShowListGroupProducts] = useState(true);
  const [showSidebarProducts, setShowSidebarProducts] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon(!showMenuIcon);
      setShowSidebarContent(!showSidebarContent);
      if (showSidebarProducts) {
        setTimeout(() => {
          setShowSidebarProducts(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebarProducts(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroupProducts(false);
    } else {
      setShowListGroupProducts(true);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebarProducts(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`fixed z-20 top-0 w-full bg-white bg-opacity-0 ${
          scrolling
            ? "bg-opacity-100 shadow-lg bg-transition-opacity duration-1000"
            : ""
        }`}
      >
        <Navbar>
          <Link
            to="/"
            onClick={() => handleLinkClick("home", 0)}
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={Logo} alt="Logo" className={`mr-24 ${
                scrolling ? "h-auto max-h-14 transition-all duration-1000" : "h-auto max-h-28 transition-all duration-1000"
              } tablet3:mb-0`} />
          </Link>
          <button
            onClick={toggleSidebar}
            className="relative tablet2:hidden"
          >
            {showMenuIcon ? (
              <Menu size={32}
                className={` ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            ) : (
              <X size={32}
                className={` ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              />
            )}
          </button>
          {showListGroupProducts ? <ListGroupProducts /> : null}
        </Navbar>
        <div
          className={`animate-${
            showSidebarProducts ? "slide-down block" : "slide-up hidden"
          }`}
          ref={sidebarRef}
        >
          {showSidebarProducts ? (
            <SidebarProducts
              showSidebar={showSidebarContent}
              handleCloseSidebar={handleCloseSidebar}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}