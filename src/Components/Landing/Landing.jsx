import './Landing.css';
import { Buttons } from '../index';
import { FaShoppingBasket, FaChevronRight } from "react-icons/fa";
import { ButtonSecondary } from '../index';

const Landing = () => {
  return (
    <div className='bg-landing' id='landing'>
      <div className='landing container'>
        <div className='landing-content'>
          <h3>Good food choices are good investments.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <div className='btn-landing'>
            <Buttons icon={<FaShoppingBasket />} >Order Now</Buttons>
            <ButtonSecondary icon={<FaChevronRight />} >Learn More  </ButtonSecondary>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>
  )
}

export default Landing