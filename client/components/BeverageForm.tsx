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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['beverages'] })
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBeverage(e.target.value)
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

if (!newBeverage || !newUrl) {
  console.log("Please fill in both feilds before submitting")
  alert("Please fill in both feilds before submitting")
  return
  }

addMutation.mutate({
  name: newBeverage,
  url: newUrl,
  })
  console.log(`Added ${newBeverage} successfully! (refresh page)`)
  alert(`Added ${newBeverage} successfully! (refresh page)`)
}

  return (
    <>
    <h1 className='white-text'>⬇Add a Drink!⬇</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label className="black-text" htmlFor="name"><strong>Drink Name</strong></label>
        <input className='input' onChange={handleChange} value={newBeverage} id="name"></input>
        <label className="black-text" htmlFor="url"><strong>Url</strong></label>
        <input className='input' onChange={handleUrlChange} value={newUrl} id="url"></input>
        <button className='input black-text'><strong>Submit Beverage</strong></button>
      </form>
    </>
  )
}