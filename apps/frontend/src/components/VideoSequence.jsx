import React from 'react'
// import videos from '../_VIDEOS'

function VideoSequence({ videos: files }) {

  const videoRef = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    videoRef.current.play()
  }, [])

  const handleEnded = () => {
    setIndex(currentIndex => {
      if (index >= files.length - 1) return 0
      return currentIndex + 1
    })
    setTimeout(() => videoRef.current.play(), 10)
  }

  const currentVideo = `http://localhost:8000/downloads/${files[index]}`

  return (
    <video key={index} onEnded={handleEnded} ref={videoRef} muted playsInline style={{ margin: '0 auto', height: 'calc(100vh)' }}>
      <source src={currentVideo} type='video/mp4' />
    </video>
  )
}

export default VideoSequence
