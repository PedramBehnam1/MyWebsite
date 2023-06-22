const express = require('express');
const router = express.Router();
const photo = require('../controllers/files')


router.route('/all').get(photo.get_photos)
router.route('/add').post(photo.create_photo)
router.route('/:id').get(photo.get_photo).delete(photo.delete_photo).patch(photo.update_photo)


module.exports = router;