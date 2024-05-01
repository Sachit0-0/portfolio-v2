import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faGitAlt,
  faPython,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Tailwind CSS", icon: faCss3 },
  { name: "Node.js", icon: faNodeJs },
  { name: "Python", icon: faPython },
  { name: "Git", icon: faGitAlt },
  { name: "Django", icon: faPython },
  { name: "DjangoRest", icon: faPython },
  { name: "TypeScript", icon: faNpm },
];

const Features = () => {
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
          data-aos="zoom-out"
          className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-secondary card shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-primary text-4xl mb-4"
              />
              <h4 className="text-lg font-semibold text--primary">
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
