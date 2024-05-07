//1.import multer
const multer = require('multer')

//2.create storage space
 const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
    callback(null,"./uploads") // the location where the uploaded files should be locally stored
    },
    filename:(req,file,callback)=>{
        //Date.now() - returns time in millisecs from jan 1 1970
      filename=`image-${Date.now()}-${file.originalname}`
      console.log(filename);  
      callback(null,filename)
    }
 })
 //3.file filter
  const fileFilter=(req,file,callback)=>{
   if (file.mimetype==='image/png'|| file.mimetype==='image/jpeg'|| file.mimetype==='image/jpg'){
         callback(null,true)
   }
   else{
    callback(null,false)
    return callback(new Error("only png,jpeg,jpg are allowed"))
   }
  }
  //4. create multer configuration.
   const multerConfig = multer({
    storage,
    fileFilter
   })
   
   module.exports = multerConfig
