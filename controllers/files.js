

// const Photo = require('../models/Photo')
const Photo = require('../models').Photo;

module.exports = {
    get_photos: async function(req,res,next){
        try {
            console.log(req.body);
            let photos = await Photo.findAll({});
            console.log(88888);
            photos= JSON.parse(JSON.stringify(photos))
            // res.send("Good Morning.21221.")
            res.status(200).json({ photos })
        } catch (error) {
            res.status(500).json({error: error});
        }
    },
    create_photo: async function(req,res) {
        try {
            let {name,image}= req.body;
            const createdAt = new Date();
            const updatedAt = new Date();

            const photo = await Photo.create({name,image,createdAt,updatedAt})
            res.status(201).json({photo})
        } catch (error) {
            res.status(500).json({error: error});
        }
    },
    get_photo: async function(req,res) {
        try {
            const {id:photoId}= req.params;
            console.log(photoId);
            const photo = await Photo.findOne({where:{id:photoId}})
            if (!photo) {
                res.status(404).json({msg: `No photo with id: ${photoId}`});
            }
            res.status(200).json({photo})
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    delete_photo: async function(req,res) {
        try {
            const {id}= req.params;
            const photo = await Photo.destroy({where:{id}})
            if (!photo) {
                res.status(404).json({msg: `No photo with id: ${id}`});
            }
            res.status(200).json({photo})
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    update_photo: async function(req,res) {
        try {
            const {id}= req.params;
            
            let {name,image}= req.body;
            const createdAt = new Date();
            const updatedAt = new Date();

            const photo = await Photo.update({name,image,createdAt,updatedAt},{where:{id}})
            
            if (!photo) {
                res.status(404).json({msg: `No photo with id: ${id}`});
            }
            res.status(200).json({photo})
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}