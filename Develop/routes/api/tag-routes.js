const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const Tags = await Tag.findAll({
  // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(Tags)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const Tags = await Tag.findByPk(req.params.id,
      {
  // be sure to include its associated Product data
        include: [{ model: Product }]
      
      },
      );
    res.status(200).json(Tags)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json({
      newTag,
      message:" Congratulations, New Tag Added Successfully !!"
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value

  try {
    const UpdateTag = await Tag.update(req.body,
      {

    where: {
          id: req.params.id,
        },
      });
    res.status(200).json({
      UpdateTag,
      message:`Congratulations, The Tag has ben Updated Successfully !!`
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const DeleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(
      {DeleteTag,
      message :"Warings : You Just Have delete a Tag"})

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
