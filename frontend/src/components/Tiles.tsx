import type { SingleTile } from "../types"
import { SKILLS } from "../consts"

interface TileProps {
  tiles: SingleTile[]
}

const Tile = ({ tiles }: TileProps) => {
  return (
    <li className="bg-white relative rounded-[10px] overflow-hidden shadow-tile text-center pb-[100%]">
      <div className="absolute inset-5">
        <img
          src={tiles[0].image}
          alt={tiles[0].name}
          title={tiles[0].name}
          className="object-contain object-center h-full w-full"
        />
      </div>
    </li>
  )
}

export default function Tiles() {
  return (
    <div className="scale-y-50">
      <ul className="w-[70vw] mx-auto grid grid-cols-4 gap-10 -rotate-45">
        {Object.entries(SKILLS).map(([key, values]) => (
          <Tile key={key} tiles={values} />
        ))}
      </ul>
    </div>
  )
}
