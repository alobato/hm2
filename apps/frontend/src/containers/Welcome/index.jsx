import React from 'react'
import VideoSequence from '../../components/VideoSequence'

function App() {

  const [videos, setVideos] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const text = await (await fetch('/VIDEOS.txt')).text()
      setVideos(text.split(`\n`).filter(item => item.trim() !== ''))
      // setTimeout(() => videoRef.current.play(), 1000)
    }
    fetchData()
  }, [])

  return (
    <div style={{ backgroundColor: 'black', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', width: 'calc(100vw)' }}>
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      {videos && videos.length > 0 &&
        <VideoSequence videos={videos} />
      }
    </div>
    </div>
  )
}

export default App
