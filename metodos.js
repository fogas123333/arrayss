let times = ["Flamengo", "Palmeiras", "São Paulo"];
times.push("Corinthians");
times.unshift("Grêmio");
times.pop();
let posicao = times.indexOf("Palmeiras");
times.reverse();

console.log(times);    
console.log(posicao); 