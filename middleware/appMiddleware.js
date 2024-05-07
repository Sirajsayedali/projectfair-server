
const appmiddleware =(req,res,next)=>{
    console.log('inside application middleware');
    next()
}
module.exports = appmiddleware