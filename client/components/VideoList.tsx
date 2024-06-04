import { Video } from "../../models/videos";
import  Videoes  from './Videoes.tsx'


export default function VideoList() {
  const videos = [
    {
      id: 1,
      name: 'lady',
      url: 'https://youtu.be/_bUG6jhT2W4?si=spgXGh8bGgyKMScp',
    },
    {
      id: 2,
      name: 'jimmy',
      url: 'https://youtu.be/LB871SVYMhI?si=G7ZEEDkH2xfYgAVi',
    },
    {
      id: 3,
      name: 'sea bear',
      url: 'https://youtu.be/shrcT1EN4Sc?si=XOirFnUQpvXxQPN6',
    },
  ] as Video[]

return (
  <>
  {videos.map((video, i) => {
    return (
      <Videoes key={i} name={video.name} id={video.id} url={video.url} />
    )
  })}
  </>
)

} 
