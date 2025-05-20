import React from 'react'
import Departments from '../../components/Departments'
import { assets } from '../../assets/assets'
import GetInTouch from '../../components/GetInTouch'

const Cardiology = () => {
  return (
    <div>
      <Departments 
        img1={assets.page2}
        pageRoute={'/departments/cardiology'}
        pageName={'Cardiology'}
        depName='Cardiology'
        details={
          'Cardiology is a branch of medicine that deals with disorders of the heart and blood vessels. It includes diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.'
        }
        docSpeciality={
          'Cardiologist'
        }
        depHead='OUR CARDIOLOGISTS'
      />

    </div>
  )
}

export default Cardiology
