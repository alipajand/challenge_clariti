import {useCallback, useEffect, useState} from 'react'
import DataChartView from './DataChartView'

function DataChartCalculation({data}) {
  const [structuredData, setStructuredData] = useState(null)

  /**
   *
   * @type {function(*, *=): {children: []|*, row: number, id: *}[]}
   */
  const generateJsonArray = useCallback((data, row = 0) => {
    return Object.entries(data).map(([key, value]) => ({
      row,
      id: key,
      children: Array.isArray(value) ? [] : generateJsonArray(value, row + 1),
      // children: Array.isArray(value) ? value : generateJsonArray(value, row + 1), // to load the children
    }))
  }, [])

  /**
   *
   * @param oldData
   * @param type
   * @returns {{}}
   */
  const generateNewData = (oldData, type) => {
    const newData = {}

    oldData.forEach((sub) => {
      const keyName = sub[type]?.toLowerCase()?.replace(/ /g, '_') || 'undefined'
      if (!newData[keyName]) newData[keyName] = []
      newData[keyName].push(sub)
    })

    return newData
  }

  /**
   *
   * @type {(function(*): void)|*}
   */
  const generateTypes = useCallback(
    (rawData) => {
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

      setStructuredData(generateJsonArray(newDepartments))
    },
    [generateJsonArray]
  )

  /**
   *
   * @type {(function(*): void)|*}
   */
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

  /**
   *
   * @type {(function(*): void)|*}
   */
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

  /**
   *
   * @type {(function(): (void|undefined))|*}
   */
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
    /**
     * start to organize data
     */
    generateDepartments()
  }, [generateDepartments])

  return structuredData && <DataChartView data={structuredData} />
}

export default DataChartCalculation
