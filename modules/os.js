import os, { tmpdir } from "os";

// os.arch(); İşlemci boyutu gösterir.64 bitse x64 döndürür.
const arch=os.arch();
// console.log(arch);


// os.cpus();Pc'deki işlemcilerle ilgili bilgi verir.
const cpus=os.cpus();
// console.log(cpus);
 

// os.endianness(); Verilerin bellekteki sıralamasının kodlamasını döndürür. LE yada BE döndürür.
const endianness=os.endianness();
// console.log(endianness);


// os.freemem(); Bellekteki boş alanı byte cinsinden gösterir.
const freemem=os.freemem();
console.log(freemem);


// os.getPriority(); Parametre olarak aldığı PID değerine göre işlemin önceliğine geri döndürür.
const getPriority=os.getPriority();
// console.log(getPriority);


// os.loadavg(); işletim sistemi tarafından hesaplanan yük ortalamasını döndürür. Windows'ta anlamsız olabiliyor sonuçlar.
const loadavg=os.loadavg();
// console.log(loadavg);


// os.networkInterFaces(); Pc'de bulunan ağ yüzleri hakkında bilgi döndürür.
const networkInterFaces=os.networkInterfaces();
// console.log(networkInterFaces);


// os.release(); İşletim sisteminin dağıtımının adını getirir.
const release=os.release();
// console.log(release);


// os.setPriority(); İstenilen PID numarasına göre işletim sistemi üzerinde çalışan prosesin önceliğini belirlemeye yarar. 
// const setPriority=os.setPriority();
// console.log(setPriority);


// os.totalmem(); Harddiskin toplam boyutunu byte olarak döndürür.
const totalmem=os.totalmem();
// console.log(totalmem);


// os.type(); İşletim sisteminin adını döndürür.
const type=os.type();
// console.log(type);


// os.uptime(); Bilgisayarın açıldığından itibaren geçen süreyi saniye cinsinden döndürür.
const uptime=os.uptime();
// console.log(uptime);


// os.userInfo(); Şuanda aktif olan kullanıcıyla ilgili uid,gid,username,homedir,shell, bilgilerini döndürür.
const userInfo=os.userInfo();
// console.log(userInfo);


// os.version(); İşletim sistemi sürüm numarasını döndürür. 
// Windows 10 Home Single Language
const version=os.version();
// console.log(version);


// os.tpmdir(); İşletim sisteminin geçici dosyaları depoladığı klasör yolunu döndürür. 
const tpmdir=os.tmpdir();
// console.log(tmpdir);


// os.EOL(); İşletim sisteminde tanımlı satır sonu karakterini döndürür. Satır sonu karakteri windows için \n\r , unix içim \n
// const EOL=os.EOL();n
// console.log(EOL);


// os.homedir();
const homedir=os.homedir();
// console.log(homedir);

// os.hostname();
const hostname=os.hostname();
console.log(hostname);


//os.platform(); 
const platform=os.platform();
console.log(platform);



