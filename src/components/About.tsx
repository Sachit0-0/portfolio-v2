import develop1 from "@/assets/Developer activity.gif";
import develop2 from "@/assets/Developer activity (1).gif";
import { Statistics } from "./Statistics";
import { useTheme } from "./theme-provider";
export const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="container mb-64 py-24 sm:py-32">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <a href="https://storyset.com/online" />
          <img
            src={theme === "light" ? develop1 : develop2}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Motivated{" "}
                </span>
                to explore new technologies and frameworks, aiming to develop a
                comprehensive skill set as a software developer.
              </h2>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
