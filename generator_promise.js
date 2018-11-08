function sum(a, b) {
	return a+b
 }
 
 function* asyncFlow() {
	 const a = yield ()=>sum(5,5);
	 const b = yield Promise.resolve(10);
	 const c = yield 20;
	 const d = yield a+b+c;
	 console.log(d)
 }
 
 function run(gen) {
	 const generator = gen()
	 const firstValue = generator.next().value()
	 // const secondValue = generator.next(firstValue).value
	 generator.next(firstValue).value
	 const secondVal = 10
	
	 const thirdValue = generator.next( secondVal ).value
	 const fourthValue = generator.next(thirdValue).value
	 const fifthValue = generator.next(fourthValue).value
 }
 
 run(asyncFlow)
 
 // распечататься должно 40