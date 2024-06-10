import BeverageList from "./BeverageList"
import BeverageForm from './BeverageForm'

function App() {
  return (
    <>
      <header className="header">
        <h1>Tasman's Collection of my Favourite Caffinated Beverages </h1>
      </header>
      <section className="main">
      <BeverageList />
      <BeverageForm />
      </section>
    </>
  )
}

export default App
 