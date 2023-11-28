import NumPadOperator from './components/NumPadOperator'
import Display from './components/Display'

function App() {
  return (
    <div className="bg-slate-900 h-screen flex flex-col justify-center items-center text-white sm:text-2xl text-xl">
      <div className="flex flex-col justify-center items-center">
        <Display />
        <NumPadOperator />
      </div>
    </div>
  )
}

export default App
