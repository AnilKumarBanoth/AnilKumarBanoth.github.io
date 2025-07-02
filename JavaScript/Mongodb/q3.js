db.employees.find()
db.employees.find().skip(1)
db.employees.find().limit(1)
db.employees.find().skip(2).limit(1)
db.employees.find({department:"IT"})
db.employees.find({salary:{$gt:3000}})
db.employees.find({salary:{$gt:3000, $lt:4000}})
db.employees.find(
    {salary:{$lte:3000}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lte:300},department:"government"},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or:[{},{}]}
)

db.employees.find(
    {$and:[{},{}]}
)
db.employees.find(
    {$and:[{},{}]}
)

db.employees.find({department:{$ne:"IT"}}

)