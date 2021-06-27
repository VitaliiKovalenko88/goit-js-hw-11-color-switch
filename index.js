const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector("[data-action=start]"),
  stop: document.querySelector("[data-action=stop]"),
};

refs.start.addEventListener("click", onStartClick);

function onStartClick() {
  const intervalId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    const color = colors[index];
    document.body.style.backgroundColor = color;
  }, 1000);

  refs.stop.addEventListener("click", () => {
    refs.start.disabled = false;
    refs.stop.disabled = true;

    clearInterval(intervalId);
  });

  refs.start.disabled = true;
  refs.stop.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
