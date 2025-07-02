db.employees.updateOne({email:"Anil@gmail.com"},{$set:{salary:400000}})

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)

db.employees.updateOne(
    {name:"Rahul"},
    {age:30},
    {email:"Rahul@gmail.com"},
    {$set:{department:"HR"}},
    {upsert:true}

);
db.employees.deleteOne({email:"Vijay@gmail.com"})
db.employees.find({salary:{$gt:40000}})
db.employees.find().sort({name:1})
db.employees.find().sort({name:-1})
db.employees.find().sort({salary:-1}).limit(1)

db.employees.updateMany({},{$rename: {points: "scroe"}});
db.employees.updateMany({},{$unset: {score: ""}});
db.employees.find({},{name:1,location:1})

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:5}}
)

db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:{$gt:5}}}
)

db.employees.updateMany(
    {},
    {$pop:{locatio:-1}}
)