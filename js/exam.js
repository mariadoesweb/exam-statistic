// write a constructor function with three arguments that represent a subject, a student, and a grade. 

function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

// add to its prototype a method getExamInfo that returns the name of the subject and the name and surname of the student.

Exam.prototype.getExamInfo = function() {

    return this.subject.subjectName + ', '+ this.student.name + ' ' + this.student.surname + ', ' + this.grade;
}

// add to its prototype a method hasPassed that checks if the student has passed the exam. A student has passed the exam if their grade is greater than 5.

Exam.prototype.hasPassed = function() {

    if(parseInt(this.grade) > 5) {
        return true;
    } else {
        return false;
    }
}