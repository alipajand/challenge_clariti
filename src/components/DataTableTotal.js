import {useEffect, useState} from 'react'

function DataTableTotal({data}) {
  const [total, setTotal] = useState(0)

  /**
   *
   * @param item
   * @returns {number}
   */
  const calculateTotal = (item) => {
    let total = item.unit_price__c * item.quantity__c
    switch (item?.department__c?.toLowerCase()) {
      case 'marketing':
        return (total *= 1.1)
      case 'sales':
        return (total *= 1.15)
      case 'development':
        return (total *= 1.2)
      case 'operations':
        return (total *= 0.85)
      case 'support':
        return (total *= 0.95)
      default:
        return total
    }
  }

  /**
   *
   * @param value
   * @returns {string|number}
   */
  const filterNumbers = (value) => {
    if (!value || typeof Number(value) !== 'number') return 0
    if (Number(value) === value) {
      value = Number(value).toFixed(2)
    } else {
      value = String(value).split(',').join('')
    }

    if (value % 1 !== 0) {
      value = Number(value).toFixed(2)
    } else {
      value = Number(value).toFixed(0)
    }

    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    if (data?.length) {
      const sum = data.reduce((previousValue, item) => previousValue + calculateTotal(item), 0)
      setTotal(Number(sum).toFixed(2))
    } else {
      setTotal(0)
    }
  }, [data])

  return (
    <div className='app-table mini'>
      <table className='white text-primary'>
        <tbody>
          <tr>
            <td>Total Sum ($)</td>
            <td className='text-right'>{filterNumbers(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataTableTotal
