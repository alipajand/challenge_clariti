import {useEffect} from 'react'

function DataChart({data}) {
  // const [structuredData, setStructuredData] = useState([])

  useEffect(() => {
    //   if (!filters && data?.length) return setFilteredData(data)
    //   if (!filters && data?.length === 0) return setFilteredData([])
    //
    //   const filterValues = Object.entries(filters)
    //   const result = data.filter((item) => {
    //     let showData = true
    //
    //     filterValues.forEach(([filterKey, filterValue]) => {
    //       if (!item[filterKey]?.toLowerCase()?.includes(filterValue?.toLowerCase())) showData = false
    //     })
    //     return showData
    //   })
    //
    //   setFilteredData(result)
  }, [data])

  return <div>CHART</div>
}

export default DataChart
