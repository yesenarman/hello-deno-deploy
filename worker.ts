addEventListener("fetch", (event) => {
  const startTime = performance.now();
  const iterations = Math.floor(Math.random() * 1e9);

  let sum = 0;
  for (let i = 1; i <= iterations; ++i) {
    sum += i * i;
  }

  const elapsedTime = performance.now() - startTime;
  const elapsedSeconds = elapsedTime / 1000;

  event.respondWith(
    new Response(
      `Completed ${iterations} iterations in ${elapsedSeconds} seconds: sum = ${sum}`,
      {
        headers: {
          "content-type": "text/plain",
        },
      },
    ),
  );
});
