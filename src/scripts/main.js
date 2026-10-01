'use strict';

const employeeList = [...document.querySelectorAll('li')];
const listParent = document.querySelector('ul');

const moneyParser = (money) =>
  Number(money.replaceAll('$', '').replaceAll(',', ''));

const sortList = (list) => {
  const sorted = list.sort(
    (item1, item2) =>
      moneyParser(item2.dataset.salary) - moneyParser(item1.dataset.salary),
  );

  listParent.replaceChildren(...sorted);
};

const getEmployees = (list) => {
  return list.reduce((object, employee) => {
    object.name = employee.innerText;
    object.position = employee.dataset.position;
    object.salary = employee.dataset.salary;
    object.age = employee.dataset.age;

    return object;
  }, {});
};

sortList(employeeList);
getEmployees(employeeList);
