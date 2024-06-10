import { Beverage } from "../../models/beverages"

import { deleteBeverage } from "../apis/apiClient"

export async function handleDelete(id: number) {
  await deleteBeverage(id)
}

export default function Beverages({name, url, id }: Beverage ) {
  return (
    <div>
      <ul>
      <a className="urlButton" href={ url }>
      {name} 
      </a>
      <button className="delButton" onClick={() => handleDelete(id)}>❌</button>
      </ul>
    </div>
  )
}