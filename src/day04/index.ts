import run from "aocrunner";


//yeah firkin cheated again innit - https://gitlab.com/adventofcode-2021/day4
const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

const data = input.toString().trim().split("\n\n");
  const numbersToDraw = data[0]
  .trim()
  .split(",")
  .map((x) => parseInt(x));

const boards = data
  .slice(1)
  .map(parseDataToRowArrays)
  .map(convertToBoardObject);

let scores: string | any[] = [];
for (let i = 5; scores.length == 0; i++) {
  const drawnNumbers = numbersToDraw.slice(0, i + 1);
  scores = boards
    .filter((board) => isBoardComplete(board, drawnNumbers))
    .map((x) => computeScore(x, drawnNumbers))
    .sort()
    .reverse();
}
console.log(scores[0]);

function parseDataToRowArrays(data: string) {
  return data.split("\n").map((row) =>
    row
      .trim()
      .split(/\s+/g)
      .map((x) => parseInt(x))
  );
}
function convertToBoardObject(rows: any[]) {
  return {
    rows,
    cols: rows[0].map((_: any, i: string | number) => rows.map((row) => row[i])),
  };
}

function areAllElementsInDrawnNumbers(elementArr: any[], drawnNumbers: string | any[]) {
  return elementArr.every((element) => drawnNumbers.includes(element));
}
function isBoardComplete(board: { rows: any; cols: any; }, drawnNumbers: string | any[]) {
  const matchingRows = board.rows.some((row: any[]) =>
    areAllElementsInDrawnNumbers(row, drawnNumbers)
  );
  const matchingCols = board.cols.some((col: any[]) =>
    areAllElementsInDrawnNumbers(col, drawnNumbers)
  );
  return matchingCols || matchingRows;
}
function computeScore(board: { rows: any; cols?: any; }, drawnNumbers: string | any[]) {
  return (
    board.rows
      .flatMap((row: any) => row)
      .flatMap((element: any) => element)
      .filter((element: any) => !drawnNumbers.includes(element))
      .reduce((a: any, b: any) => a + b) * drawnNumbers[drawnNumbers.length - 1]
  );
}

};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const data = input.toString().trim().split("\n\n");
  const numbersToDraw = data[0]
  .trim()
  .split(",")
  .map((x) => parseInt(x));

const boards = data
  .slice(1)
  .map(parseDataToRowArrays)
  .map(convertToBoardObject);

let scores = [];
for (let i = 5; boards.length != 0 || numbersToDraw.length != i; i++) {
  const drawnNumbers = numbersToDraw.slice(0, i + 1);
  scores.push(...boards
    .filter((board) => isBoardComplete(board, drawnNumbers))
    .map(x => removeBoardFromStorage(x, boards))
    .map(x => computeScore(x, drawnNumbers))
    .sort()
    .reverse());
}
console.log(scores[scores.length-1]);

function removeBoardFromStorage (board: { rows: any; cols: any; }, boardStorage: any[]) {
  const idx = boardStorage.indexOf(board);
  boardStorage.splice(idx, 1);
  return board;
}

function parseDataToRowArrays(data: string) {
  return data.split("\n").map((row: string) =>
    row
      .trim()
      .split(/\s+/g)
      .map((x: string) => parseInt(x))
  );
}
function convertToBoardObject(rows: any[]) {
  return {
    rows,
    cols: rows[0].map((_: any, i: string | number) => rows.map((row: { [x: string]: any; }) => row[i])),
  };
}

function areAllElementsInDrawnNumbers(elementArr: any[], drawnNumbers: string | any[]) {
  return elementArr.every((element: any) => drawnNumbers.includes(element));
}
function isBoardComplete(board: { rows: any; cols: any; }, drawnNumbers: number[]) {
  const matchingRows = board.rows.some((row: any) =>
    areAllElementsInDrawnNumbers(row, drawnNumbers)
  );
  const matchingCols = board.cols.some((col: any) =>
    areAllElementsInDrawnNumbers(col, drawnNumbers)
  );
  return matchingCols || matchingRows;
}
function computeScore(board: { rows: any[]; }, drawnNumbers: string | any[]) {
  return (
    board.rows
      .flatMap((row: any) => row)
      .flatMap((element: any) => element)
      .filter((element: any) => !drawnNumbers.includes(element))
      .reduce((a: any, b: any) => a + b) * drawnNumbers[drawnNumbers.length - 1]
  );
}
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
