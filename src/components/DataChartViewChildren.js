import DataChartViewColumn from './DataChartViewColumn'

function DataChartViewChildren({data}) {
  return (
    <div className='app-chart-items'>
      {data.children?.map((item, index) => (
        <DataChartViewColumn data={item} key={index} />
      ))}
    </div>
  )
}

export default DataChartViewChildren
