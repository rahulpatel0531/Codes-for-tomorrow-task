const db = require('../models/index');
const Category = db.categories


// Description: Create a service
exports.createService = async (req, res) => {
    const { category_name } = req.body
    try {
        const category = await Category.create({ category_name });
        res.status(201).json({ category })
    } catch (error) {
        console.log('Create Category Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

// Description: Get all services list
exports.getAllServices = async (req, res) => {
    try {
        // Find all categories
        const categories = await Category.findAll();

        // if record not found
        if (!categories) {
            return res.status(404).json({ message: "Record not found" })
        }

        res.status(200).json({ categories })
    } catch (error) {
        console.log('Get Category Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}


// Description: Update a service
exports.updateService = async (req, res) => {    
    const categoryId = req.params.categoryId
    const { category_name } = req.body
    try {
        // Find a category based on primary key
        const category =  await Category.update({ category_name },
            {
              where: {
                id: categoryId,
              },
            },
          );

        res.status(200).json({ message: "Category Updated" })
    } catch (error) {
        console.log('Update Category Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

// Description: Delete a category based on categoryId
exports.deleteService = async (req, res) => {    
    const categoryId = req.params.categoryId
    try {
        // Find a category based on primary key
        const category =  await Category.destroy({
            where: {
              id: categoryId,
            },
          });

        res.status(200).json({ message: "Category Deleted" })
    } catch (error) {
        console.log('Delete Category Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}
