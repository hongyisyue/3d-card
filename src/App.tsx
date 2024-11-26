import './App.css'
import './components/FloatCard.css'
import FloatCard, { ElementInfo } from './components/FloatCard'

function App() {

  const fe: ElementInfo = {
    number: 26,
    ab: 'Fe',
    full_name: 'Iron',
    molar: 55.84,
    class: 'pink'
  }

  return (
    <>
      <FloatCard info={fe}></FloatCard>
    </>
  )
}

export default App
