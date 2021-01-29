export default function formatResultNumber(value) {
  const valueString = value.toString();

  switch(valueString.length) {
    case 1: return `00${valueString}`;
    case 2: return `0${valueString}`;
  }

  return valueString;
}