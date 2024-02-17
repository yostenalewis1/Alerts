 import Alert from "./components/Alert/Alert"
 import { Ban, BellRing ,Music3,Check,AlertTriangle   } from 'lucide-react';

function App() {
return ( 
  <div>
 <Alert  type={"alert-default"} 
  icon ={<BellRing />} 
  title={"Upgrade your plan"}
  >  <p> <a href=" /" >Lorem</a> ipsum dolor sit amet consectetur adipisicing elit. Magni est molestias natus magnam ratione dignissimos iste sapiente eveniet voluptatibus vero.</p> 
  </Alert>





  <Alert  type={"alert-note"} 
  icon ={<Music3  />} 
  title={"Note"}
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est molestias natus magnam ratione dignissimos iste sapiente eveniet voluptatibus vero."
  />  
  <Alert  type={"alert-error"} 
  icon ={<Ban />} 
  title={"Something went wrong"}
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est molestias natus magnam ratione dignissimos iste sapiente eveniet voluptatibus vero."
  />  

  <Alert  type={"alert-success"} 
  icon ={<Check   />} 
  title={"your request has been submitted successfully"}
  description="Lorem git initipsum dolor sit amet consectetur adipisicing elit. Magni est molestias natus magnam ratione dignissimos iste sapiente eveniet voluptatibus vero."
  />  
  
  <Alert  type={"alert-warning"} 
  icon ={<AlertTriangle    />} 
  title={"Tips & Tricks"}
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est molestias natus magnam ratione dignissimos iste sapiente eveniet voluptatibus vero."
  />  



 
  </div>
)
}

export default App
