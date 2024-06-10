import { Beverage } from "../../models/beverages"

export default function Beverages({name, url}: Beverage ) {
  return (
    <div>
      <a href={ url }>
      {name} 
      </a>
    </div>
  )
}