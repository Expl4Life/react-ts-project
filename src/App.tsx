import 'react'
import Counter from './components/Counter'

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>React + TypeScript + Vite</h1>
                <p>Стартовый проект с современным стеком технологий</p>
            </header>

            <main className="app-main">
                <Counter />
            </main>

            <footer className="app-footer">
                <p>Vite, React и TypeScript</p>
            </footer>
        </div>
    )
}

export default App