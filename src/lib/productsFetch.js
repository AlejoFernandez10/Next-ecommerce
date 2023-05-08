import clientPromise from ".";


let client
let db
let products

async function init(){
  if(db) return
  try{
    client = await clientPromise
    db = await client.db()
    products = await db.collection('prods')

  }catch(error){
    throw new Error('Fail to establich connection to the database')
  }
}


(async ()=>{
  await init()
})()


export async function getProducts(){
  try{
    if(!products) await init()
    const result = await products
    .find({})
    .toArray()

    return {products : result}
  }catch(error){
    return {error: 'Failed to fetch products'}
  }
}