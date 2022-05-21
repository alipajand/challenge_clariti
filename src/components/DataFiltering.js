import {useCallback, useEffect, useState} from 'react'

function DataFiltering({data, filters, setFilters}) {
  const [type, setTypes] = useState([])
  const [category, setCategory] = useState([])
  const [department, setDepartment] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const handleFilers = (event) => {
    if (setFilters) setFilters(filters)
  }

  const updateStates = ({newType = [], newCategory = [], newSubCategory = [], newDepartment = []} = {}) => {
    setTypes(newType)
    setCategory(newCategory)
    setDepartment(newDepartment)
    setSubCategory(newSubCategory)

    console.log({newType, newCategory, newSubCategory, newDepartment})
  }

  const organizeDate = useCallback(() => {
    const newType = []
    const newCategory = []
    const newDepartment = []
    const newSubCategory = []

    data.forEach((item) => {
      const type__c = item.type__c?.toLowerCase()
      const category__c = item.category__c?.toLowerCase()
      const department__c = item.department__c?.toLowerCase()
      const sub_category__c = item.sub_category__c?.toLowerCase()

      if (!newType.includes(type__c)) newType.push(type__c)
      if (!newCategory.includes(category__c)) newCategory.push(category__c)
      if (!newDepartment.includes(department__c)) newDepartment.push(department__c)
      if (!newSubCategory.includes(sub_category__c)) newSubCategory.push(sub_category__c)
    })

    updateStates({
      newType,
      newCategory,
      newSubCategory,
      newDepartment,
    })
  }, [data])

  useEffect(() => {
    if (data?.length === 0) return

    organizeDate()
  }, [data, organizeDate])

  return (
    <div className='app-filters'>
      <select name='Select Type' id='types' className='app-selects' onChange={handleFilers}>
        <option value={null}>All Types</option>

        {type.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select name='Select Category' id='categories' className='app-selects' onChange={handleFilers}>
        <option value={null}>All Categories</option>

        {category.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select name='Select Sub Category' id='subCategories' className='app-selects' onChange={handleFilers}>
        <option value={null}>All Sub Categories</option>

        {subCategory.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select name='Select Department' id='departments' className='app-selects' onChange={handleFilers}>
        <option value={null}>All Departments</option>

        {department.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DataFiltering
