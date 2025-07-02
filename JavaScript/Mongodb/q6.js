db.employess.find(
    {salary:{$gt:400},department:"IT"},
    {name:1}
).limit(2).skip(1)

db.employess.find(
    {salary:{$gt:400},department:"IT"},
    {name:1,_id:0}
)
db.employess.find(
    {$or:[{salary:{$gt:400},department:"IT"}]},
    {name:1}
)


db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1}}
])
db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    {$limit:2},
])

db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    
])

db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    {$limit:2},
])

db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1,location:2}},
    {$sort:{name:1}},
    {$limit:2},
])
db.employees.aggregate([
    {$match:{salary:{$gt:300}}},
    {$project:{name:1,salary:1,location:2,points:1}},
    {$sort:{name:1}},
    {$limit:2},
])

db.employees.updateMany(
    {},
    {$addToSet:{location:"AP"}})


    db.employees.aggregate([{
        $project:{_id:0,name:1,location:1}
    }])

     db.employees.aggregate([{
        $project:{_id:0,name:1,location:1}
    },
         { $unwind:"$location"},
]);

db.employees.aggregate([
    {$project:{ _id:0,EmpName:"$name"}},
]);

db.employees.aggregate([
    {$project:{ _id:0,name:1,salary:1}},
]);

db.employees.aggregate([
    {$project:{ _id:0,name:1,salary:1,bonus:{$mutiply:["$salary,2"]}}},
]);

db.employees.aggregate([
    {$project:{name:0}},
]);


db,employees.aggregate([
    {$group:{_id:"$department",total:{sum:"salary"}}},
]);


db.orders.insertOne({
    empId: ObjectId("685bbd14e711176e07748a5f"),
    ordervalue: 8200
})

db.employees.aggregate([
    {$lookup:{
        from:"$orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }}
    
])
db.employees.aggregate([
    {
        $lookup: {
            from: "orders",          // Removed $ prefix
            localField: "_id",
            foreignField: "empId",
            as: "orders"
        }
    },
    {
        $unwind: "$orders"
    },
    {
        $project: {
            name: 1,
            "orders.ordervalue": 1   // Fixed quotes and field path
        }
    }
])


db.employees.find(
    {}, 
    { 
        location: 6,  
        _id: 6,
        orders:6,
        name: 6,

    }
)

db.employees.find({
    empId:6,
})




 db.employees.find({ email: "Rahul@gmail.com" }).explain("executionStats")


 db.employees.aggregate([
    {$group:{_id:{country:"$country",name:"$name"},
total:{$sum:"$score"}}}
 ])
 