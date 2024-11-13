import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";
import { cn } from "@social-hustle/utils-classnames";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke={`white`}
    strokeLinecap="round"
    {...props}
  />
);

export default function Header({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    const offset = el?.offsetTop ?? 100;
    window.scrollTo({
      top: offset - 75,
      behavior: "smooth",
    });
  };
  return (
    <header
      className={cn(
        `z-[100] fixed left-0 w-full lg:sticky px-8 top-0 h-[75px] flex justify-between mb-0 items-center bg-dark text-white border-b border-b-white/50 lg:border-b-0 lg:border-t lg:border-t-white/75`
      )}
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="h-[20px] w-[20px] lg:hidden relative z-20"
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          preserveAspectRatio="none"
          className="h-full w-full"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <Path
            variants={{
              closed: { d: "M 0 3 L 20 3" },
              open: { d: "M 3 17 L 17 3" },
            }}
          />
          <Path
            d="M 0 10 L 20 10"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 0 17 L 20 17" },
              open: { d: "M 3 3 L 17 17" },
            }}
          />
        </motion.svg>
      </button>
      <motion.div
        className="bg-dark fixed top-0 left-0 h-full w-full lg:hidden origin-top"
        animate={isMenuOpen ? "open" : "closed"}
        initial="closed"
        variants={{
          closed: { scaleY: 0 },
          open: { scaleY: 1 },
        }}
        transition={{
          duration: 0.25,
        }}
      />
      <nav
        className={cn(
          `gap-5 lg:gap-2.5 text-lg lg:text-sm font-grifter tracking-wider fixed top-0 left-0 h-full w-full flex-col text-center lg:static lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:text-left items-center justify-center lg:h-auto`,
          isMenuOpen ? "flex animate-fadeIn" : "hidden"
        )}
      >
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <span className="hidden lg:inline">//</span>
        <button onClick={() => scrollTo("writing")}>Writing</button>
        <span className="hidden lg:inline">//</span>
        <button onClick={() => scrollTo("beats")}>Beats</button>
        <span className="hidden lg:inline">//</span>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <span className="hidden lg:inline">//</span>
        <button onClick={() => scrollTo("resume")}>Resume</button>
      </nav>
      {children}
    </header>
  );
}
