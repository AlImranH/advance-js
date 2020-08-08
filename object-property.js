const student = [
    {id: 141, name: 'Al Imran Hossain'},
    {id: 142, name: 'Ferdaos'},
    {id: 143, name: 'Riyad Rayhan'}
];

const names = student.map(name => name.name);
console.log(names);

const ids = student.map(sid => sid.id);
console.log(ids);

const bigger = student.filter(s => s.id > 141);
console.log(bigger);