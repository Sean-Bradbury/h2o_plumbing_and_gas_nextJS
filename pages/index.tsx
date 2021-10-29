import Header from '../components/Header'
import Footer from '../components/Footer'

import HeadContainer from '../components/HeadContainer'

export default function Home() {
  return (
    <div>
      <HeadContainer>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </HeadContainer>

      <Header />

      <main>
      </main>

      <Footer />
    </div>
  )
}
