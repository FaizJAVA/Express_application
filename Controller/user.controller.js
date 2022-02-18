const Product =require('../Model/product');
exports.addProductPage = (request,response,next)=>{
    response.render("User-admin/addProduct",{
        username: ""
    });
 };
 exports.addProductPost = (request,response,next)=>{
   let product=  new Product();
   product.name = request.body.name;
   product.price = request.body.price;
   product.description = request.body.description;
   product.imageUrl = request.body.imageUrl;

   product.save()
   .then(result=>{
       response.send("Product Saved....");
   })
   .catch(err=>{
      response.send("Error.......");    
   });
 }; 