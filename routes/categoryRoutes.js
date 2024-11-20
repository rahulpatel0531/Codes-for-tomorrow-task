const express = require('express');
const { create, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { verifyToken } = require('../middlewares/jwtVerify');
const { createService, getAllServices, updateService, deleteService } = require('../controllers/serviceController');
const router = express.Router();

//  Add varifyToken middleware function to all the category routes
//  Category routes
router.post('/category', verifyToken, create);
router.get('/categories', verifyToken, getAllCategories);
router.put('/category/:categoryId', verifyToken,  updateCategory);
router.delete('/category/:categoryId', verifyToken,  deleteCategory);

// Service routes
router.post('/category/:categoryId/service', verifyToken, createService);
router.get('/category/:categoryId/services', verifyToken, getAllServices);
router.put('/category/:categoryId/service/:serviceId', verifyToken,  updateService);
router.delete('/category/:categoryId/service/:serviceId', verifyToken,  deleteService);


module.exports = router;


