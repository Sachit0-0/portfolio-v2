import one from "@/assets/sachit-CV-1.png";

export const CV = () => {
  return (
    <div>
      <img
        src={one}
        alt="My CV"
        style={{ width: "80%", display: "block", margin: "0 auto" }} // Center the image horizontally
      />
    </div>
  );
};
