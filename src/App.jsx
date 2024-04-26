import {useLoaderData} from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import {useState} from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-semibold mt-12">
        Our Popular Product
      </h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
