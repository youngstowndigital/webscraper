const { parentPort } = require('worker_threads');

parentPort.once("message", (message) => {
    console.log("Received data from mainWorker...");

    console.log(message);
});
