import { Beverage } from "../../models/beverages"

import { deleteBeverage } from "../apis/apiClient"

export async function handleDelete(id: number, name: string) {
  await deleteBeverage( id )
  console.log(`${name} deleted successfully! (refresh page)`)
  alert(`${name} deleted successfully! (refresh page)`)
}

export default function Beverages({ name, url, id }: Beverage ) {
  return (
      <ul>
      <a className="urlButton" href={ url }>
      { name } 
      </a>
      <button className="delButton" onClick={() => handleDelete( id, name )}>❌</button>
      </ul>
  )
}