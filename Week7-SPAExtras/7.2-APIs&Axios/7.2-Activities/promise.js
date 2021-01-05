function handleFinish(count, resolve) {
  const label = `function ${count}`;

  console.log(`${label} is done!`);

  resolve(count + 1);
  // resolves the Promise that was constructed in randomFinish,
  // to be handled with .then()
}

function randomFinish(count) {
  const randomTime = Math.random() * 1000;

  return new Promise(resolve => { // the Promise constructor takes one argument: the function below
    // resolve is a function, too! reject is unused in this example
    setTimeout(() => handleFinish(count, resolve), randomTime);
  });
}

randomFinish(1)
  .then(randomFinish)
  .then(randomFinish);