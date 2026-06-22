const developer = {
    name:"Lenny",
    age:22,
    skills:[
        "React",
        "Node",
        "Python"
    ]
}

const {name, age, skills} = developer;
skills.push("Typescript");


function lenny() {
    console.log(developer.name + " is a developer ");
}

lenny();    

skills.map(skill => console.log("I know " + skill));