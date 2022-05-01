function sumSalary(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries).filter(Number)) {
    console.log(salary);
    if (salary != 'Infinity' && salary != '-Infinity') {
      sum += salary;
    }
  }
  return sum;
}
