import { useState } from "react";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import { FaTimes, FaBars } from "react-icons/fa";

import styles from "@/styles/Navbar.module.css";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className={`${roboto_mono.className} ${styles.navbar}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          VO
        </Link>

        <div className={styles.links}>
          <a href="#about"> About </a>
          <a href="#projects"> Projects </a>
          <a href="#experience"> Experience </a>
        </div>

        <div className={styles.toggleButton}>
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            {expandNavbar ? <FaTimes className="closeIcon" /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
