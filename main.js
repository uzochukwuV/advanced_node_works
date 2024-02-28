const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

function runService(workerData) {
    return new Promise((resolve, reject)=>{
        const worker = new Worker('./service.js', {workerData});
        worker.on('message', resolve)
        worker.on('error', reject);
        worker.on('exit', (code)=> {
            if(code != 0)
                reject(new Error(`worker stopped with exit code ${code}`));
            
        })
    })
}


async function main() {
    const result = await runService('hello');
    console.log(result);
}

main().catch((err)=> console.error(err));

console.log('i camed lated');