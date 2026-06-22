const skills = [
    "Python",
    "React",
    "Node.js",
    "Databases"
]

skills[0]; // Output: Python
skills.push("JavaScript");
console.log(skills); // Output: ["Python", "React", "Node.js", "Databases", "JavaScript"]

for (const skill of skills) {
    console.log(skill);
}


