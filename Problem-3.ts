{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const wordsArray = sentence.split(" ");
    const targetWord = word;

    let count = 0;
    for (const w of wordsArray) {
      if (w === targetWord) {
        count++;
      }
    }
    return count;
  };
  console.log(countWordOccurrences("I love typescript", "typescript"));
}
