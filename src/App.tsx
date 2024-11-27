import './App.css'
import './components/FloatCard.css'
import FloatCard from './components/FloatCard'
import { ElementInfo } from './utils/Typs'
import fe_img from './images/Fe.png'

function App() {

  const fe: ElementInfo = {
    number: 26,
    ab: 'Fe',
    full_name: 'Iron',
    molar: 55.84,
    color_class: 'pink',
    img: fe_img
  }

  return (
    <>
      <FloatCard info={fe}></FloatCard>
    </>
  )
}

export default App
