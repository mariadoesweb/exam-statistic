// Write all code that connects a user behaviour with application logic. 

// write a function that collects all the data from the form

// click add


document.querySelector('.add-btn').addEventListener('click', function(){

    var selectSubject = selectSubjectItem.value;
    var studentNameAndSurname = nameAndSurnameItem.value.split(' ');
    var grade = gradeItem.value;
    var firstName = studentNameAndSurname[0];
    var lastName = studentNameAndSurname[1];
    var errorField = document.querySelector('.errors');
    var passField = document.querySelector('.passed');
    var failedField = document.querySelector('.failed');
    var totalStudents = document.querySelector('.exam-total span');
    var passedStudents = document.querySelector('.exam-passed-count');
    var failedStudents = document.querySelector('.exam-failed-count');
    var percentpassedStudents = document.querySelector('.exam-passed-percentage');
    var percentfailedStudents = document.querySelector('.exam-failed-percentage');


    console.log(lastName);
   
    // write a function that validates all collected data


    var error = {

        OK: 'OK',
        CHOOSE_SUBJECT: 'Subject is not selected',
        INSERT_NAME: 'Enter name',
        INSERT_SURNAME: 'Enter surname',
        SELECT_GRADE: 'Select grade'

    }


    function validation(subject, firstName, lastName, grade) {

        var valid = error.OK;

        if(subject == '-') {
            valid = error.CHOOSE_SUBJECT;
            errorField.innerHTML += error.CHOOSE_SUBJECT + "<br>";
        }
        if(firstName == '' || firstName[0] != firstName[0].toUpperCase()) {
            valid = error.INSERT_NAME;
            errorField.innerHTML += error.INSERT_NAME + "<br>";
        }
        if(lastName == undefined || lastName[0] != lastName[0].toUpperCase() ) {
            valid = error.INSERT_SURNAME;
            errorField.innerHTML += error.INSERT_SURNAME + "<br>";
        }
        if(grade == '') {
            valid = error.SELECT_GRADE;
            errorField.innerHTML += error.SELECT_GRADE + "<br>";
        }

        return valid;
    }

    var validationMessage = validation(selectSubject, firstName, lastName, grade);

    if(validationMessage == error.OK) {

        // objekat subject

         var subject = new Subject(selectSubject);

        // objekat student
        
         var student = new Student(firstName, lastName);

        // write a function that updates the part of the page with the statistics

        numberOfStudents++;
        totalStudents.innerHTML = numberOfStudents;


        // objekat exam

        var exam = new Exam(subject, student, grade);

        errorField.innerHTML = '';

        if(exam.hasPassed() == true) {
            passField.innerHTML += '<p class="item">' + exam.getExamInfo() + '</p>'; 
            numberOfPass++;
            passedStudents.innerHTML = numberOfPass;
            percentOfPass = numberOfPass/numberOfStudents * 100;
            percentpassedStudents.innerHTML = percentOfPass.toFixed(2) + '%';

            percentOfFailed = numberOfFailed/numberOfStudents * 100;
            percentfailedStudents.innerHTML = percentOfFailed.toFixed(2) + '%';

        } else {
            failedField.innerHTML += '<p class="item">' + exam.getExamInfo() + '</p>'; 
            numberOfFailed++;
            failedStudents.innerHTML = numberOfFailed;
            percentOfFailed = numberOfFailed/numberOfStudents * 100;
            percentfailedStudents.innerHTML = percentOfFailed.toFixed(2) + '%';

            percentOfPass = numberOfPass/numberOfStudents * 100;
            percentpassedStudents.innerHTML = percentOfPass.toFixed(2) + '%';
        }
    }

    

});














