import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;



const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const depthArray: Array<number> = input.split("\n").map((input) => Number(input));

  let count = 0;
  for(let i = 1; i < depthArray.length; i++){
    if(depthArray[i] > depthArray[i-1]){
      
      count += 1;
    } else {
      
      count += 0;
    }
  }
  
  return count;
};
const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const depthArray: Array<number> = input.split("\n").map((input) => Number(input));
  let tripleThreat: Array<number> = []

  for(let i = 0; i < depthArray.length; i++) {
    tripleThreat.push(depthArray[i]+depthArray[i+1]+depthArray[i+2])
  }


  let count = 0;
  for(let i = 1; i < depthArray.length; i++){
    if(tripleThreat[i] > tripleThreat[i-1]){
      
      count += 1;
    } else {
      
      count += 0;
    }
  }
  
  return count;
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
