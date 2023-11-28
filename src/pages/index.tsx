import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zelara AI - Levi Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <h1>Hello World! 🌍 From Levi Team 🌱</h1>

        <div className="feature">
          <h2>🌿 Plant Monitoring</h2>
          <p>Zelara AI uses computer vision algorithms to analyze images of your plants and provide insights into their health, growth, and any potential issues they may be facing.</p>
        </div>

        <div className="feature">
          <h2>📊 Data Visualization</h2>
            <p>Our dashboard allows you to visualize your plant&apos;s data in a variety of ways, including charts, graphs, and more.</p>
          </div>

        <div className="feature">
          <h2>💡 Recommendations</h2>
          <p>Zelara AI provides personalized recommendations on how to optimize your greenhouse conditions for the best growth outcomes.</p>
        </div>

        <div className="feature">
          <h2>🖥️ User-friendly Interface</h2>
          <p>Our intuitive web app interface allows for easy navigation and effective use of all features, regardless of your tech skill level.</p>
        </div>


        <footer>
          <p>&copy; 2023 Levi Team 🌟</p>
        </footer>
      </div>
    </>
  )
}
