
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
function App() {

  const cards =  data.map((item)=> {
    return <Card 
              key={item.id}
              item={item}
           />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='flex-column'>
        {cards}
      </div>
    </div>
  );
}

export default App;


// 4.15.27