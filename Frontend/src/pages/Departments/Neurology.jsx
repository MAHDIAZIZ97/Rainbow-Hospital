import React from 'react'
import Departments from '../../components/Departments'
import { assets } from '../../assets/assets'
import GetInTouch from '../../components/GetInTouch'

const Neurology = () => {
  return (
    <div>
       <Departments 
        img1={assets.page2}
        pageRoute={'/departments/neurology'}
        pageName={'Neurology'}
        depName='Neurology'
        details={
          `The Neurology Department specializes in diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. It provides comprehensive care for conditions such as stroke, epilepsy, multiple sclerosis, Parkinson's disease, Alzheimer's disease, migraines, and neuropathies. The department employs advanced diagnostic techniques like MRI, CT scans, and EEG to accurately assess neurological conditions. Treatment options may include medication management, physical therapy, and minimally invasive procedures. Neurologists work closely with other specialists to ensure holistic care for patients with complex neurological issues.`
        }
        docSpeciality={
          'Neurologist'
        }
        depHead='OUR NEUROLOGISTS'
       />

    </div>
  )
}

export default Neurology
