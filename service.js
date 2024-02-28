const { parentPort, workerData } = require("worker_threads");

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=30&sort=cmc_rank",
  {
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": "1cf262c5-ceb1-4f78-820a-8dc03aaf7331",
    },
    cache: "force-cache",
  }
)
  .then((res) =>
    res.json().then((data) => parentPort.postMessage(data.data.slice(0, 20)))
  )
  .catch((err) => {
    parentPort.postMessage(`${err} worker`);
  });
