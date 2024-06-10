import { Beverage } from "../../models/beverages"

export default function Beverages({name, id, url}: Beverage ) {
  return (
    <div>
      <a href={ url } >
      {name} 
      </a>

      <p>{ id }</p>
    </div>
  )
}