import React from "react";
import { Button } from "./components/ui/button"
import { Ghost } from "lucide-react";


const App = () => {
  return(
  <div><h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <Button className="flex flex-col items-center justify-center bg-red-500" variant={Ghost}>
    Click me
    </Button>
  </div>
  )
};

export default App;
