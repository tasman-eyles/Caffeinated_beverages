import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { BeverageData } from '../../models/beverages'
import { addNewBeverage } from '../apis/apiClient'

export default function BeverageForm() {
  const [newBeverage, setNewBeverage] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (beverage: BeverageData) => addNewBeverage(beverage),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['beverages'] }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBeverage(e.target.value)
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addMutation.mutate({
      name: newBeverage,
      url: newUrl,
    })
  }

  return (
    <>
    <h2>Add a Drink!</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Drink Name</label>
        <input className='input' onChange={handleChange} value={newBeverage} id="name"></input>
        <label htmlFor="url">Url</label>
        <input className='input' onChange={handleUrlChange} value={newUrl} id="url"></input>
        <button className='input'>Submit Beverage</button>
      </form>

    </>
  )
}