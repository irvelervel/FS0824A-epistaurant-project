import './App.css'
// allego il foglio di bootstrap, una volta per tutte
// se ve lo dimenticate, non saranno disponibili le classi di bootstrap!
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'

function App() {
  return (
    <div className="App">
      <header>
        {/* passo due prop: una per il sottititolo della navbar e una che setterà il valore di fluid per il suo container */}
        <CustomNavbar subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
    </div>
  )
}

export default App
