import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const arrayInput = input.split("\n");
  const splitArray = arrayInput.map((line) => line.split(/[\s]+/));
  console.log(splitArray);
  let depth: number = 0;
  let forward:number = 0;
  splitArray.forEach((singleLine) => {
    let direction: string = singleLine[0]
    let distance: number = Number.parseInt(singleLine[1])

    if(direction === 'forward'){
      forward += distance;
    } else if(direction === 'up'){
      depth -= distance;
    } else if(direction === 'down'){
      depth += distance;
    }

  })
  return depth * forward;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // { input: ``, expected: "" },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
