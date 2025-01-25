import gummyTech from "../assets/projects/gummy-tech.jpg?url";
import heath from "../assets/projects/heath.jpg?url";
import rocally from "../assets/projects/rocally.jpg?url";
import sep from "../assets/projects/sep.jpg?url";
import socialHustle from "../assets/projects/social-hustle.jpg?url";
import stayAwhile from "../assets/projects/stay-awhile.jpg?url";
import tm34 from "../assets/projects/tm34.webp?url";
import altFranchise from "../assets/projects/alt-franchise.jpg?url";
import ana from "../assets/projects/ana.jpg?url";
import braggnBeauty from "../assets/projects/braggn-beauty.jpg?url";
import coretrust from "../assets/projects/coretrust.jpg?url";
import hvf from "../assets/projects/hvf.jpg?url";
import groceryGripps from "../assets/projects/grocery-gripps.jpg?url";
import { type Project } from "./projects";

export const PORTFOLIO: Array<Project> = [
  {
    name: "Air Locker Training",
    media: {
      type: "VIDEO",
      video: "/projects/ALT.mp4",
      poster: "/projects/alt-poster.jpg",
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
    name: "TM34",
    media: {
      type: "IMAGE",
      image: tm34,
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
    name: "Alt Franchise",
    media: {
      type: "IMAGE",
      image: altFranchise,
    },
  },
  {
    name: "Ana",
    media: {
      type: "IMAGE",
      image: ana,
    },
  },
  {
    name: "Braggn Beauty",
    media: {
      type: "IMAGE",
      image: braggnBeauty,
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
    name: "Coretrust",
    media: {
      type: "IMAGE",
      image: coretrust,
    },
  },
  {
    name: "HVF",
    media: {
      type: "IMAGE",
      image: hvf,
    },
  },
];
