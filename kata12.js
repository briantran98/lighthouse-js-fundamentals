const organizeInstructors = function(instructors) {
  let department = {};
  instructors.forEach(instructor => {
    if(instructor.course in department) {
      department[instructor.course].push(instructor.name);
    } else {
      department[instructor.course] = [instructor.name];
    }
  });
  return department;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
