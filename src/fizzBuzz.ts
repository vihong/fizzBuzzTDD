/**Ecrire un programme qui retourne les entiers de 1 à 100
 * A prendre en compte : 
 * Pour les multiples de 3, remplacer le nombre par "Fizz"
 * Pour les multiples de 5, remplacer le nombre par "Buzz"
 * Pour les multiples de 15, remplacer le nombre par "FizzBuzz"
 * Pour tous les autres chiffres, les renvoyer tel quel.
 * 
 * Exemple : 
 * "12Fizz4BuzzFizz78FizzBuzz.....Buzz"
 */

export default function fizzBuzz(number: number): string {
	if (isMultipleOf3And5(number)) return 'FizzBuzz'
	if (isMultipleOf3(number)) return 'Fizz'
	if (isMultipleOf5(number)) return 'Buzz'
	return number.toString()
}

function isMultipleOf3(number: number): boolean {
	return number % 3 === 0
}

function isMultipleOf5(number: number): boolean {
	return number % 5 === 0
}

function isMultipleOf3And5(number: number): boolean {
	return number % 3 === 0 && number % 5 === 0
}

//après refactoré le SUT, c'est comme si on lisait les règles du FizzBuzz
