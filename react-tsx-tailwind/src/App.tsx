import { dummyData } from "./data/todos"
import TodoItem from "./components/TodoItem"

function App() {

  return (
    <main className="py-10 bg-red-50 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your To Dos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
