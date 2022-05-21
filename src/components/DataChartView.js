import DataChartViewColumn from './DataChartViewColumn'

function DataChartView({data}) {
  return (
    <div className='app-chart'>
      {data.map((item, index) => (
        <DataChartViewColumn data={item} key={index} />
      ))}
    </div>
  )
}

export default DataChartView
