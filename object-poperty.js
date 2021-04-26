const student =[
    {id: 21, name: "DeepJol"},
    {id: 31, name: "HipJol"},
    {id: 41, name: "TitaJol"},
    {id: 51, name: "MisteJol"},
];

// // const [{name}] =student;
// // console.log(student)

// const nameArrey =[];
// for(let i=0; i<=student.length; i++){
//     const object = student[i];
//     console.log(object);

//     const screen = object;
    
  
//     // nameArrey.push(result)
// }

// // console.log(nameArrey)



const names = student.map(s => s.name);
const ids= student.map(s => s.id);
const bigger =student.filter(s => s.id>40);
const finder = student.find(s => s.id>45)
console.log(finder);