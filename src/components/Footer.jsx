import { Roboto_Mono } from "next/font/google";
import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin } from "react-icons/gr";

import styles from "@/styles/Footer.module.css";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={`${roboto_mono.className} ${styles.footer}`}>
      <div className={styles.socialMedia}>
        <a
          href="https://www.linkedin.com/in/victor-okunoye-96341a1b1"
          rel="noreferrer noopener" // open social media in a new page
          target="_blank"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://www.instagram.com/ovs_classic/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GrInstagram />
        </a>
        <a
          href="https://twitter.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GrTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GrFacebook />
        </a>
      </div>
      <p> &copy; 2023 okunoyevictor@gmail.com</p>
    </div>
  );
};

export default Footer;
