import { Beverage } from "../../models/beverages"
import { deleteBeverage } from "../apis/apiClient"
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function Beverages({ name, url, id }: Beverage ) {
  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteBeverage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['beverages'] })
    },
  })
  
  async function handleDelete(id: number, name: string) {
    deleteMutation.mutate( id )
    console.log(`${name} deleted successfully!`)
    alert(`${name} deleted successfully!`)
  }
  return (
      <ul>
      <a className="urlButton" href={ url }>
      { name } 
      </a>
      <button className="delButton" onClick={() => handleDelete( id, name )}>❌</button>
      </ul>
  )
}