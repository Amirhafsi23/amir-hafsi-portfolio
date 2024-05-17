// Toggle About Section
document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
});

// Image Slider for Projects
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });
}
showProject(currentProjectIndex);

document.getElementById('next-project').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});

document.getElementById('prev-project').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});

// Form Submission Handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Add more form submission logic here
});

// Base Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Student constructor inheriting from Person
function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

// Setting up the inheritance chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Adding a method to the Student prototype
Student.prototype.study = function() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
};

// Teacher constructor inheriting from Person
function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

// Setting up the inheritance chain
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Adding a method to the Teacher prototype
Teacher.prototype.teach = function() {
    console.log(`${this.name} teaches ${this.subject}.`);
};

// Demonstrating the inheritance chain
const student1 = new Student('Alice', 20, 'A');
student1.greet();
student1.study();

const teacher1 = new Teacher('Mr. Smith', 45, 'Math');
teacher1.greet();
teacher1.teach();
