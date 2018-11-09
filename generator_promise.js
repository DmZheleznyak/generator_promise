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
 
	 for (let value of generator) {
 
	 
		 // console.log(`valueOfYiledGenerator:`, value )
 
		 if (typeof value === 'function' ) var firstYield = value()
 
		 if ( value.toString() === "[object Promise]" ) {
 
			 var generatorForPromise = gen()   
 // новый цикл для перебора нового генератора
			 function executor( generator, yieldPromise ) {
				 var next = generator.next( yieldPromise )
				 
				 if (!next.done) {
					 console.log( next )
					 if ( next.value.toString() === "[object Promise]" ) {
						 console.log(`promise next.value`, next.value)
						 next.value.then( k => k )
					 }
 
					 return executor(generator)
				 } else {
					 return console.log(`next in else -`, next )
				 }
			 }  
 
			 executor( generatorForPromise )  
 
		 }
 
	 }
 
 }
 
 run(asyncFlow)
 
 // в цикле перебрать генератора значения возвращаемые из operatora yield 
 // делать проверку если значения равны function,
 // делать проверку содержит ли значение promise 
 // если это промис то включить новый генератор, 
 // создать ф-ию которая извлекает значение из promise в нужном нам потоке
 // значение извлекается и прокидывается как аргумент
 // эти переменные прокидываются как аргументы в метод при итерировании next()
 // console.log - это ф-ия 
 
 // https://learn.javascript.ru/generator
  