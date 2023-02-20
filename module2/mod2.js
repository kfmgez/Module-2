/*The small Guava Computer Store keeps track of its employees and the sales their employees make. 
The data is exported by their system into JSON format. An example of each is below.*/

//Employee: {"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"} 

//Sale: {"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}     

//Step 1: Create a Script
const employee1 = JSON.parse(`{"id":1, "firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}`);
const sale1 = JSON.parse(`{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}`);

//Step 2: Create Functions
function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}
function showSaleDetails (sale) {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}

//Step 3: Create a Constructor
function employee(firstName, lastName, gender, age, position){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.gender = gender;
    this.age = age;
    this.position  = position;
    this.showEmployeeDetails = function () {
        console.log(`Name: ${this.firstName} ${this.lastName}\nStaff ID: ${this.id}\nAge and Gender: ${this.age}, ${this.gender}\nPosition: ${this.position}`);
    }
 }


function sale(staffId, item, price, date){
    this.staffId = staffId;
    this.item = item;
    this.price = price,
    this.date = date;
    this.showSaleDetails = function () {
        console.log(`Staff Id: ${this.staffId}\n Item:${this.item}\nPrice: ${this.price}.\Date: ${this.price}`);
    }
}

//Step 3.1: Object 1
const sale2 = {
    staffId: 1,
    item: "Wi-Fi Adapter",
    price: 40.00,
    date: "03-09-2022"
}

//Step 3.2: Object 2
const employee2 = {
    id: 1,
    firstName: "Mary",
    lastName: "Sue",
    gender: "Female",
    age: 32,
    position: "Salesperson"
}

//Step 4: Make an Array
let employees = [employee1, employee2]
let sales = [sale1, sale2]

//Bonus Task 1 - See Step 3
console.log(employees);
console.log(sales);

//Bonus Task 2 - See Step 3

//Bonus Task 3 - convert the date string in the sales object and get that date's day of the week
let sold = new Date("03/09/2022");
let day = sold.toLocaleString('en-GB', {weekday: 'long'});
console.log(day);