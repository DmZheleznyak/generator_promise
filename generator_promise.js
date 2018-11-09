function sum(a, b) {
	return a+b
 }
 
 function* asyncFlow() {
	 const a = yield ()=>sum(5,5);
	 const b = yield Promise.resolve(10);
	 const c = yield 20;
	 const d = yield a+b+c;
	 console.log(`D: - `, d);
 }
 
 function run(gen) {
 
	 var generatorForPromise = gen()   
 
	 function executor( generator, yieldValue ) {
		 var next = generator.next( yieldValue )
 
			 if ( typeof next.value === 'function'  ) {
				 return executor( generator, next.value() )
			 }
 
			 if ( next.value.toString() === "[object Promise]" ) {
				 console.log(`promise next.value`, next.value)
				 return next.value.then( result => {
					 console.log( `RESULT:`, result )
					 return executor( generator, result )
				 } )
			 }
 
			 return executor(generator, next.value)
			
 
	 }  
 
	 executor( generatorForPromise )  
 
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
  