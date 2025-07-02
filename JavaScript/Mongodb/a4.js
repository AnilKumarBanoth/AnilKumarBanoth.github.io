db.employees.insertMany([
{
    name: "bharath",
    email:"bh@gmail.com",
    department: "HR",
    salary:2000,
    location: ["PJ", "DL"],
    date: Date(),
},
{
name: "Vijay",
    email:"Vijay@gmail.com",
    department: "Admin",
    salary:20000,
    location: ["TP", "AR"],
    date: Date(),
},
]);

db.employees.find({department:{$nin:["Admin", "HR"]}});
db.employees.find({department:{$in:["Admin", "HR"]}});