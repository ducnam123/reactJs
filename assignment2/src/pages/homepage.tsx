import Product from "../components/product"
import {getAll} from '../api/product'
import { useEffect, useState } from "react"
import { IProduct } from "../models"


const HomePage = () => {
    
    const [products,setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const {data} = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return <div>

<img src="\public\slider1.png" alt="" className="w-[1350px] h-[400px] mx-[35px] my-[20px]"/>

        <h1 className="ml-[35px] mb-[20px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-5 gap-1">
            {products.map((product) => <Product
    data= {product}
            key={product.id}/>)}
        </div>
    </div>
}

export default HomePage