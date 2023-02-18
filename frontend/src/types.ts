export type SingleTile = {
  name: string
  image: string
}

export type Skills = Record<string, Array<SingleTile>>

export type Media =
  | {
      type: "IMAGE"
      image: string
    }
  | {
      type: "VIDEO"
      video: string
      poster: string
    }

export type Project = {
  name: string
  media: Media
}
