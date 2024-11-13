import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import type { Project } from "../constants/projects";
import { wrap } from "../utils/numbers";

const Project = ({ name, media }: Project) => {
  return (
    <div className="w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw]">
      <div className="aspect-w-4 aspect-h-3">
        {media.type === "IMAGE" ? (
          <img src={media.image} alt={name} />
        ) : (
          <video src={media.video} poster={media.poster} muted autoPlay loop />
        )}
      </div>
    </div>
  );
};

/**
 * Src: https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/App.tsx:383-1841
 */

interface Props {
  baseVelocity: number;
  items: Project[];
}

export default function Projects({ baseVelocity, items }: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(v, -0, -50)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex flex-nowrap pointer-events-none select-none">
      <motion.div
        className="grid grid-flow-col auto-cols-[1fr]"
        style={{
          x,
        }}
      >
        {[...items, ...items].map((project, index) => (
          <Project key={`${project.name}-${index}`} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
