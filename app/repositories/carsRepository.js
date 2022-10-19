const { cars } = require("../models");

const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'duoehn6px', 
    api_key: '573468728691948', 
    api_secret: 'iuj_i5b8XLiBi5GDtEtUPcqfe_0' 
  });

module.exports = {
  getAll(){
    return cars.findAll();
  },
  async create(body,image){    
    const fileBase64 =image.buffer.toString("base64");
    const file = `data:${image.mimetype};base64,${fileBase64}`;

    try {
      const result = await cloudinary.uploader.upload(file, { folder: 'image' });
      body.car_image = result.secure_url;

      return cars.create(body);
  } catch (err) {
      console.log(err);
      return res.status(400).json({
          message: 'Gagal upload file!',
      });
  }

  },
  update(body,id){
    return cars.update(body,{where:{id}})
  },
  delete(id){
    return cars.destroy({where:{id}})
  },
  getById(id){
    return cars.findByPk(id)
  }
  
   
};
 