{
  const removeDuplicates = (arr: number[]): number[] => {
    let dup: number[] = [];
    for (const elem of arr) {
      if (!dup.includes(elem)) {
        dup.push(elem);
      }
    }
    return dup;
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
