import child_process from 'child_process';
import { stderr, stdout } from 'process';

// exec: hazır işlem içerisinde başka bir işlem başlatma

const processAsync = child_process.exec("node --version", (err, stdout, stderr) => {
    console.log("stderr:" + stderr);
    if (err) throw err;
    console.log("stdout:" + stdout);


    processAsync.on("exit", (code, signal) => {
        console.log("işlem tamamlandı İşlem", code, "Sinyal", signal)
    })
});
// Senkron hali aşağıdaki - asenkron yukarıdaki
const processSync=child_process.execSync("node --version").toString();
console.log(processSync);

 


// spawn : Yazılan komutu yeni işlem başlatıp çalıştırır.
// fork : Alt işlem başlatmak için kullanılır.

























