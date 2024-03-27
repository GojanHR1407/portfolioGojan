import {Header} from './components/Header'
import {Presentation} from './components/Presentation'
import {About} from './components/About'
import {Proyects} from './components/Proyects'
import {Testimony} from './components/Testimony'
import {Footer} from './components/Footer'
import './App.css'
import './normalize.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Presentation />
                <About />
                <Proyects />
                <Testimony />
            </main>
            <Footer />
        </div>
    )
}

export default App

