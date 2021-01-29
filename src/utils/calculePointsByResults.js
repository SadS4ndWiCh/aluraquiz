export default function calculePointsByResults(results) {
  return results.reduce((totalPoints, currentIsCorrect) => {
    currentIsCorrect ? totalPoints += 100 : totalPoints -= 25;

    return Math.max(0, totalPoints);
  }, 0);
}