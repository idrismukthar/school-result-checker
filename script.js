document.addEventListener("DOMContentLoaded", () => {
  // 10 Teacher Comments
  const teacherComments = [
    "Excellent performance this term. Keep it up!",
    "Shows great improvement in class participation.",
    "Needs to work harder on completing assignments.",
    "Very respectful and attentive in class.",
    "Should focus more on Mathematics.",
    "A natural leader among peers.",
    "Creative but needs better time management.",
    "Always submits work on time.",
    "Has potential but gets distracted easily.",
    "Pleasure to teach this student.",
  ];

  // 10 Principal Comments
  const principalComments = [
    "Outstanding academic record this session.",
    "A model student for others to follow.",
    "Should improve attendance and punctuality.",
    "Excellent behavior and attitude.",
    "Encourage to join more extracurricular activities.",
    "Shows promise but needs more consistency.",
    "One of our top-improving students.",
    "A valuable member of our school community.",
    "May benefit from extra tutoring sessions.",
    "Demonstrates excellent school spirit.",
  ];

  // ALL YOUR STUDENTS DATA
  const students = [
    {
      ExamNumber: 2500309,
      Password: "tlmps09",
      Name: "Ashaka Ikhlas Nifemi",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500309.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500318,
      Password: "tlmps18",
      Name: "Komolafe marvellous Olamide",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500318.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500320,
      Password: "tlmps20",
      Name: "Lawal Abdullah Opeyemi",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500320.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500326,
      Password: "tlmps26",
      Name: "Ogunbanjo Yusroh Dabira",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500326.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500327,
      Password: "tlmps27",
      Name: "Oguntowo Aliyah Goodnews",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500327.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500329,
      Password: "tlmps29",
      Name: "Oriola Azeezah Pelumi",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500329.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500331,
      Password: "tlmps31",
      Name: "Tijani Ayinla Naheem",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500331.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
    {
      ExamNumber: 2500332,
      Password: "tlmps32",
      Name: "Ogunleye Adebayo Olamide",
      Class: "JSS3 A",
      Department: "General",
      Position: "nil",
      Passport: "2500332.png",
      Mathematics: 95,
      English: 95,
      BST: 95,
      NVE: 95,
      "IRS/CRS": 95,
      PVS: 95,
    },
  ];

  // Add random comments to each student
  students.forEach((student) => {
    student.teacherComment = teacherComments[Math.floor(Math.random() * 10)];
    student.principalComment =
      principalComments[Math.floor(Math.random() * 10)];
  });

  // Login Function
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const examNumber = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value.trim();

    const student = students.find(
      (s) => s.ExamNumber.toString() === examNumber && s.Password === password
    );

    if (student) {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("resultSection").style.display = "block";
      showResults(student);
    } else {
      alert("Invalid Exam Number or Password");
    }
  });

  // Display Results
  function showResults(student) {
    // Student Info
    document.getElementById("studentName").textContent = student.Name;
    document.getElementById("displayStudentId").textContent =
      student.ExamNumber;
    document.getElementById("studentClass").textContent = student.Class;

    // Passport Photo - LOADING FROM "img" FOLDER
    document.getElementById("studentPhoto").src = `img/${student.Passport}`;
    document.getElementById("studentPhoto").alt = student.Name + " Passport";
    // Removed the redundant photo variable and its logic

    const printDateTime = new Date().toLocaleString();
    document.getElementById("printDateTime").textContent = printDateTime;

    // Subjects Table
    const table = document.querySelector("#resultsTable tbody");
    table.innerHTML = "";

    const subjects = [
      { name: "Mathematics", score: student.Mathematics },
      { name: "English", score: student.English },
      { name: "BST", score: student.BST },
      { name: "NVE", score: student.NVE },
      { name: "IRS/CRS", score: student["IRS/CRS"] },
      { name: "PVS", score: student.PVS },
    ];

    subjects.forEach((subject) => {
      const grade = getGrade(subject.score);
      const remark = getRemark(grade);

      const row = `
              <tr>
                  <td>${subject.name}</td>
                  <td>${subject.score}</td>
                  <td>${grade}</td>
                  <td>${remark}</td>
              </tr>
          `;
      table.innerHTML += row;
    });

    // Comments
    document.getElementById("teacherComment").textContent =
      student.teacherComment;
    document.getElementById("principalComment").textContent =
      student.principalComment;
  }

  // Grading System
  function getGrade(score) {
    if (score >= 75) return "A1";
    if (score >= 70) return "B2";
    if (score >= 65) return "B3";
    if (score >= 60) return "C4";
    if (score >= 55) return "C5";
    if (score >= 50) return "C6";
    if (score >= 45) return "D7";
    if (score >= 40) return "E8";
    return "F9";
  }

  function getRemark(grade) {
    const remarks = {
      A1: "Excellent",
      B2: "Very Good",
      B3: "Good",
      C4: "Credit",
      C5: "Credit",
      C6: "Credit",
      D7: "Pass",
      E8: "Weak Pass",
      F9: "Fail",
    };
    return remarks[grade];
  }
});
document.getElementById("downloadResult").addEventListener("click", () => {
  const element = document.getElementById("resultSection");

  // Get student name from the displayed result, assuming you show it somewhere
  const studentName =
    document.getElementById("studentName")?.textContent || "Student";

  const options = {
    margin: 0.5,
    filename: studentName + " Result.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
});
