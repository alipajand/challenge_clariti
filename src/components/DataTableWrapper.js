import DataTableRecords from './DataTableRecords'
import DataTableTotal from './DataTableTotal'

function DataTableWrapper({data}) {
  return (
    <>
      <DataTableTotal data={data} />
      <DataTableRecords data={data} />
    </>
  )
}

export default DataTableWrapper
