import { Router } from 'express'
import * as db from '../db/db'
import { BeverageData } from '../../models/beverages'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getBeverages()
    res.json(data)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await db.getBeveragesById(id)
    res.json(data)
  } catch (error) {
    console.error(`Database error ${error}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const data: BeverageData = req.body
    await db.createBeverage(data)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteBeverage(id)
    res.json('deleted beverage')
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

export default router
