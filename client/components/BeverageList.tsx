import { Beverage } from "../../models/beverages.ts";
import  Beverages  from './beverage.tsx'

export default function BeverageList() {
  const beverages = [
    {
      id: 1,
      name: 'White Monster',
      url: 'https://www.woolworths.co.nz/shop/productdetails?stockcode=489787&name=monster-energy-drink-zero-ultra',

    },
    {
      id: 2,
      name: 'Green V Energy Sugarfree',
      url: 'https://www.thewarehouse.co.nz/p/v-energy-drink-sugarfree-250ml/R671491.html',
    },
    {
      id: 3,
      name: 'Blue V ebergy Sugarfree',
      url: 'https://www.woolworths.co.nz/shop/productdetails?stockcode=108466&store=9508&gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRO6Q1iOdXJPM7MfON-1HMm7ACTXr45K_F0qt6iof9QN33mcw1dZd9MaAp0OEALw_wcB&gclsrc=aw.ds',
    },
    {
      id: 4,
      name: 'C4 Pre-workout (all flavours)',
      url: 'https://www.sprintfit.co.nz/product/5157/cellucor-c4-carbonated-on-the-go-single-can',
    },
    {
      id: 5,
      name: 'Musashi Energy (all flavours)',
      url: 'https://www.woolworths.co.nz/shop/productdetails?stockcode=178085&name=musashi-energy-drink-blue-raspberry-zero-sugar',
    },
    {
      id: 6,
      name: 'ABE (all flavours)',
      url: 'https://abenation.com/products/abe-energy-drink-12pk',
    },
  ] as Beverage[]

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
