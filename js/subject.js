// napisati konstruktro funkciju za subject sa jednim argumentom koji predstavlja naziv subject

function Subject(subjectName) {
    this.subjectName = subjectName;

}


// dodati prototype method getSubjectName koji vraca naziv subjecta

Subject.prototype.getSubjectName = function(){

    return this.subjectName;
}