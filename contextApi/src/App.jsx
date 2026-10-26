import './App.css'
import Profile from "./Component/Profile"
import UserContext from "./Component/UserContext"
import Dashboard from "./Component/childrenprop/Dashboard"

function App() {
  const username = "John"

  return (
    <>
      {/* <Profile username={username}/> */}

      {/* provider : providing this data to my child components */}

      <UserContext.Provider value={username}>
        <Profile />
      </UserContext.Provider>

      <Dashboard />
    </>
  )
}

export default App

