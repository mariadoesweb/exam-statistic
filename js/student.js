// write a constructor function with two arguments that represent name and surname of a student 

function Student(name, surname) {

    this.name = name;
    this.surname = surname;
}

// add to its prototype a method getStudentData that returns the name and surname of the student

Student.prototype.getStudentData = function() {

    return this.name + this.surname;
}
