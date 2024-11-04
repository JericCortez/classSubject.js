function collectClassInfo() {

    let classInfo = {};

    classInfo.subject = prompt("DATA STRUCTURES AND ALGORISTHMS:");

    classInfo.schedule = {
        time: prompt("01:00-02:30 pm:"),
        days: prompt("Tuesday & Thursday:")
    };

    classInfo.classroom = prompt("com lov A:");

    classInfo.instructor = prompt("VJ Barayuga:");

    classInfo.studentName = prompt("Jeric Ayson:");

    console.log("Class Information Collected:", classInfo);
    return classInfo;
}

collectClassInfo();
