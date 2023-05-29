import Head from "next/head";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWork, MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypedText from "@/components/TypedText";
import { ProjectList } from "@/helpers/ProjectList";
import styles from "@/styles/Home.module.css";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Okunoye - Frontend Developer</title>
        <meta
          name="description"
          content="Victor Okunoye - Frontend Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={roboto_mono.className}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              Victor <br /> Okunoye
            </h1>

            <TypedText />
          </div>
          <div className={styles.herosimg}>
            <Image src="/assets/contact.svg" alt="" width={300} height={300} />
          </div>
        </div>

        <div className={styles.about} id="about">
          <div className={styles.info}>
            <h2>About Me</h2>
            <p>
              Hi, I&apos;m Victor Okunoye, a frontend developer passionate about
              creating visually appealing and user-friendly websites. I have
              experience with HTML, CSS, JavaScript, React and I&apos;m always
              looking to expand my knowledge. Outside of coding, I enjoy video
              editing and listening to music, which have taught me the
              importance of attention to detail and problem-solving. If
              you&apos;re looking for a passionate frontend developer who is
              committed to collaborating with others and delivering high-quality
              work, let&apos;s connect.
            </p>
            <div className={styles.connect}>
              <h3>Let&apos;s connect!</h3>
              <div className={styles.prompt}>
                <a
                  href="https://www.linkedin.com/in/victor-okunoye-96341a1b1"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:okunoyevictor@gmail.com">
                  <MdOutlineEmail />
                </a>
                <a
                  href="https://github.com/Ovsclassic"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.stack}>
            <h3>My Stack</h3>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>

        <div className={styles.projects} id="projects">
          <h2>My Projects</h2>

          <div className={styles.projectsList}>
            {ProjectList.map((project) => {
              return (
                <div key={project.id}>
                  <a
                    href={project.website}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <div className={styles.projectItem}>
                      <Image
                        src={project.image}
                        alt={`Image for ${project.name}`}
                        fill
                        className={styles.projectImage}
                      />
                    </div>
                  </a>

                  <p>{project.name}</p>
                  <a
                    href={project.githubUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    <FaGithub />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.experience} id="experience">
          <h2>My Experience</h2>

          <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
              className="styles.vertical-timeline-element--education"
              date="2017-2022"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="styles.vertical-timeline-element-title">
                University of Ilorin, Ilorin, Kwara State, Nigeria
              </h3>

              <h4 className="styles.vertical-timeline-element-subtitle">
                Bachelor&apos;s Degree (Second Class Upper)
              </h4>

              <p> History and International Studies </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="styles.vertical-timeline-element--education"
              date="May, 2020"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="styles.vertical-timeline-element-title">
                Google Certification
              </h3>
              <h4 className="styles.vertical-timeline-element-subtitle">
                Fundamentals Of Digital Marketing
              </h4>
              <p> Completed the Google Fundamentals learning program </p>
              <p> Learnt various Google Technologies and SEO tools</p>
              <p> Took Certification Exams</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="styles.vertical-timeline-element--education"
              date="June, 2021"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="styles.vertical-timeline-element-title">
                Codecademy Certification
              </h3>
              <h4 className="styles.vertical-timeline-element-subtitle"></h4>
              <p> Completion of Learn Advanced Javascript, Codecademy, 2021 </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="styles.vertical-timeline-element--education"
              date="2021-2022"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="styles.vertical-timeline-element-title">
                Front End Developer Intern
              </h3>
              <h4 className="styles.vertical-timeline-element-subtitle">
                Internship Training, Codeacademy
              </h4>
              <p>Developed the frontend infrastructure for 10+ projects.</p>
              <p>
                Solving and fixing bugs in a code and making features upgrade.
              </p>
              <p>
                Contributed to numerous project involving building,deploying
                api.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </main>

      <Footer />
    </>
  );
}
