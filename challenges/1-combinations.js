/*
 * Crea una función que encuentre todas las combinaciones de los números
 * de una lista que suman el valor objetivo.
 * - La función recibirá una lista de números enteros positivos
 *   y un valor objetivo.
 * - Para obtener las combinaciones sólo se puede usar
 *   una vez cada elemento de la lista (pero pueden existir
 *   elementos repetidos en ella).
 * - Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6
 *   Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)
 *   (Si no existen combinaciones, retornar una lista vacía)
 */

const findCombinations = (list = [], target) => {
  const optimizedList = list.filter((item) => item <= target).sort();
  const result = [];

  const findCombination = (sub, start) => {
    const sum = sub?.reduce((acc, curr) => (acc += curr), 0) || 0;

    if (sum === target) result.push(sub);

    for (let i = start; i < optimizedList.length; i++) {
      if (sum + list[i] <= target) findCombination([...sub, list[i]], i + 1);
    }
  };

  for (let i = 0; i < optimizedList.length; i++) {
    findCombination([list[i]], i + 1);
  }

  return result;
};

console.log(findCombinations([1, 5, 3, 2], 6));
