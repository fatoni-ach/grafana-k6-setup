import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
    vus: 1,
    duration: '10s',
};
export default function () {
    const res = http.get('https://api.popmama.com/ping');
    check(res, { 'status was 200 clear': (r) => r.status == 200 });
    // console.log(res.status);
    // sleep(1);
}

export function handleSummary(data) {
    return {
        '/results/summary.json': JSON.stringify(data), //the default data object
    };
}
