# Noviembre 05 - 12

Para esta semana vamos a empezar por ejercicios muy simples y poco a poco iremos escalando en complejidad. Para dar por completado este ejercicio se ha de resolver todos los 
ejercicios planteados a continuacion.

> [!WARNING]  
> Todos los test han de llevar sus respectivos test unitarios usando [jest](https://jestjs.io/).


# Ejercicios


> [!NOTE]  
> Todo test unitario ha de contener un [describe](https://jestjs.io/docs/api#describename-fn) y al menos 3 test individuales.

```js
describe.only('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });

  // other test cases...
});
```

> [!NOTE]  
> Contemplar casos donde la funcion espera un dato pero recibe otro distinto,  lo cual puede resultar en un error.

Esta funcion contempla escenarios donde el usuario ingresa datos incorrectos
```js
function calculateAreaOfCircle(radius) {
  if (typeof radius !== 'number') {
    throw new Error('El radio debe ser un número');
  }
  if (radius <= 0) {
    throw new Error('El radio debe ser un número positivo');
  }
  return Math.PI * Math.pow(radius, 2);
}
```


Aquì testeamos nuestra funcionalidad anterior

```js
describe('calculateAreaOfCircle', () => {
  
  test('debería calcular el área correctamente para un radio válido', () => {
    expect(calculateAreaOfCircle(3)).toBeCloseTo(28.274, 3); // Área esperada: π * 3^2 ≈ 28.274
  });

  test('debería lanzar un error si el radio no es un número', () => {
    expect(() => calculateAreaOfCircle('a')).toThrow('El radio debe ser un número');
  });

  test('debería lanzar un error si el radio es negativo o cero', () => {
    expect(() => calculateAreaOfCircle(-1)).toThrow('El radio debe ser un número positivo');
    expect(() => calculateAreaOfCircle(0)).toThrow('El radio debe ser un número positivo');
  });
});
```

## 1. Contar las vocales en una cadena
Escribe una función `countVowels(str)` que reciba una cadena de texto y devuelva el número total de vocales (a, e, i, o, u) en la cadena. La función debe ser sensible a las mayúsculas y minúsculas.

```js
countVowels('Hola Mundo'); // Debería devolver 4
```


## 2. Verificar si un número es primo
Escribe una función `isPrime(n)` que reciba un número entero n y devuelva true si el número es primo, o false si no lo es.

Ejemplo:
```js
isPrime(5);  // Debería devolver true
isPrime(10); // Debería devolver false
```

## 3. Sumar los números en un array
Escribe una función `sumArray(arr)` que reciba un array de números y devuelva la suma total de los números en el array.

Ejemplo:

```js
sumArray([1, 2, 3, 4]); // Debería devolver 10
sumArray([10, 20, 30]); // Debería devolver 60
```


## 4. Invertir una cadena
Escribe una función `reverseString(str)` que reciba una cadena de texto y devuelva la misma cadena pero con los caracteres en orden inverso.

Ejemplo:
```js
reverseString('Hola'); // Debería devolver 'aloH'
reverseString('JavaScript'); // Debería devolver 'tpircSavaJ'
```


## 5. Encontrar el número más grande en un array
Escribe una función `findMax(arr)` que reciba un array de números y devuelva el número más grande en el array.

Ejemplo:

```js
findMax([1, 3, 7, 2, 5]);  // Debería devolver 7
findMax([10, 20, 30, 5]);  // Debería devolver 30
```









