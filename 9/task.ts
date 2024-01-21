interface DataItem {
  id: number;
  name: string;
}

const data: DataItem[] = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

function sortData(data: DataItem[], sortOrder: '+' | '-'): DataItem[] {
  const sortedData = [...data];

  if (sortOrder === '+') {
    return sortedData.sort((a, b) => a.id - b.id);
  } else if (sortOrder === '-') {
    return sortedData.sort((a, b) => b.id - a.id);
  } else {
    throw new Error('Error occured');
  }
}
