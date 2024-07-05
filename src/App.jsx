import './index.css';
import './App.css'
import Header from './components/Header';
import Main from './components/Main';

function App() {

  return (
    <>
      <section className="min-h-screen flex-col justify-between">
        <Header></Header>
        <Main></Main>
      </section>
    </>
  )
}

export default App
