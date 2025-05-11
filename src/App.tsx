import Navbar from './components/Navbar'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to Dex-AI</h1>
          <p className="text-lg text-gray-700">Your AI-powered trading assistant</p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
        </div>
      </div>
      
    </>
  )
}

export default App
