import { createContext, useState } from "react";

type Tema = "dark" | ""

interface AppContextProps {
  tema: Tema
  alternarTema: () => void
}

const AppContext = createContext<AppContextProps>({
  tema: "",
  alternarTema: function (): void {
    throw new Error("Function não implementada.");
  }
})

export function AppProvider(props) {

  const [tema, setTema] = useState<Tema>("")

  function alternarTema() {
    setTema(tema === "" ? "dark" : "")
  }
  
  return (
    <AppContext.Provider value={{ 
      tema, 
      alternarTema 
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext

