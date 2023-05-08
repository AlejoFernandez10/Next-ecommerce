/* import { initMongoose } from "@/lib";
import Prod from "@/models/productSchema";


export async function GET(request,res){
  
  const {method} = request
  await initMongoose()

  if(method === 'POST'){
      const {name, description, price, category, reviews, stars, img} = req.body

      const addDocument = await Prod.create({
        name, description, price, category, reviews, stars, img
      })
      
     return new Response.json(addDocument)
    }


}  */