function randomFinish(label) {
  const randomTime = Math.random() * 1000;

  setTimeout(() => console.log(label + " is done!"), randomTime);
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");