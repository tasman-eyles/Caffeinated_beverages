import BeverageList from "./BeverageList"
import BeverageForm from './BeverageForm'

function App() {
  return (

    <>
  <div className="center-container">
      <header className="white-text">
        <h1>Tasman's Collection of my Favourite Caffinated Beverages </h1>
      </header>
      <section>
        <div className="box">
          <BeverageList />
        </div>

      <BeverageForm />
      </section>
  </div>
    </>

  )
}

export default App
 