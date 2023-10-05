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

const table = document.getElementById('table');
const tbody = document.getElementById('tableBody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const col1 = document.createElement('td');
    col1.textContent = student.firstName;

    const col2 = document.createElement('td');
    col2.textContent = student.location;

    row.appendChild(col1);
    row.appendChild(col2);

    tbody.appendChild(row);
});