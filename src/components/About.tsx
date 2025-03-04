import develop1 from "@/assets/Developer activity.gif";
import develop2 from "@/assets/Developer activity (1).gif";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { useTheme } from "./theme-provider";

export const About = () => {
  const { theme } = useTheme();

  interface StatsProps {
    icon: JSX.Element;
  }

  const stats: StatsProps[] = [
    {
      icon: <FaHtml5 />,
    },
    {
      icon: <FaCss3Alt />,
    },
    {
      icon: <FaJs />,
    },
  ];

  return (
    <section id="about" className="container mx-auto px-4 mb-64">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold pb-6">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Driven{" "}
              </span>
              by a genuine passion for technology, I'm eager to dive into new frameworks and tools, striving to build a robust skill set as a software developer.
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map(({ icon }: StatsProps, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2">
                    {icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={theme === "light" ? develop1 : develop2}
              alt="Developer activity"
              className="w-[300px] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

