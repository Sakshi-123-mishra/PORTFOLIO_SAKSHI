import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full p-4 hover:scale-110 transition-transform duration-300">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
