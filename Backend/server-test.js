//code was modified from practice 4**
const student = require('../models/student');
const professor = require('../models/professor');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');

/* //getting all users
users.find({},(err,user)=>{
    if(err) throw err;
        console.log(json(user));
});

//finding user by specific id
users.findById("6421e64c32ba48d405204a53",function(err,user){
        if (err)
        console.log(err);
        console.log(user);
    });
//updating a user
users.findByIdAndUpdate("6421e64c32ba48d405204a53", req.body, function(err,user){
        if (err)
        console.log(err);
        console.log(user);
    });
//deleting a user
users.findByIdAndDelete("6421e64c32ba48d405204a53", function(err,user){
        if (err)
            console.log(err);
        console.log(user);
    });
//getting all assignments
assignments.find({},(err,assignment)=>{
    if(err) throw err;
    console.log(assignment);});
//finding assignment by id
assignments.findById("01",function(err,assignment){
    if (err)
        console.log(err);
    console.log(assignment);
    });
//updating an assignmnet by id
assignments.findByIdAndUpdate("6421ea09163f96181cb0f228", {title:"assignment1",description:"blahblah",dueDate:"06/06/2023"}, function(err,assignment){
        if (err)
        console.log(err);
        console.log(assignment);
    });
//finding an assignment by id and deleting it
assignments.findByIdAndDelete("6421ea09163f96181cb0f228", function(err,assignment){
        if (err)
            console.log(err);
        console.log(assignment);
    });
//getting all submissions
submissions.find({},(err,submission)=>{
    if(err) throw err;
    console.log(submission);
});
//finding submission by id
submissions.findById("6421ea09163f96181cb0f347",function(err,submission){
    if (err)
        console.log(err);
    console.log(submission);
    });
//finding a submission by id and updating it
submissions.findByIdAndUpdate("6421ea09163f96181cb0f345", {username:"eee",assignmentTitle:"assignment1",grade:"A"}, function(err,submission){
        if (err)
        console.log(err);
        console.log(submission);
    });
//finding a submission and deleting it
submissions.findByIdAndDelete("6421ea09163f96181cb0f346", function(err,submission){
        if (err)
            console.log(err);
        console.log(submission);
    });
//finding all courses
courses.find({},(err,course)=>{
    if(err) throw err;
    console.log(course);
  });
//finding course by id 
courses.findById("6421ea09163f96181cb0f350",function(err,course){
    if (err)
        console.log(err);
    console.log(course);
    });
//finding course by id and updating it
courses.findByIdAndUpdate("6421ea09163f96181cb0f350", {courseCode:"91011",courseTitle:"CSC245"}, function(err,submission){
        if (err)
        console.log(err);
        console.log(submission);
    });
//finding a course by id and deleting it
submissions.findByIdAndDelete("6421ea09163f96181cb0f346", function(err,submission){
        if (err)
            console.log(err);
        console.log(submission);
    });
 */

