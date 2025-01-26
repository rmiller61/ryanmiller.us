import type { ImageMetadata } from "astro";
import adobeillustrator from "../assets/adobe-illustrator.svg";
import adobephotoshop from "../assets/adobe-photoshop.svg";
import adobexd from "../assets/adobe-xd.svg";
import algolia from "../assets/algolia.svg";
import asana from "../assets/asana.svg";
import astro from "../assets/astro.svg";
import apiGateway from "../assets/aws-api-gateway.svg";
import cloudformation from "../assets/aws-cloudformation.svg";
import cloudfront from "../assets/aws-cloudfront.svg";
import codedeploy from "../assets/aws-codedeploy.svg";
import dynamoDb from "../assets/aws-dynamodb.svg";
import ec2 from "../assets/aws-ec2.svg";
import ecs from "../assets/aws-ecs.svg";
import elb from "../assets/aws-elb.svg";
import lambda from "../assets/aws-lambda.svg";
import route53 from "../assets/aws-route53.svg";
import s3 from "../assets/aws-s3.svg";
import aws from "../assets/aws.svg";
import axios from "../assets/axios.svg";
import babel from "../assets/babel.svg";
import basecamp from "../assets/basecamp.svg";
import blitzjs from "../assets/blitzjs.svg";
import builderio from "../assets/builderio.svg";
import bun from "../assets/bun.svg";
import confluence from "../assets/confluence.svg";
import creativeCloud from "../assets/creative-cloud.svg";
import cypress from "../assets/cypress.svg";
import docker from "../assets/docker.svg";
import dotcms from "../assets/dotcms.svg";
import electron from "../assets/electron.svg";
import eslint from "../assets/eslint.svg";
import facebook from "../assets/facebook.svg";
import fastify from "../assets/fastify.svg";
import figma from "../assets/figma.svg";
import framer from "../assets/framer.svg";
import gatsby from "../assets/gatsby.svg";
import git from "../assets/git.svg";
import githubActions from "../assets/github-actions.svg";
import githubCopilot from "../assets/github-copilot.svg";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import graphql from "../assets/graphql.svg";
import gsap from "../assets/gsap.svg";
import heroku from "../assets/heroku.svg";
import hubspot from "../assets/hubspot.svg";
import hydrogen from "../assets/hydrogen.svg";
import instagram from "../assets/instagram.svg";
import javascript from "../assets/javascript.svg";
import jest from "../assets/jest.svg";
import jira from "../assets/jira.svg";
import json from "../assets/json.svg";
import mailgun from "../assets/mailgun.svg";
import markdown from "../assets/markdown.svg";
import monday from "../assets/monday.svg";
import mongoDb from "../assets/mongodb.svg";
import msw from "../assets/msw.svg";
import netlify from "../assets/netlify.svg";
import nextjs from "../assets/nextjs.svg";
import nodejs from "../assets/nodejs.svg";
import ordercloud from "../assets/ordercloud.svg";
import payload from "../assets/payload.svg";
import playwright from "../assets/playwright.svg";
import postCss from "../assets/postcss.svg";
import postgresSql from "../assets/postgresql.svg";
import prettier from "../assets/prettier.svg";
import prisma from "../assets/prisma.svg";
import qwik from "../assets/qwik.svg";
import reactQuery from "../assets/react-query.svg";
import react from "../assets/react.svg";
import redis from "../assets/redis.svg";
import remix from "../assets/remix.svg";
import sass from "../assets/sass.svg";
import serverless from "../assets/serverless.svg";
import shopify from "../assets/shopify.svg";
import sketch from "../assets/sketch.svg";
import slack from "../assets/slack.svg";
import solid from "../assets/solid.svg";
import stately from "../assets/stately.svg";
import storybook from "../assets/storybook.svg";
import stripe from "../assets/stripe.svg";
import svelte from "../assets/svelte.svg";
import swc from "../assets/swc.svg";
import tailwind from "../assets/tailwind.svg";
import testingLibrary from "../assets/testing-library.svg";
import threejs from "../assets/threejs.svg";
import trpc from "../assets/trpc.svg";
import turborepo from "../assets/turborepo.svg";
import typescript from "../assets/typescript.svg";
import upstash from "../assets/upstash.svg";
import vanillaExtract from "../assets/vanilla-extract.svg";
import vercel from "../assets/vercel.svg";
import vite from "../assets/vite.svg";
import vitest from "../assets/vitest.svg";
import vsCode from "../assets/vs-code.svg";
import webpack from "../assets/webpack.svg";
import wordpress from "../assets/wordpress.svg";
import wpEngine from "../assets/wp-engine.svg";
import zeplin from "../assets/zeplin.svg";
import drizzle from "../assets/drizzle.svg";

export type SingleTile = {
  name: string;
  image: ImageMetadata;
};

export type Skills = Record<string, Array<SingleTile>>;

