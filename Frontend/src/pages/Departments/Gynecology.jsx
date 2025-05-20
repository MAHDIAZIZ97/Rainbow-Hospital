import React from 'react'
import Departments from '../../components/Departments'
import { assets } from '../../assets/assets'

const Gynecology = () => {
  return (
    <div>
      <Departments 
        img1={assets.page2}
        pageRoute={'/departments/gynecology'}
        pageName={'Gynecology'}
        depName='Gynecology'
        details={
          `The Gynecology Department specializes in the health and well-being of the female reproductive system. It provides comprehensive care for women across all stages of life, from adolescence to menopause and beyond. Core services include routine checkups, prenatal and postnatal care, diagnosis and treatment of menstrual disorders, fertility issues, and management of menopause. The department also addresses gynecologic conditions such as polycystic ovary syndrome (PCOS), endometriosis, fibroids, infections, and reproductive cancers.

          Modern gynecology departments are equipped with advanced diagnostic tools, such as ultrasound, hysteroscopy, and laparoscopy, to ensure accurate detection and minimally invasive treatment of various conditions. Obstetric services are often integrated, ensuring seamless care during pregnancy and childbirth. Specialized clinics within the department may cater to adolescent gynecology, infertility, urogynecology, and high-risk pregnancies.`
        }
        depHead='OUR GYNECOLOGISTS'
        docSpeciality={
          'Gynecologist'
        }
          
      />

    </div>
  )
}

export default Gynecology
