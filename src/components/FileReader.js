import {useState} from 'react'
import CSVReader from 'react-csv-reader'

const parserOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
}

function FileReader({setData}) {
  const [fileInfo, setFileInfo] = useState(null)

  /**
   *
   * @param data
   * @param info
   */
  const handleFile = (data, info) => {
    setFileInfo(info)
    if (setData) setData(data)
  }

  /**
   *
   */
  const resetFile = () => {
    setFileInfo(null)
    if (setData) setData(null)
  }

  return (
    <div className='file-reader'>
      {fileInfo ? (
        <div>
          You selected the "<b>{fileInfo?.name}</b>",{' '}
          <span className='text-blue cursor-pointer' onClick={resetFile}>
            change the file
          </span>
          ?
        </div>
      ) : (
        <CSVReader
          cssClass='react-csv-input'
          label='Select a CSV file to start...'
          onFileLoaded={handleFile}
          parserOptions={parserOptions}
        />
      )}
    </div>
  )
}

export default FileReader
