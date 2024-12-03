const auto = require("autocannon");

const urls = [
  "http://localhost:3000/",
  "http://localhost:3000/stress-test",
];

const duration = 30;

// Iterate over the URLs and run stress tests
urls.forEach(url => {
    const instance=auto({
    url,
    duration,
    },
    
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Results for ${url}:`);
        console.log(`Total Requests: ${result.requests.total}`);
      }
    });
    auto.track(instance);
  
});
