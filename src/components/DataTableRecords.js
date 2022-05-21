import {useState} from 'react'
import {convertTexts} from '../mixins'

const perPage = 10

function DataTableRecords({data, columns}) {
  const [page, setPage] = useState(1)

  return (
    <div className='app-table'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((column, index) => (
              <th className='text-capitalize text-left' key={index}>
                {convertTexts(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (item, index) =>
              index + 1 < page * perPage &&
              index + 1 >= (page - 1) * perPage && (
                <tr key={index}>
                  <td>{index + 1}</td>

                  {columns.map((column, i) => (
                    <td
                      key={`${index} ${i}`}
                      className={column?.includes('price') ? 'white' : ''}
                    >
                      {item[column]}
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>

      <div className='app-table-pagination'>
        <button
          className='app-button'
          onClick={() => {
            if (page > 1) setPage(page - 1)
          }}
        >
          Prev
        </button>
        <button
          className='app-button'
          onClick={() => {
            if (page * perPage < data.length) setPage(page + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DataTableRecords
