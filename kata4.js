const instructorWithLongestName = function(instructors) {
  let nameLength = 0;
  let name = "";
  let course = "";
  instructors.forEach(instructor => {
   if(nameLength < instructor.name.length) {
     nameLength = instructor.name.length;
     name = instructor.name;
     course = instructor.course;
   }
 });

 return ("name: \"" + name + "\", course: \"" + course + "\"");
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
