import request from "superagent"
import { Beverage, BeverageData } from "../../models/beverages"

const rootURL = '/api/v1/beverages'

export async function fetchBeverages(): Promise<Beverage[]> {
  try {
    const res = await request.get(rootURL)
    return res.body
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchBeverageById(id: number): Promise<Beverage> {
  try {
    const res = await request.get(`${rootURL}/${id}`)
    return res.body
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function addNewBeverage(newBeverage: BeverageData) {
  try {
    await request.post(rootURL).send(newBeverage)
  } catch (error) {
    console.error(error)
    throw error
  }
}