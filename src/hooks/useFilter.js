import { useSelector } from "react-redux"

const useFilter = (catg)=>{
    const products = useSelector((state)=>state.products.products)
    const filterProducts = products?.filter((item)=> item.category === `${catg}`) ||[] 
    return filterProducts
}
export default useFilter