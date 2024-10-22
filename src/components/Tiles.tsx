import { useState, useCallback } from "react";
import type { SingleTile } from "../constants/skills";
import { SKILLS } from "../constants";
import { isEven, randomNumber, wrap, interpolate } from "../utils/numbers";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "../hooks";

/**
 * https://www.bypeople.com/3d-css-tiles-photos/
 */

interface TileProps {
  tiles: SingleTile[];
  zIndex: number;
}

const tileVariants = {
  initial: {
    x: -100,
    y: 100,
    z: 0,
    opacity: 0,
    //boxShadow: "-2px 2px 0 0 rgba(122, 122, 122, 1), -4px 4px 0 0 rgba(122, 122, 122, 1), -6px 6px 0 0 rgba(122, 122, 122, 1), -8px 8px 0 0 rgba(122, 122, 122, 1), -10px 10px 2px 2px rgba(0, 0, 0, 0.2)",
  },
  animate: {
    x: 0,
    y: 0,
    z: 0,
    opacity: 1,
    //boxShadow: "-2px 2px 0 0 rgba(122, 122, 122, 1), -4px 4px 0 0 rgba(122, 122, 122, 1), -6px 6px 0 0 rgba(122, 122, 122, 1), -8px 8px 0 0 rgba(122, 122, 122, 1), -50px 50px 120px 20px rgba(0, 0, 0, 0.5)",
  },
};

const interval = 3000; // 1 second

//const baseProbability = 1 / 20

const Tile = ({ tiles, zIndex }: TileProps) => {
  const [index, setIndex] = useState(0);
  const activeTile = tiles[index];
  const tilesLength = tiles.length;
  //const interval = cycleLength / tilesLength
  const increment = useCallback(() => {
    const random = randomNumber(0, 30);
    const probability = tilesLength;
    if (random < probability)
      setIndex((index) => wrap(index + 1, 0, tilesLength - 1));
  }, [tilesLength]);

  useInterval(increment, interval);

  return (
    <li
      style={{
        zIndex,
      }}
      className="relative pb-[100%]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          layout
          key={index}
          className="absolute inset-0"
          variants={tileVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{
            duration: 1,
            ease: "easeInOut",
            opacity: { duration: 0.5 },
          }}
        >
          <div className="bg-white absolute inset-0 rounded-[10px] overflow-hidden text-center p-5 shadow-tile z-10">
            <img
              src={activeTile.image.src}
              alt={activeTile.name}
              title={activeTile.name}
              height={activeTile.image.height}
              width={activeTile.image.width}
              className="object-contain object-center h-full w-full"
            />
          </div>
          <div className="absolute -inset-5 translate-x-[-50px] translate-y-[50px] bg-black/50 z-[-1] blur-3xl" />
        </motion.div>
      </AnimatePresence>
    </li>
  );
};

export default function Tiles() {
  return (
    <div className="scale-y-50">
      <ul className="w-[70vw] mx-auto grid grid-cols-4 gap-5 sm:gap-10 -rotate-45">
        {Object.entries(SKILLS).map(([key, values], index) => {
          const colNumber = wrap(index, 0, 4);
          const col = interpolate(colNumber, [0, 3], [4, 1]);
          return <Tile key={key} tiles={values} zIndex={col * 100 + index} />;
        })}
      </ul>
    </div>
  );
}
