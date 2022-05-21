import {useContext, useEffect} from 'react'
import {AppContext} from '../AppContext'

function DataChart({data}) {
  const {states} = useContext(AppContext) || {}
  // const [structuredData, setStructuredData] = useState([])

  useEffect(() => {
    if (data?.length === 0) return
    console.log(states)
  }, [data, states])

  return <div>CHART</div>
}

export default DataChart
