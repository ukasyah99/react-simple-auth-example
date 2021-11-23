const sleep = (ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, ms);
  });
};

export default sleep;
