const s1 = {
    name : "Raju",
    age : 24,
    fees_paid : 25000,
    work_experience : {
        ABC : "2 Years",
        XYZ : "3 Years",
    },
    marks : {
         Maths : 90,
         English: 70,
    },
    percentage : ["Sem I = 84", "Sem II = 90", "Sem III = 84"],
    performance : () => console.log("Good"),
}
console.log(s1.name);
console.log(s1.age);
console.log(s1.fees_paid);
console.log(s1.work_experience);
console.log(s1.work_experience.ABC);
console.log(s1.work_experience.XYZ);
console.log(s1.marks);
console.log(s1.marks.Maths);
console.log(s1.marks.English);
console.log(s1.percentage);
console.log(s1.percentage[0]);
console.log(s1.percentage[1]);
console.log(s1.percentage[2]);
console.log(s1.performance());
