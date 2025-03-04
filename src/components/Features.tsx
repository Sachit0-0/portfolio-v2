import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, FaDocker, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiDjango, SiTailwindcss } from "react-icons/si";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "DjangoRest", icon: SiDjango },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
  { name: "Figma", icon: FaFigma },
  { name: "PostgreSQL", icon: FaGitAlt },
  { name: "React Query", icon: FaReact },
  { name: "GSAP", icon: FaJs },
];

const Features = () => {
  const [iconColor, setIconColor] = useState("text-black");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconColor("text-[#B32222]");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 mb-24 bg-secondary-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-xl text-primary-we-34">
            Explore some of the technologies I work with.
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <div
                data-aos="flip-up"
                data-aos-duration="500"
                data-aos-delay={index * 50}
                className="bg-primary-50 rounded-full p-4"
              >
                <skill.icon
                  className={`transition duration-1000 ease-in-out ${iconColor} text-4xl`}
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-primary-700">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

