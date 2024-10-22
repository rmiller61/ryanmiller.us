import asa from "../assets/projects/ASA.jpg?url";
import buku from "../assets/projects/buku.webp?url";
import datingSite from "../assets/projects/dating-site.webp?url";
import dtd from "../assets/projects/dtd.jpg?url";
import dw from "../assets/projects/dw.jpg?url";
import elantolia from "../assets/projects/elantolia.webp?url";
import gld from "../assets/projects/gld.jpg?url";
import groceryGripps from "../assets/projects/grocery-gripps.jpg?url";
import gummyTech from "../assets/projects/gummy-tech.jpg?url";
import heath from "../assets/projects/heath.jpg?url";
import infuzio from "../assets/projects/infuzio.jpg?url";
import patti from "../assets/projects/PattiMockUp.jpg?url";
import preppd from "../assets/projects/preppd.jpg?url";
import rocally from "../assets/projects/rocally.jpg?url";
import sep from "../assets/projects/sep.jpg?url";
import socialHustle from "../assets/projects/social-hustle.jpg?url";
import stayAwhile from "../assets/projects/stay-awhile.jpg?url";
import tm34 from "../assets/projects/tm34.webp?url";
import { shuffleArray } from "../utils/arrays";

export type Media =
  | {
      type: "IMAGE";
      image: string;
    }
  | {
      type: "VIDEO";
      video: string;
      poster: string;
    };

export type Project = {
  name: string;
  media: Media;
};

export const PROJECTS: Array<Project> = shuffleArray([
  {
    name: "Air Locker Training",
    media: {
      type: "VIDEO",
      video: "/projects/ALT.mp4",
      poster: "/projects/alt-poster.jpg",
    },
  },
  {
    name: "American Seniors Association",
    media: {
      type: "IMAGE",
      image: asa,
    },
  },
  {
    name: "Buku Wireless",
    media: {
      type: "IMAGE",
      image: buku,
    },
  },
  {
    name: "Dating Site",
    media: {
      type: "IMAGE",
      image: datingSite,
    },
  },
  {
    name: "Day Trading Decoded",
    media: {
      type: "IMAGE",
      image: dtd,
    },
  },
  {
    name: "David Wygant",
    media: {
      type: "IMAGE",
      image: dw,
    },
  },
  {
    name: "Elantolia",
    media: {
      type: "IMAGE",
      image: elantolia,
    },
  },
  {
    name: "GLD",
    media: {
      type: "IMAGE",
      image: gld,
    },
  },
  {
    name: "Gummy Tech",
    media: {
      type: "IMAGE",
      image: gummyTech,
    },
  },
  {
    name: "Grocery Gripps",
    media: {
      type: "IMAGE",
      image: groceryGripps,
    },
  },
  {
    name: "Heath Treasure",
    media: {
      type: "IMAGE",
      image: heath,
    },
  },
  {
    name: "Infuzio",
    media: {
      type: "IMAGE",
      image: infuzio,
    },
  },
  {
    name: "Patti Stanger",
    media: {
      type: "IMAGE",
      image: patti,
    },
  },
  {
    name: "Preppd",
    media: {
      type: "IMAGE",
      image: preppd,
    },
  },
  {
    name: "Rocally",
    media: {
      type: "IMAGE",
      image: rocally,
    },
  },
  {
    name: "Solar Energy Partners",
    media: {
      type: "IMAGE",
      image: sep,
    },
  },
  {
    name: "Social Hustle",
    media: {
      type: "IMAGE",
      image: socialHustle,
    },
  },
  {
    name: "Stay Awhile Villas",
    media: {
      type: "IMAGE",
      image: stayAwhile,
    },
  },
  {
    name: "Super T Transportation",
    media: {
      type: "VIDEO",
      video: "/projects/super-t.mp4",
      poster: "/projects/super-t-poster.jpg",
    },
  },
  {
    name: "TM34",
    media: {
      type: "IMAGE",
      image: tm34,
    },
  },
]);
