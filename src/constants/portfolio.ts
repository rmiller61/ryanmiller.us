import gummyTech from "../assets/projects/gummy-tech.jpg?url";
import heath from "../assets/projects/heath.jpg?url";
import rocally from "../assets/projects/rocally.jpg?url";
import sep from "../assets/projects/sep.jpg?url";
import socialHustle from "../assets/projects/social-hustle.jpg?url";
import stayAwhile from "../assets/projects/stay-awhile.jpg?url";
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
];
