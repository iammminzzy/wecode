const even = () => {
  let result = [];
  for (let i = 1; i <= 50; i++) {
    i % 2 === 0 && result.push(i);
  }
  return result;
};
