const router = require('express').Router();
const { Category, Product } = require('../../models/index');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  try {
    const Catgories = await Category.findAll({
        // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(Catgories)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  

});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try {
    const Catgories = await Category.findByPk(req.params.id,
      {
          // be sure to include its associated Products
        include: [{ model: Product }]
      
      },
      );
    res.status(200).json(Catgories)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({
      newCategory,
      message:" Congratulations, New Category Added Successfully !!"
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const UpdateCategory = await Category.update(req.body,
      {

    where: {
          id: req.params.id,
        },
      });
    res.status(200).json({
      UpdateCategory,
      message:" Congratulations, The Category has ben Updated Successfully !!"
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value

  try {
    const DeleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(
      {DeleteCategory,
      message :"Warings : You Just Have delete a Category"})

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }



});

module.exports = router;
