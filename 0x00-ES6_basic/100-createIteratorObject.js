export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employees = [];
  for (const key of Object.keys(allEmployees)) {
    employees = employees.concat(allEmployees[key]);
  }
  return employees;
}
