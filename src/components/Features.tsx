import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
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
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "React Query", icon: FaReact },
  { name: "GSAP", icon: FaJs },
];

const Features = () => {
  const [iconColor, setIconColor] = useState("text-black");
  const [iconAnimation, setIconAnimation] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const timer = setTimeout(() => {
          setIconAnimation("animate-wiggle"); 
          setTimeout(() => {
            setIconAnimation("");
            setIconColor(
              "text-[#B32222] transition-colors duration-1000 ease-in-out"
            );
          }, 500);
        }, 2000);

        return () => clearTimeout(timer); 
      }
    }, { root: null, rootMargin: "0px", threshold: 0.5 });

    const element = document.getElementById("features");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-12 mb-24 bg-secondary-100">
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
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
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
                  <IconComponent
                    className={`transition duration-3000 ease-in-out ${iconColor} ${iconAnimation} text-4xl`}
                  />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-primary-700">
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

