import { Video } from "../../models/videos"

export default function Videoes({name, id, url}: Video ) {
  return (
    <div>
      <a href={ url } >{name}</a>
      
      <p>{ id }</p>
    </div>
  )
}