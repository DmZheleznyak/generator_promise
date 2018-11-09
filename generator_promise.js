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
		if ( !next.done ) {
			
			if ( typeof next.value === 'function'  ) return executor( generator, next.value() )

			if ( next.value.toString() === "[object Promise]" ) return next.value.then( result => executor( generator, result ) )

			if ( typeof next.value === 'number') return executor( generator, next.value )

		}
		
	}  

	executor( generatorForPromise )  

}

run(asyncFlow)
  
// https://learn.javascript.ru/generator 