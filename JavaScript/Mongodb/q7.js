const { ScrollRestoration } = require("react-router-dom");

db.post.insertMany([
  {
    _id: "p1",
    title: "Post 1"
  },
  {
    _id: "p2",
    title: "Post 2"
  }
]);



db.comments.insertMany([
    {
        _id: "c1",
        pid: "p1",
        text: "Comment 1"
    },
      {
        _id: "c2",
        pid: "p2",
        text: "Comment 2",
    },
      {
        _id: "c3",
        pid: "p3",
        text: "Comment 3"
    },
      {
        _id: "c4",
        pid: "p4",
        text: "Comment 4"
    },
      {
        _id: "c5",
        pid: "p5",
        text: "Comment 5"
    },
])

db.comments.updateMany(
  { },
  { $rename: { "text": "comments" } }
);
db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments"
        }
    },
    {
        $unwind: "$comments"
    },
    {
        $project: {
            _id: 0,
            post: 1,
            "comments.comments": 1
        }
    }
]);


// db.marks.insertMany{
//     {
//         name:"john",
//         term:"t1",
//         subject:"maths",
//         score:"98"
//     }
// }

marks
//name trem subject Scroe

john,t1,maths,98
john,t2,maths,90
john,t3,maths,88
john,t1,science,92
john,t2,science,82
john,t3,science,82
cathy,t1,maths,92
cathy,t2,maths,92
cathy,t3,maths,82
cathy,t1,science,92
cathy,t1,science,92
cathy,t1,science,80

db.marks.aggregate([
    { $group: { _id: "$name", AvgScore: { $avg: "$score" } } }
])


db.marks.aggregate([
    { $group: { _id:"$term", AvgScore: { $avg: "$score" } } },
            {$sort:{_id:1}}
])

db.marks.aggregate([
    { $group: { _id: "$subject", AvgScore: { $avg: "$score" } } }
])



db.marks.aggregate([
    {
        $group: {
            _id: { term: "$term", subject: "$subject" },
            avgScore: { $avg: "$score" }
        }
    },
    {
        $sort: { "_id.term": 1, "_id.subject": 1 } 
    }
]);
