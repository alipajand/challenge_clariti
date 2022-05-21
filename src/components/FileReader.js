import {useState} from 'react'
import CSVReader from 'react-csv-reader'

function FileReader({setData}) {
  const [fileInfo, setFileInfo] = useState(null)
  const handleForce = (data, info) => {
    setFileInfo(info)
    if (setData) setData(data)
  }

  const parserOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  }

  return (
    <div className='file-reader'>
      {fileInfo ? (
        <div>
          You selected the "<b>{fileInfo?.name}</b>", <span className='text-blue cursor-pointer'>change the file?</span>
        </div>
      ) : (
        <CSVReader
          cssClass='react-csv-input'
          label='Select a CSV file to start...'
          onFileLoaded={handleForce}
          parserOptions={parserOptions}
        />
      )}
    </div>
  )
}

export default FileReader
