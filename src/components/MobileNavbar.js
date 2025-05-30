"use client";

import { Menu } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // the nav menu takes the full width and height even if closed, so it prevents clicks through it and it adding pointer events none it cant be opened through clicking the menu, hence adding another menu icon to be clicked to open it
  useEffect(() => {
    if (isOpen) {
      setShowMenu(false); // hide immediately when opening
    } else {
      const timer = setTimeout(() => setShowMenu(true), 500); // show after 0.5s when closing
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {showMenu && (
        <Menu onClick={() => setIsOpen(true)} className="mobile-nav-opener" />
      )}
      <div
        ref={navRef}
        className="mobile-nav-container"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div style={container}>
          <motion.nav animate={isOpen ? "open" : "closed"} initial={false}>
            <motion.div style={background} variants={sidebarVariants} />
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </motion.nav>
        </div>
      </div>
    </>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ isOpen, setIsOpen }) => (
  <motion.ul style={list} variants={navVariants}>
    {[
      { name: "About", path: "/#about" },
      { name: "Services", path: "/#services" },
      { name: "Talents", path: "/#talents" },
      { name: "Contact", path: "/#contact" },
    ].map((i, index) => (
      <MenuItem i={i} key={index} isOpen={isOpen} setIsOpen={setIsOpen} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ i, isOpen, setIsOpen }) => {
  const path = usePathname();
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="motion-li-item"
      style={{
        ...listItem,
        pointerEvents: isOpen ? "auto" : "none", // Disable interactions when closed
      }}
    >
      <Link
        href={i.path}
        className={`${path.startsWith(i.path) ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        {i.name}
      </Link>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="30" height="30" viewBox="0 0 23 23" className="menu-toggler">
      <Path
        stroke="white"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        stroke="white"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke="white"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const container = {
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "stretch",
  flex: 1,
  width: 180,
  top: "10px",
  right: "5%",
  zIndex: "99",
  maxWidth: "100%",
  height: 320,
  backgroundColor: "var(--accent)",
  borderRadius: 10,
  overflow: "hidden",
};

const background = {
  backgroundColor: "#202022",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: 200,
};

const toggleContainer = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  right: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
};

const list = {
  listStyle: "none",
  padding: 25,
  fontSize: "22px",
  margin: 0,
  position: "absolute",
  top: 60,
  right: -100,
  width: 230,
};

const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: 30,
  cursor: "pointer",
};
