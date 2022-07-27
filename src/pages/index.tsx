import type { NextPage } from 'next'
import Lista from '../components/Lista'
import Item from '../components/Item'

const Home: NextPage = () => {
  return (
    <div>
      <Lista>
        <Item>
          Pizza
        </Item>
        <Item>
          Sorteve
        </Item>
        <Item>
          Iogurte
        </Item>
      </Lista>
    </div>
  )
}

export default Home