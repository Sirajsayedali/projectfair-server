//1 import express

const express = require('express')

//import userController
const userController = require('../controllers/userController')
//import project controller
const projectController = require('../controllers/projectController')
//import jwtMiddleware
const jwtMiddleware = require('../middleware/jwtMiddleware')
//import multer
const multerConfig = require('../middleware/multerMiddleware')
//routing is created with the help of Routing() class present in express module

//2 create an object for Routing Class
const router = new express.Router() 

//3 set up path

//path for register request 
router.post('/user/register',userController.register)

//path to resolve login request
router.post('/user/login',userController.login)

//path to resolve add project request
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'), projectController.addProject )

//path to get home projectass
router.get('/home-project', projectController.getHomeProject)

//path to get all project
router.get('/all-project', jwtMiddleware, projectController.getAllProject)

//path to get user project
router.get('/user/all-project',jwtMiddleware,projectController.getUserProjects)

//path to delete user project
router.delete('/user-project/delete/:id',jwtMiddleware,projectController.deleteUserProject)

//path to 
router.put('/project/edit/:projectId', jwtMiddleware, multerConfig.single('projectImage'),projectController.editUserProject)

//path for profile update
router.put('/profile-update',jwtMiddleware, multerConfig.single('profile'), userController.profileUpdate)

//4 export router
module.exports = router