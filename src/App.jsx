import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"



const App = () => {
  return (
    <>
    {/* Navbar */}
    <Navbar />

    {/* Content */}
    <HomePage/>

    {/* Footer */}
    <Footer />

    </>
  )
}

export default App