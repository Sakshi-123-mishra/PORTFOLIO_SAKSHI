import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { CERTIFICATIONS, CORE_SUBJECTS, EXTRA_CURRICULAR } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type CertificationCardProps = {
  index: number;
  title: string;
  issuer: string;
  icon: string;
};

// Certification Card
const CertificationCard = ({
  index,
  title,
  issuer,
  icon,
}: CertificationCardProps) => {
  return (
    <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} className="w-full sm:w-[360px]">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[150px] flex items-start gap-4">
          <div className="text-4xl flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <h3 className="text-white text-[18px] font-bold leading-tight">
              {title}
            </h3>
            <p className="text-secondary text-[14px] mt-2">{issuer}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Certifications
export const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Accomplishments</p>
          <h2 className={styles.sectionHeadText}>
            Certifications & Achievements.
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="mt-12 flex flex-wrap gap-7 justify-center">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard key={cert.title} index={i} {...cert} />
          ))}
        </div>

        {/* Core Subjects */}
        <motion.div
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-16"
        >
          <h3 className="text-white text-[24px] font-bold mb-6">
            Core Subjects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SUBJECTS.map((subject, index) => (
              <motion.div
                key={subject}
                variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                className="bg-tertiary rounded-lg py-4 px-6 text-center border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300"
              >
                <p className="text-white text-[16px] font-semibold">
                  {subject}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra-Curricular Activities */}
        <motion.div
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-12"
        >
          <h3 className="text-white text-[20px] font-bold mb-4">
            Extra-Curricular Activities
          </h3>
          <div className="bg-tertiary rounded-lg py-5 px-6 border-2 border-secondary/20">
            <ul className="space-y-2">
              {EXTRA_CURRICULAR.map((activity, index) => (
                <motion.li
                  key={activity}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="text-secondary text-[15px] flex items-center gap-3"
                >
                  <span className="text-white text-lg">🏅</span>
                  <span>{activity}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </>
    </SectionWrapper>
  );
};
