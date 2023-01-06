import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
    }}>
      <h1>This sucker's name is Ejmen</p>
      <Image src="sucker.jpg" fill/>
    </div>
  )
}
