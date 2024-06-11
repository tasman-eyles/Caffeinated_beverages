import  Beverages  from './beverage.tsx'
import { useQuery } from '@tanstack/react-query'
import { fetchBeverages } from '../apis/apiClient'

export default function BeverageList() {
  const {
    data: beverages,
    isPending,
    isError
  } = useQuery({ queryKey: ['beverages'], queryFn: () => fetchBeverages() })

if (isError) {
  return <p>Error</p>
}
if (isPending) {
  return <p>Loading...</p>
}

return (
  <>
  {beverages.map((beverage, i) => {
    return (
      <Beverages key={i} name={beverage.name} id={beverage.id} url={beverage.url} />
    )
  })}
  </>
  )
} 
