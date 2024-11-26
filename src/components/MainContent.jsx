import { Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
// ho importato l'array di oggetti di menu.json (le paste)
// con il nome di "pastasciutte"

const MainContent = () => {
  return (
    <Carousel>
      {pastasciutte.map((pasta) => {
        return (
          <Carousel.Item key={pasta.id}>
            <img
              src={pasta.image}
              alt={'delicious ' + pasta.name}
              className="img-fluid"
            />
            <Carousel.Caption>
              <h3>{pasta.name}</h3>
              <p>{pasta.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default MainContent
