import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Newbutton = () => {
  return (
    <div className="flex justify-center items-center min-h-[50px] ">
      <a href="/about-us">
        <EncryptButton />
      </a>
    </div>
  );
};

const TARGET_TEXT = " About Me";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) =>
          pos / CYCLES_PER_LETTER > index
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="relative overflow-hidden rounded-lg border border-black border-b-4 px-4 py-2 font-mono font-medium uppercase text-black transition-colors hover:text-secondary-400 bg-yellow-500 hover:bg-yellow-600"
      style={{ animation: "none" }}
    >
      <div className="flex items-center">
        <FiLock />
        <span className="ml-2 mt-1">{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-yellow-600/0 from-40% via-yellow-600/90 to-yellow-600/0 to-60% opacity-0 transition-opacity group-hover:opacity-50"
      />
    </motion.button>
  );
};

export default Newbutton;
