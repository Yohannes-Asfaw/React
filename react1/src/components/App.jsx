import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";


function creatcard(info){
    return <Entery
        key={info.id}
        name={info.name}
        emoj={info.emoji}
        dd={info.meaning}

    />
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(creatcard)}
        
      </dl>
    </div>
  );
}

export default App;
