import { FaEye, FaLock, FaShieldAlt } from "react-icons/fa";

export const Statistics = () => {
  interface statsProps {
    icon: JSX.Element;
  }

  const stats: statsProps[] = [
    {
      icon: <FaLock />,
    },
    {
      icon: <FaEye />,
    },
    {
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {stats.map(({ icon }: statsProps) => (
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold">
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
