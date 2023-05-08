var express = require('express');
var userRouter = express.Router();
const Student = require('../models/student');
const Professor = require('../models/professor');
const assignments = require('../models/assignments');
const courses = require('../models/courses');
const submissions = require('../models/submissions');
const passport = require("passport");
const Verify = require("./verify");
const Courses = require('../models/courses');



 userRouter.route('/professor/:professorId/courses/:courseId') 
//updating a course
.put(function(req,res){
    courses.findByIdAndUpdate(req.params.courseId,req.body,function(err,course){
        if (err)
        console.log(err);
    res.send("updated course")
    })
})
.get(function(req,res){
//getting a course
    courses.findById(req.params.courseId,function(err,course){
        if (err)
        console.log(err);
    res.send(course)
    })
})
.delete(function(req,res){
//deleting a course
    courses.findByIdAndDelete(req.params.courseId,function(err){
        if (err)
        console.log(err);
    res.send("deleted")
    })
}); 

 userRouter.route('/professor/:professorId/courses/:courseId/assignments')
//creating a assignment --done
.post(function(req,res){
    assignments.create(req.body,function(err,assignment){
        if (err)
        console.log(err);
    res.send(assignment)
    })
}); 

userRouter.route('/professor/:professorId/courses/:courseId/assignments/:assignmentId')
//retrieving assignment 
.get(function(req,res){
    assignments.findById(req.params.assignmentId,function(err,assignment){
        if (err)
        console.log(err);
    res.send(assignment)
        })
})
//updating assignment
.put(function(req,res){
    assignments.findByIdAndUpdate(req.params.assignmentId,req.body, function(err,assignments){
        if (err)
        console.log(err)
    res.send("updated assignment")
    })
})
//deleting assignment
.delete(function(req,res){
    assignments.findByIdAndDelete(req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send("deleted assignment")
    })
}); 


userRouter.route('/professor/:professorId/courses/:courseId/submissions')
//creating a submission
.post(function(req,res){
    submissions.create(req.body,function(err,submission){
        if (err)
        console.log(err);
    res.send(submission)
    })
}); 
//updating a submission --done
userRouter.route('/professor/:professorId/courses/:courseId/submissions/:submissionId')
.put(function(req,res){
    submissions.findByIdAndUpdate(req.params.submissionId, req.body,function(err,submission){
        if (err)
        console.log(err);
    res.send(submission)
    })
})
//retrieving a submision --done
.get(function(req,res){
    submissions.findById(req.params.submissionId,function(err,submission){
        if (err)
        console.log(err);
    res.send(submission)
    })
})
//deleting a submission --done
.delete(function(req,res){
    submissions.findByIdAndDelete(req.params.submissionId, req.body,function(err){
        if (err)
        console.log(err);
    res.send("Deleted")
    })
}); 

//using this to update course list
userRouter.route('/student/:studentId')
//updating student
.put(function(req,res){
    //console.log(req.body);
    Student.findByIdAndUpdate(req.params.studentId, req.body,function(err){
        if (err)
        console.log(err);
    res.send("updated student")
    });
})

//retrieving student
.get(function(req,res){
    console.log(req.params.studentId);
    Student.findById(req.params.studentId).then((result) => {
        res.send(result);
    });
})
//deleting a student
.delete(function(req,res){
    console.log(req.body);
    Student.findByIdAndDelete(req.params.studentId, req.body,function(err){
        if (err)
        console.log(err);
    res.send("deleted student")
    })
});

userRouter.route('/professor/:professorId')
//updating professor
.put(function(req,res){
    console.log(req.body);
    Professor.findByIdAndUpdate(req.params.professorId, req.body,function(err){
        if (err)
        console.log(err);
    res.send("updated professor")
    })
})
//retrieving professor
.get(function(req,res){
    console.log(req.body);
    Professor.findById(req.params.professorId,function(err,professor){
        if (err)
        console.log(err);
    res.send(professor)
    })
})
//deleting a professor
.delete(function(req,res){
    console.log(req.body);
    Professor.findByIdAndDelete(req.params.professorId, req.body,function(err){
        if (err)
        console.log(err);
    res.send("deleted professor")
    })
});


userRouter.route('/student/:studentId/courses/:courseId/assignments/:assignmentId')
//finding assignment by id --done 
.get(function(req,res){
    assignments.findById(req.params.assignmentId,function(err,assignments){
        if (err)
        console.log(err);
    res.send(assignments)
     });
}); 

//getting courses for specific user 
userRouter.route('/student/:studentId/courses')
.put(function(req,res){
    console.log(req.body.courses);
    Student.findByIdAndUpdate(req.params.studentId, {
        courses: req.body.courses
    }).then((result) => {
        console.log(result);
        res.send(result);
    })
})
.get(function(req,res) {
    Student.findById(req.params.studentId, function(err,courses){
        if(err)
        console.log(err);
    res.send(courses);
    })
});

userRouter.route('/professor/:professorId/courses')
.put(function(req,res){
    console.log(req.body.courses);
    Professor.findByIdAndUpdate(req.params.professorId, {
        courses: req.body.courses
    }).then((result) => {
        console.log(result);
        res.send(result);
    })
})
.get(function(req,res) {
    Professor.findById(req.params.professorId, function(err,courses){
        if(err)
        console.log(err);
    res.send(courses);
    })
});



//begins here
//Authenticates the login information
userRouter.post("/login", passport.authenticate("local"), async (req, res) => {
    console.log(req.body);
  await Student.findOne({ username: req.body.username })
    .then((student) => {
    
      const token = Verify.getToken(student);
      console.log(token);
      //console.log("student:::" + student._id);
      res.status(200).send(token);
      //res.send(body);
    })
    .catch((err) => {
       console.log(err); 
      res.send(err);
    });
});

//Logs the user out of the application
userRouter.post("/logout", async (req, res) => {
  req.logout();
  res.send({ message: "Successfully logged out" });
});

//Creates a student user account
userRouter.post("/signup", async (req, res) => {
  await Student.register(
    new Student({ firstname:req.body.firstname,lastname:req.body.lastname,username: req.body.username }),
    req.body.password
  )
    .then((student) => {
      passport.authenticate("local")(req, res, () => {
        const token = Verify.getToken(student);

        return res
          .status(200)
          .header("x-access-token", token)
          .header("access-control-expose-headers", "x-access-token")
          .send(student);
      });
    })
    .catch((err) => res.send(err));
});

//Creates a student user account
/* userRouter.post("/professor/signup", async (req, res) => {
    await Professor.registerProfessor(
      new Professor({ firstname:req.body.firstname,lastname:req.body.lastname,username: req.body.username }),
      req.body.password
    )
      .then((professor) => {
        passport.authenticate("local")(req, res, () => {
          const token = Verify.getToken(professor);
  
          return res
            .status(200)
            .header("x-access-token", token)
            .header("access-control-expose-headers", "x-access-token")
            .send(professor);
        });
      })
      .catch((err) => res.send(err));
  }); */



module.exports = userRouter;

