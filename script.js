const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const users = document.querySelector("#users");


// Add list from JSON file
fetch("people.JSON")
  .then(res => res.json())
  .then(data => {
    
  let people = data.people;
  for(var i=0; i<people.length; i++){
    let li = document.createElement("li");
    li.append(`${people[i].name} : ${people[i].email}`);
    users.append(li);
  }
    
});

btn.addEventListener("click", onSubmit);

function onSubmit(e) {
  if(nameInput.value === "" || emailInput.value === ""){
    msg.innerHTML = "Please fill in all fields";
    msg.classList.add("error");
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("error");
    }, 3000)
  } else {
    const li = document.createElement("li");
    li.append(`${nameInput.value} : ${emailInput.value}`);
    users.append(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}

/*
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function(){
  years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}

Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

function Magazine(title, author, year, month){
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Mag One", "John Doe", 1992, "May");
console.log(mag1);
mag1.revise("2008");
console.log(mag1.getSummary());

*/
/*
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  /*
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear){
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(){
    return "Barnes & Noble";
  }
  */
/*
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", 1992, "May");
console.log(mag1.getSummary());
*/