interface Data {
  group: number;
  name: string;
}

const array: Data[] = [
  { group: 1, name: 'a' },

  { group: 1, name: 'b' },

  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function regroup<T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): IGroup<T> {
  return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let currentElement = map[itemKey];
    if (Array.isArray(currentElement)) {
      currentElement.push(item);
    } else {
      currentElement = [item];
    }
    map[itemKey] = currentElement;
    return map;
  }, {});
}
