import {useCallback, useEffect, useState} from 'react'

function DataFiltering({data, filters, setFilters}) {
  const [states, setStates] = useState(null)

  const handleFilers = (event, id) => {
    if (setFilters) return

    const value = event?.target?.value
    const allFilters = {...(filters || {})}

    if (value === 'all') {
      delete allFilters[id]
    } else {
      allFilters[id] = value
    }

    setFilters(allFilters)
  }

  const updateStates = ({types = [], categories = [], departments = [], subCategories = []} = {}) => {
    setStates({types, categories, departments, subCategories})
  }

  const organizeDate = useCallback(() => {
    const types = []
    const categories = []
    const departments = []
    const subCategories = []

    data.forEach((item) => {
      const type__c = item.type__c?.toLowerCase()
      const category__c = item.category__c?.toLowerCase()
      const department__c = item.department__c?.toLowerCase()
      const sub_category__c = item.sub_category__c?.toLowerCase()

      if (!types.includes(type__c)) types.push(type__c)
      if (!categories.includes(category__c)) categories.push(category__c)
      if (!departments.includes(department__c)) departments.push(department__c)
      if (!subCategories.includes(sub_category__c)) subCategories.push(sub_category__c)
    })

    updateStates({
      types,
      categories,
      departments,
      subCategories,
    })
  }, [data])

  useEffect(() => {
    if (data?.length === 0) return

    organizeDate()
  }, [data, organizeDate])

  useEffect(() => {
    if (states) Object.entries(states)
  }, [states])

  return (
    <div className='app-filters'>
      {states &&
        Object.entries(states).map(([keyName, value], index) => (
          <div key={index} className='select-container text-capitalize'>
            <label htmlFor={keyName} className='select-header'>
              Select {keyName}
            </label>
            <select
              name={`Select ${keyName}`}
              id={keyName}
              className='app-selects text-capitalize'
              onChange={(event) => handleFilers(event, keyName)}
            >
              <option value={'all'}>All {keyName}</option>

              {value.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}
    </div>
  )
}

export default DataFiltering
