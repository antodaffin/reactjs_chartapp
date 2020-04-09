import React from "react";
import Application from "./Application";
import UserProvider from "./UserProvider";


function App() {
  return (
    <div style={{textAlign: "center"}}>
        <UserProvider>
          <Application />
        </UserProvider>
    </div>
  );
}
export default App;


