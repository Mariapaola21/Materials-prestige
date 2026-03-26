import Header from "./components/Header"
import Hero from "./components/Hero"
import Maderas from "./components/Maderas"
import Piedras from "./components/Piedras"
import Certificaciones from "./components/Certificaciones"
import Drawer from "./components/Drawer"
import BottomNav from "./components/BottomNav"
import DesktopNav from "./components/DesktopNav"

function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container relative">
      <Header />
      <DesktopNav />
      <main className="pt-24 pb-32">
        <Hero />
        <Maderas />
        <Piedras />
        <Certificaciones />
      </main>
      <Drawer />
      <BottomNav />
    </div>
  )
}

export default App
