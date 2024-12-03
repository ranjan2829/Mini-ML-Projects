const autocannon = require("autocannon");

const urls = [
  "http://localhost:3001/",
  "http://localhost:3002/stress-test",
];

const duration = 30;

// Function to run the stress test for a given URL
function runStressTest(url) {
  console.log(`Starting stress test for ${url}...`);
  
  const instance = autocannon(
    {
      url,
      duration,
      connections: 10, // Number of concurrent connections
      pipelining: 1,   // Number of pipelined requests
      timeout: 10,     // Request timeout in seconds
    },
    (err, result) => {
      if (err) {
        console.error(`Error testing ${url}:`, err);
      } else {
        console.log(`\nResults for ${url}:`);
        console.log(`Total Requests: ${result.requests.total}`);
        console.log(`Avg Latency: ${result.latency.average} ms`);
        console.log(`Requests per Second: ${result.requests.average}`);
        console.log(`Throughput: ${result.throughput.average} bytes/sec`);
      }
    }
  );

  autocannon.track(instance, { renderProgressBar: true });
}

// Run the stress test for each URL
urls.forEach(runStressTest);
