import { createContext, useContext, useState } from 'react' // exemplo utilizando o Context API

const CycleContext = createContext({} as any)

function NewCycleForm(){
    let { activeCycle, setActiveCycle } = useContext(CycleContext)

    return (
        <h1>
            NewCycleForm: {activeCycle}
            <button onClick={() => {setActiveCycle(2)}}>
                Alterar ciclo
            </button>
        </h1>
    )
}


function CountDown(){
    const { activeCycle } = useContext(CycleContext)

    return <h1>CountDown: {activeCycle}</h1>
}


export function Home(){
    const [activeCycle, setActiveCycle] = useState(0)

    return (
        <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
            <div>
                <NewCycleForm />
                <CountDown />
            </div>
        </CycleContext.Provider>
    )
}