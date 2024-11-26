import './App.css'
// allego il foglio di bootstrap, una volta per tutte
// se ve lo dimenticate, non saranno disponibili le classi di bootstrap!
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <header>
        {/* passo due prop: una per il sottititolo della navbar e una che setterà il valore di fluid per il suo container */}
        <CustomNavbar subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
      <main>
        {/* <div class="container"> */}
        <Container>
          {/* <div class="row"> */}
          <Row className="justify-content-center">
            {/* <div class="col"> */}
            <Col xs={12} md={8} lg={6}>
              {/* qui metto il carosello */}
              <MainContent />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
