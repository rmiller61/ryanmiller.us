export const isEven = (num: number) => num % 2 === 0

export const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max)

export const interpolate = (number: number, input: [number, number], output: [number, number]) => {
  return ((number - input[0]) * (output[1] - output[0])) / (input[1] - input[0]) + output[0]
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const wrap = (number: number, min: number, max: number) => {
  const rangeSize = max - min
  return ((((number - min) % rangeSize) + rangeSize) % rangeSize) + min
}
