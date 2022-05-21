import DataChartViewChildren from './DataChartViewChildren'
import {convertTexts} from '../mixins'

function DataChartViewColumn({data}) {
  return (
    <div className='app-chart-column'>
      <div className={`app-chart-box-wrapper color-${data.row + 1}`}>
        <div className='app-chart-box'>{convertTexts(data?.id)}</div>
      </div>

      {data.children && data.children?.length !== 0 && <DataChartViewChildren data={data} />}
    </div>
  )
}

export default DataChartViewColumn
