# Documentation Using Grafana K6

## How to run Grafana K6 using docker Image

- Pull the Image of Grafana K6
```
docker pull grafana/k6
```

- By default you can run this command :
```
docker run --rm -i grafana/k6 run - <scripts.js
```
- To print summary in json file you have to add this code to `.js` file : 
```
export function handleSummary(data) {
    return {
        '/results/summary.json': JSON.stringify(data), //the default data object
    };
}
```
- After that you can run this command : 

```
docker run --rm -v ./results:/results -i grafana/k6 run --vus 10 --duration 5s - <scripts.js
```