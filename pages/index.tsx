import Header from '../components/Header'
import Footer from '../components/Footer'

import HeadContainer from '../components/HeadContainer'

export default function Home() {
  return (
    <div className="flex justify-center align-middle flex-col bg-colorMainBlue">
      <HeadContainer>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </HeadContainer>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
