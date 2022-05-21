import DataChartViewColumn from './DataChartViewColumn'

function DataChartView({data}) {
  console.log(data)
  return (
    <div className='app-chart'>
      {data.map((item, index) => (
        <DataChartViewColumn data={item} key={index} />
      ))}
    </div>
  )
}

export default DataChartView
