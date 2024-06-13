import connection from './connection'
import { Beverage, BeverageData } from '../../models/beverages.ts'

const db = connection

export function getBeverages(): Promise <Beverage[]> {
  return db('beverages').select()
}

export function getBeveragesById(id: number): Promise<Beverage> {
  return db('beverages').where({ id }).select().first()
}

export function createBeverage(beverage: BeverageData) {
return db('beverages').insert(beverage)
}

export function deleteBeverage(id: number): Promise<BeverageData> {
  return db('beverages').where({ id }).del()
}