export const SKILLS: Skills = {
  backend: [
    {
      name: "Node.js",
      image: nodejs,
    },
    {
      name: "Bun",
      image: bun,
    },

    {
      name: "Upstash",
      image: upstash,
    },
    {
      name: "Serverless Framework",
      image: serverless,
    },
    {
      name: "Fastify",
      image: fastify,
    },
  ],
  apis: [
    {
      name: "Algolia",
      image: algolia,
    },
    {
      name: "Hubspot",
      image: hubspot,
    },
    {
      name: "Stripe",
      image: stripe,
    },
    {
      name: "Mailgun",
      image: mailgun,
    },
  ],
  libs: [
    {
      name: "Stately",
      image: stately,
    },
    {
      name: "Axios",
      image: axios,
    },
    {
      name: "TRPC",
      image: trpc,
    },
    {
      name: "React Query",
      image: reactQuery,
    },
  ],
  languages: [
    {
      name: "TypeScript",
      image: typescript,
    },
    {
      name: "GraphQL",
      image: graphql,
    },
    {
      name: "Markdown",
      image: markdown,
    },
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "JSON",
      image: json,
    },
  ],
  frameworks: [
    {
      name: "React",
      image: react,
    },
    {
      name: "Solid",
      image: solid,
    },
    {
      name: "Electron",
      image: electron,
    },
    {
      name: "Qwik",
      image: qwik,
    },
    {
      name: "Svelte",
      image: svelte,
    },
  ],
  css: [
    {
      name: "Tailwind CSS",
      image: tailwind,
    },
    {
      name: "Vanilla Extract",
      image: vanillaExtract,
    },
    {
      name: "Sass",
      image: sass,
    },
    {
      name: "PostCSS",
      image: postCss,
    },
  ],
  cms: [
    {
      name: "Shopify",
      image: shopify,
    },
    {
      name: "Payload",
      image: payload,
    },
    {
      name: "OrderCloud",
      image: ordercloud,
    },
    {
      name: "WordPress",
      image: wordpress,
    },
    {
      name: "dotCMS",
      image: dotcms,
    },
    {
      name: "Builder.io",
      image: builderio,
    },
  ],
  metaframeworks: [
    {
      name: "Astro",
      image: astro,
    },
    {
      name: "Next.js",
      image: nextjs,
    },
    {
      name: "Hydrogen",
      image: hydrogen,
    },
    {
      name: "Blitz.js",
      image: blitzjs,
    },
    {
      name: "Remix",
      image: remix,
    },
    {
      name: "Gatsby",
      image: gatsby,
    },
  ],
  design: [
    {
      name: "Adobe XD",
      image: adobexd,
    },
    {
      name: "Figma",
      image: figma,
    },
    {
      name: "Adobe Illustrator",
      image: adobeillustrator,
    },
    {
      name: "Sketch",
      image: sketch,
    },
    {
      name: "Adobe Photoshop",
      image: adobephotoshop,
    },
  ],
  business: [
    {
      name: "Slack",
      image: slack,
    },
    {
      name: "Jira",
      image: jira,
    },
    {
      name: "Monday",
      image: monday,
    },
    {
      name: "Asana",
      image: asana,
    },
    {
      name: "Confluence",
      image: confluence,
    },
    {
      name: "Basecamp",
      image: basecamp,
    },
  ],
  testing: [
    {
      name: "Vitest",
      image: vitest,
    },
    {
      name: "Playwright",
      image: playwright,
    },
    {
      name: "Jest",
      image: jest,
    },
    {
      name: "Cypress",
      image: cypress,
    },
    {
      name: "Testing Library",
      image: testingLibrary,
    },
    {
      name: "MSW",
      image: msw,
    },
  ],
  tools: [
    {
      name: "Zeplin",
      image: zeplin,
    },
    {
      name: "VS Code",
      image: vsCode,
    },
    {
      name: "Github Copilot",
      image: githubCopilot,
    },
    {
      name: "Creative Cloud",
      image: creativeCloud,
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      image: postgresSql,
    },
    {
      name: "Redis",
      image: redis,
    },
    {
      name: "MongoDB",
      image: mongoDb,
    },
    {
      name: "Prisma ORM",
      image: prisma,
    },
    {
      name: "Drizzle",
      image: drizzle,
    },
  ],
  devops: [
    {
      name: "Docker",
      image: docker,
    },
    {
      name: "Github Actions",
      image: githubActions,
    },
    {
      name: "Git",
      image: git,
    },
  ],
  aws: [
    {
      name: "AWS Lambda",
      image: lambda,
    },
    {
      name: "AWS S3",
      image: s3,
    },
    {
      name: "AWS DynamoDB",
      image: dynamoDb,
    },
    {
      name: "AWS CloudFront",
      image: cloudfront,
    },
    {
      name: "AWS Elastic Cloud Compute",
      image: ec2,
    },
    {
      name: "AWS Route 53",
      image: route53,
    },
    {
      name: "AWS CodeDeploy",
      image: codedeploy,
    },
    {
      name: "AWS API Gateway",
      image: apiGateway,
    },
    {
      name: "AWS CloudFormation",
      image: cloudformation,
    },
    {
      name: "AWS Elastic Container Service",
      image: ecs,
    },
  ],
  devtools: [
    {
      name: "SWC",
      image: swc,
    },
    {
      name: "Babel",
      image: babel,
    },
    {
      name: "ESLint",
      image: eslint,
    },
    {
      name: "Prettier",
      image: prettier,
    },
  ],
  buildTools: [
    {
      name: "Vite",
      image: vite,
    },
    {
      name: "Storybook",
      image: storybook,
    },
    {
      name: "Turborepo",
      image: turborepo,
    },
    {
      name: "Webpack",
      image: webpack,
    },
  ],
  animation: [
    {
      name: "Framer Motion",
      image: framer,
    },
    {
      name: "GSAP",
      image: gsap,
    },
    {
      name: "Three.js",
      image: threejs,
    },
  ],
  social: [
    {
      name: "Facebook",
      image: facebook,
    },
    {
      name: "Instagram",
      image: instagram,
    },
    {
      name: "Google",
      image: google,
    },
    {
      name: "Github",
      image: github,
    },
  ],
  hosting: [
    {
      name: "Vercel",
      image: vercel,
    },
    {
      name: "Netlify",
      image: netlify,
    },
    {
      name: "Heroku",
      image: heroku,
    },
    {
      name: "AWS",
      image: aws,
    },
    {
      name: "WP Engine",
      image: wpEngine,
    },
  ],
};
