import { HeroCards } from "./HeroCards";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 overflow-hidden md:py-32 gap-10">
      <div className="text-center overflow-hidden lg:text-start space-y-6">
        <main className="text-5xl overflow-hidden md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#dd5441]  to-[#e20707e0] text-transparent bg-clip-text">
              Welcome
            </span>{" "}
            to my
          </h1>{" "}
          portfolio{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#dd5441] via-[#f1af91] to-[#e20707e0] text-transparent bg-clip-text">
              website !!
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl font-light text-slate-600 md:w-10/12 mx-auto lg:mx-0">
          🚀 Developer | 💡 Tech Enthusiast
        </p>

        <Link to="/cv">
          <button className="mt-20 button2"> Curriculum vitae</button>
        </Link>
      </div>

      <div className="z-10 overflow-hidden lg:overflow-visible">
        {" "}
        {/* Apply overflow for large screens */}
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};

