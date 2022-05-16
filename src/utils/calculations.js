export const MainArray = [
  { value: "אופציה 1", isCorrect: false },
  { value: "אופציה 2", isCorrect: false },
  { value: "תשובה נכונה", isCorrect: true },
];

const maxValue = 15;

const operatorArray = ["*", "/", "+", "-"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function genRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue + 1);
}

function changeArray(currectAnswer) {
  MainArray[0].value = genRandomNumber(maxValue * 2).toFixed(1);
  MainArray[0].isCorrect = false;
  MainArray[1].value = genRandomNumber(maxValue * 2).toFixed(1);
  MainArray[1].isCorrect = false;
  MainArray[2].value = currectAnswer.toFixed(1);
  MainArray[2].isCorrect = true;

  shuffleArray(MainArray);
}

export function createSimpleDrill(operator) {
  const num1 = genRandomNumber(maxValue);
  const num2 = genRandomNumber(maxValue);

  const drill = `${num1} ${operator} ${num2}`;

  const currectAnswer = eval(drill);

  changeArray(currectAnswer);

  return drill + " = ?";
}

export function createComplexDrill() {
  const num1 = genRandomNumber(maxValue);
  const num2 = genRandomNumber(maxValue);
  const num3 = genRandomNumber(maxValue);
  const operator1 = shuffleArray(operatorArray);
  const operator2 = shuffleArray(operatorArray);

  const drill = `${num1} ${operator1[0]} ${num2} ${operator2[1]} ${num3}`;

  const currectAnswer = eval(drill);

  changeArray(currectAnswer);

  return drill + " = ?";
}
