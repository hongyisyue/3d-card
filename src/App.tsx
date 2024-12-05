import './App.css'
import './components/FloatCard.css'
import FloatCard from './components/FloatCard'
import { ElementInfo } from './utils/Typs'
import fe_img from './images/Fe.png'
import au_img from './images/gold.png'
import ag_img from './images/silver.png'
import cp_img from './images/copper.png'
import al_img from './images/aluminium.png'
import gold_1 from './images/gold_brick.png'
import gold_2 from './images/gold_necklace.png'


function App() {

  const fe: ElementInfo = {
    number: 26,
    ab: 'Fe',
    full_name: 'Iron',
    molar: 55.84,
    color_class: 'pink',
    imgs: [fe_img],
  }

  const au: ElementInfo = {
    number: 79,
    ab: 'Au',
    full_name: 'Gold',
    molar: 196.97,
    color_class: 'pink',
    imgs: [au_img, gold_1, gold_2],
  }
  const ag: ElementInfo = {
    number: 47,
    ab: 'Ag',
    full_name: 'Silver',
    molar: 107.87,
    color_class: 'pink',
    imgs: [ag_img],
  }

  const cp: ElementInfo = {
    number: 29,
    ab: 'Cu',
    full_name: 'Copper',
    molar: 63.54,
    color_class: 'pink',
    imgs: [cp_img],
  }

  const al: ElementInfo = {
    number: 13,
    ab: 'Al',
    full_name: 'Aluminum',
    molar: 26.98,
    color_class: 'pink',
    imgs: [al_img],
  }
  return (
    <>
      <div className="card-row">
        <FloatCard info={au}></FloatCard>
        {/* <FloatCard info={ag}></FloatCard>
        <FloatCard info={cp}></FloatCard> */}
        {/* <FloatCard info={fe}></FloatCard>
        <FloatCard info={al}></FloatCard> */}
      </div>
    </>
  )
}

export default App
