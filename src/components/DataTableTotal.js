import {useEffect, useState} from 'react'

function DataTableTotal({data, columns}) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (data?.length) {
      const sum = data.reduce((partialSum, item) => partialSum + item.unit_price__c * item.quantity__c, 0)
      setTotal(sum)
    } else {
      setTotal(0)
    }
  }, [data])

  return (
    <div className='app-table mini'>
      <table className='white'>
        <tbody>
          <tr>
            <td colSpan={columns.length - 1}>Total Sum:</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataTableTotal
