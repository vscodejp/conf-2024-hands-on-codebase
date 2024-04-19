/**
 * Practice 1:
 */

/**
 * 与えられた数値までのフィボナッチ数列を返す
 * @param n1 代1項
 * @param n2 代2項
 * @param n 生成する数列の長さ
 * @returns フィボナッチ数列配列
 */
export function fibonacci


/**
 * Practice 2
 */

type Japanese = {
  firstName: string;
  lastName: string;
}

type American = {
  firstName: string;
  middleName: string;
  lastName: string;
}

type Person = Japanese | American;

const introduce = (person: Person) => {
  if (/* person が Japanese 型の場合 */) {
      return `こんにちは、${person.lastName} ${person.firstName} です。`;
  } else {
      return `Hi, I'm ${person.firstName} ${person.middleName} ${person.lastName}.`;
  }
}


/**
 * Practice 3
 */

type Data<T> = T extends { type: 'special' } ? { info: string, extra: string } : { info: string };

function handleData<T>(data: Data<T>): string {
  return data.extra;
}

const myData = {
  type: 'special',
  info: 'Something important',
  extra: 'Additional info'
};

const result = handleData(myData);


/**
 * Practice 4
 */

export function