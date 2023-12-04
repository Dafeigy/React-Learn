import Main from "@/components/home/Main"
import Navigation from "@/components/home/Navigation"

export default function Home() {
  let counter = 1
  const li = [
    {id:1, value:"conten1"},
    {id:2, value:"conten2"},
    {id:3, value:"conten3"},
    {id:4, value:"conten4"}
  ]
  return (
    <div className="bg-yellow-500 p-10">
      <Navigation />
      <Main counter = { counter} />
      {counter === 0? <p>Not initialized</p> : <p>counter: {counter}</p>}

      <ul>
        {li.map((item)=>{
        return <li key = {item.id}>{item.value}</li>})}
      </ul>
    </div>
  )
}
