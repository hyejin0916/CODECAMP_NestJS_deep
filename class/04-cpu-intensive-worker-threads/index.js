const { Worker } = require('worker_threads');

const start = () => {
    let sum = 0;
    let totalSum = 0;
    for(let i = 0; i < 9; i++){
        // 1. 일꾼 만들기
        const worker = new Worker('./worker.js')
        // 3. 일꾼에게 일을 던져준다.
        worker.postMessage(10000) 
            // 9만개의 일을 9명의 일꾼을 만들어 각 만개씩 처리
        worker.on("message", (result) => {
            // 6. worker가 보내는 결과를 기다렸다가 받음
            totalSum += result;
            console.log(`나는 ${i}번째 일꾼dl고, 현재까지 총 합은 ${totalSum}이야`)
        });
        // sum += 1;
    }
};

start()