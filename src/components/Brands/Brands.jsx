import { useContext } from "react"
import { BrandContext } from "../../contexts/BrandContext"
import './Brands.css'

export const Brands = () => {
 const brands = useContext(BrandContext)
  return (
    <div className="brands-main-container">
      <h3>Shop By Brands</h3>
      <div className="brands-container">
      {
        brands.map((item) => {
          return(
            <div key={item.id}>  
              <img src={item.image} alt="brand" />
            </div>
          )
        })
      }
    </div>
    </div>
  )
}
