import './App.css'
import './components/FloatCard.css'
import FloatCard from './components/FloatCard'
import { ElementInfo } from './utils/Typs'
import fe_img from './images/Fe.png'
import au_img from './images/gold.png'
import ag_img from './images/silver.png'
import cp_img from './images/copper.png'
import al_img from './images/aluminium.png'


function App() {

  const fe: ElementInfo = {
    number: 26,
    ab: 'Fe',
    full_name: 'Iron',
    molar: 55.84,
    color_class: 'pink',
    img: fe_img
  }

  const au: ElementInfo = {
    number: 79,
    ab: 'Au',
    full_name: 'Gold',
    molar: 196.97,
    color_class: 'pink',
    img: au_img
  }
  const ag: ElementInfo = {
    number: 47,
    ab: 'Ag',
    full_name: 'Silver',
    molar: 107.87,
    color_class: 'pink',
    img: ag_img
  }

  const cp: ElementInfo = {
    number: 29,
    ab: 'Cu',
    full_name: 'Copper',
    molar: 63.54,
    color_class: 'pink',
    img: cp_img
  }

  const al: ElementInfo = {
    number: 13,
    ab: 'Al',
    full_name: 'Aluminum',
    molar: 26.98,
    color_class: 'pink',
    img: al_img
  }
  return (
    <>
      <div className="row">
        <FloatCard info={au}></FloatCard>
        <FloatCard info={ag}></FloatCard>
        <FloatCard info={cp}></FloatCard>
        <FloatCard info={fe}></FloatCard>
        <FloatCard info={al}></FloatCard>

      </div>
    </>
  )
}

export default App
