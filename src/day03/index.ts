import run from "aocrunner";

//absolutely stolen from davidsharp via reddit because i was feeling lazy on my day off

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const countBits = input => input.map(num=>num.split(''))
  .reduce((acc,number)=>{
  number.forEach((digit,i)=>{
    if(!acc[i])acc[i]={'1':0,'0':0}
    acc[i][digit]++
  })
  return acc
},[])
const bitCount = countBits(input.split('\n'))
  const gamma = bitCount.map(digit=>digit['1']>digit['0']?'1':'0').join('')
  const epsilon = bitCount.map(digit=>digit['1']<digit['0']?'1':'0').join('')

  return parseInt(gamma,2) * parseInt(epsilon,2)

  // .split("\n").map(line=> line.split(''));
  // // console.log(input);
  // let binaryValue:string = '';
  // input.forEach(element => {
  //   element.forEach(digit => {
  //     let zero = 0;
  //     let one = 0;
  //     if(digit === '0'){
  //       zero +=1;
  //     } else if(digit === '1'{
  //       one += 1;
  //     }
  //     zero > one ? binaryValue.concat('0') : binaryValue.concat('1');
  //     console.log(binaryValue);
  //   })
  // })
  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const countBits = input => input.map(num=>num.split(''))
  .reduce((acc,number)=>{
  number.forEach((digit,i)=>{
    if(!acc[i])acc[i]={'1':0,'0':0}
    acc[i][digit]++
  })
  return acc
},[])


const numbers = input.split('\n')
// life support = oxygen gen * co2 scrub

let bit = 0
let oxygenPool = numbers
while(oxygenPool.length>1){
  let digit = countBits(oxygenPool)[bit]
  oxygenPool = oxygenPool.filter(
    num => num[bit]==(digit['1']>=digit['0']?'1':'0')
  )
  bit++
}
bit = 0
let co2Pool = numbers
while(co2Pool.length>1){
  let digit = countBits(co2Pool)[bit]
  co2Pool = co2Pool.filter(
    num => num[bit]==(digit['1']>=digit['0']?'0':'1')
  )
  bit++
}

return parseInt(oxygenPool,2) * parseInt(co2Pool,2)
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
