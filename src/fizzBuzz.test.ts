import fizzBuzz from './fizzBuzz'

// quand tu vas faire ça, le libellé des tests, ça va ressembler à des specs.
// tu sais que t'as fini une feature quand tu ne passes plus par d'abord un test qui fail, et que tu tombes direct sur un cas success (grace à triangularisation)
// notion de profondeur / robustess des tests sur une feature

describe('FizzBuzz', () => {
	describe('Simple Numbers', () => {
		it.each(
			[
				[
					'1',
					1
				],
				[
					'2',
					2
				],

				[
					'4',
					4
				],

				[
					'7',
					7
				],
				[
					'8',
					8
				]
			]
		)('should return %s when given %s', (expectedFizzBuzz, number) => {
			//act
			const retrievedFizzBuzz = fizzBuzz(number)

			//expect
			expect(retrievedFizzBuzz).toBe(expectedFizzBuzz)
		})
	}),
		describe('Fizz', () => {
			it.each([
				[
					3
				],
				[
					6
				],
				[
					9
				],
				[
					12
				]
			])('should return Fizz when given %s', (number) => {
				const expectedFizzBuzz = 'Fizz'
				//act
				const retrievedFizzBuzz = fizzBuzz(number)

				//expect
				expect(retrievedFizzBuzz).toBe(expectedFizzBuzz)
			})
		}),
		describe('Buzz', () => {
			it.each([
				[
					5
				],
				[
					10
				],
				[
					20
				]
			])('should return Buzz when given %s', (number) => {
				const expectedFizzBuzz = 'Buzz'
				//act
				const retrievedFizzBuzz = fizzBuzz(number)

				//expect
				expect(retrievedFizzBuzz).toBe(expectedFizzBuzz)
			})
		}),
		describe('FizzBuzz', () => {
			it.each([
				[
					15
				],
				[
					30
				],
				[
					45
				]
			])('should return FizzBuzz when given %s', (number) => {
				const expectedFizzBuzz = 'FizzBuzz'

				const retrievedFizzBuzz = fizzBuzz(number)

				expect(retrievedFizzBuzz).toBe(expectedFizzBuzz)
			})
		})
})
