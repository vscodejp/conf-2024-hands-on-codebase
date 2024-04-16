/**
 * Practice 1:
 */

function fibonacci(n: number): number[] {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}


/**
 * Practice 2
 */

type Japanese = {
    kind: 'japanese';
    firstName: string;
    lastName: string;
}

type American = {
    kind: 'american';
    firstName: string;
    middleName: string;
    lastName: string;
}

type Person = Japanese | American;

const introduce = (person: Person) => {
    if (person.kind === 'japanese') {
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
    if ('extra' in data) {
        return data.extra;
    }
    throw new Error("Property 'extra' does not exist on type '{ info: string; }'.");
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