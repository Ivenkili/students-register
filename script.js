let students = [
    {
        name: "ola",
        class: "jss3",
        score: 80,
        age: 14,
    },
    {
        name: "mike",
        class: "jss2",
        score: 90,
        age: 15,
    },
    {
        name: "james",
        class: "jss1",
        score: 85,
        age: 16,
    },
    {
        name: "sarah",
        class: "jss3",
        score: 95,
        age: 14,
    },
    {
        name: "john",
        class: "jss2",
        score: 70,
        age: 15,
    },
    {
        name: "mary",
        class: "ss1",
        score: 75,
        age: 16,

    }
]

const allStudentsDiv = document.getElementById("all-students");

// Loop through the students and create elements for each one
students.forEach(student => {
    const studentDiv = document.createElement("div");
    studentDiv.textContent = `${student.name} - ${student.class} - Score: ${student.score}`;
    allStudentsDiv.appendChild(studentDiv);
});

const studebtsByClassDiv = document.getElementById('class-wise');
const classWise = {};
students.forEach(student => {
    if (!classWise[student.class]) {
        classWise[student.class] = [];
    }
    classWise[student.class].push(student);
});
for (const className in classWise) {
    const classDiv = document.createElement("div");
    classDiv.textContent = `Class: ${className}`;
    studebtsByClassDiv.appendChild(classDiv);
    classWise[className].forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.textContent = `${student.name} - Score: ${student.score}`;
        classDiv.appendChild(studentDiv);
    });
}

// by grade
const studentsByGradeDiv = document.getElementById('grade-wise');
const gradeWise = {};
students.forEach(student => {
    if (!gradeWise[student.score]) {
        gradeWise[student.score] = [];
    }
    gradeWise[student.score].push(student);
});

// Loop through the gradeWise object and create elements for each grade
// and its students
for (const grade in gradeWise) {
    const gradeDiv = document.createElement("div");
    gradeDiv.textContent = `Grade: ${grade}`;
    studentsByGradeDiv.appendChild(gradeDiv);
    gradeWise[grade].forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.textContent = `${student.name} - Class: ${student.class}`;
        gradeDiv.appendChild(studentDiv);
    });
}