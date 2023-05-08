import DiscoverMore from "@/components/DiscoverMore"
import Hero from "@/components/Hero"
import StartExploring from "@/components/StartExploring"
import NewsLetter from "@/components/collections/NewsLetter"
import { getProducts } from "@/lib/productsFetch"




export default async function Home() {

    async function fetchData(){
      const {products} = await getProducts()
      return products
    }
    
    const data = await fetchData()

    const dataParsed = JSON.parse(JSON.stringify(data))
    
  return (
    <main className={`flex min-h-screen flex-col z-50 items-center justify-between relative `}>
      
      <Hero />

      <DiscoverMore  data={dataParsed}/>

      <div className="px-5 w-full">

        <StartExploring  />

      </div>

      <NewsLetter />
    </main>
  )
}
