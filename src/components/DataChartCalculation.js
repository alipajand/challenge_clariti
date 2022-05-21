import {useCallback, useEffect, useState} from 'react'
import DataChartView from './DataChartView'

function DataChartCalculation({data}) {
  const [structuredData, setStructuredData] = useState(null)

  const generateNewData = (oldData, type) => {
    const newData = {}

    oldData.forEach((sub) => {
      const keyName = sub[type]?.toLowerCase()?.replace(/ /g, '_')
      if (!newData[keyName]) newData[keyName] = []
      newData[keyName].push(sub)
    })

    return newData
  }

  const generateTypes = useCallback((rawData) => {
    if (!rawData) return

    const newDepartments = {}
    const departmentNames = Object.keys(rawData)
    departmentNames.forEach((dep) => {
      const newCategories = {}
      const categoryNames = Object.keys(rawData[dep])

      categoryNames.forEach((cat) => {
        const newSubCategories = {}
        const subCategoryNames = Object.keys(rawData[dep][cat])

        subCategoryNames.forEach((subCat) => {
          newSubCategories[subCat] = generateNewData(rawData[dep][cat][subCat], 'type__c')
        })

        newCategories[cat] = newSubCategories
      })

      newDepartments[dep] = newCategories
    })

    setStructuredData(newDepartments)
  }, [])

  const generateSubCategories = useCallback(
    (rawData) => {
      if (!rawData) return

      const newDepartments = {}
      const departmentNames = Object.keys(rawData)

      departmentNames.forEach((dep) => {
        const newCategories = {}
        const categoryNames = Object.keys(rawData[dep])

        categoryNames.forEach((cat) => {
          newCategories[cat] = generateNewData(rawData[dep][cat], 'sub_category__c')
        })

        newDepartments[dep] = newCategories
      })

      generateTypes(newDepartments)
    },
    [generateTypes]
  )

  const generateCategories = useCallback(
    (rawData) => {
      if (!rawData) return

      const newDepartments = {}
      const departments = Object.keys(rawData)
      departments.forEach((dep) => {
        newDepartments[dep] = generateNewData(rawData[dep], 'category__c')
      })

      generateSubCategories(newDepartments)
    },
    [generateSubCategories]
  )

  const generateDepartments = useCallback(() => {
    if (!data?.length) return setStructuredData([])

    let convertedData = null
    data.forEach((item) => {
      const department__c = item.department__c?.toLowerCase()
      if (!convertedData) convertedData = {}
      if (!convertedData[department__c]) convertedData[department__c] = []
      convertedData[department__c].push(item)
    })

    generateCategories(convertedData)
  }, [data, generateCategories])

  useEffect(() => {
    generateDepartments()
  }, [generateDepartments])

  return structuredData && <DataChartView data={structuredData} />
}

export default DataChartCalculation
