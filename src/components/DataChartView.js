import {useEffect} from 'react'

function DataChartCalculation({data}) {
  useEffect(() => {
    console.log(data)
  }, [data])

  return <div></div>
}

export default DataChartCalculation
