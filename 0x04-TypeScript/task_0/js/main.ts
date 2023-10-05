interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John', 
    lastName: 'Doe',
    age: 35,
    location: 'East London'
}

const student2: Student = {
    firstName: 'Alex',
    lastName: 'Ambrose',
    age: 23,
    location: 'Washington DC'
}

const studentsList = [student1, student2];

console.log('Firstname', 'Location');

studentsList.forEach((student) => {
    console.log(student.firstName, student.lastName)
})