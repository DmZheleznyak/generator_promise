function sum(a, b) {
	return a+b
 }
 
 function* asyncFlow() {
	 const a = yield ()=>sum(5,5);
	 const b = yield Promise.resolve(10);
	 const c = yield 20;
	 const d = yield a+b+c;
	 console.log(d);
 }
 
 function run(gen) {
 
	 var generator = gen()
 
	 for ( let valueOfYield of generator ) {
 
	 }
 
 }
 
 run(asyncFlow)		// вывести значение 40 из ф-ии генератор
 
 // в цикле перебрать генератора значения возвращаемые из operatora yield 
 // делать проверку если значения равны function,
 // делать проверку содержит ли значение promise 
 // если это промис то включить новый генератор, 
 // создать ф-ию которая извлекает значение из promise в нужном нам потоке
 // значение извлекается и прокидывается как аргумент
 // эти переменные прокидываются как аргументы в метод при итерировании next()
 
 // https://learn.javascript.ru/generator