const { parentPort } = require('worker_threads');
// 부모가 index.js에 있는 함수이다.

parentPort.on("message", (maxSize)=> { // 2. 메세지 받기를 대기한다.
    let sum = 0;
    for(let i=0; i < maxSize; i++) {
        sum += 1;
    };
    // 4. 일을 처리한 결과를 던져준다.
    parentPort.postMessage(sum);
    // 5. 할일 끝을 뜻함
    parentPort.close();
}) 
