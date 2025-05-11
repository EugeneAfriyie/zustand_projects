
import RecipeApp from './components/RecipeApp/RecipeApp'
import React from 'react'
import ExpenseTracker from './ExpenseTracker/ExpenseTracker'
import PasswordGenerator from './Password_Generator/PasswordGenerator'
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <PasswordGenerator />
  </div>
    // <div className=''>
    //   {/* <RecipeApp /> */}
    //   {/* <ExpenseTracker /> */}
    
    // </div>
  )
}

export default App