
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { DarkMode } from './DarkMode'
 interface FilterLelemt extends DarkMode{
     filterValue:string,
     setFiverValue:  React.Dispatch<React.SetStateAction<string>>,
     handleFilterValue:()=>void, 
     serch:string,
     setSearch:React.Dispatch<React.SetStateAction<string>>,
     handleSearch:()=>void
 }
export default function FormContent({filterValue, setFiverValue,handleFilterValue,setSearch, serch, controlstate ,setControlstate  }:FilterLelemt) {
    const [stateManegement, setStateManegemt] = useState<boolean>(false)

    return (
        <div className='flex justify-around items-center'>
            <div className={controlstate ? `bg-gray-900 w-1/5 flex items-center p-1 rounded-sm  text-white`:`bg-white w-1/5 flex items-center p-1 rounded-sm`}>
                <Search color='#ddd'></Search> <input type="text" name="" id="" className='bg-transparent  w-full p-3 outline-none' placeholder='Search for a country...' value={serch} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div>
                <div className={ controlstate ?`bg-gray-900 w-52 flex items-center p-3 rounded-sm`: `bg-white w-52 flex items-center p-3 rounded-sm`}>
                    <input type="text" className={controlstate ? `w-11/12 bg-gray-900 text-white border-none outline-none text-black`:`w-11/12 border-none outline-none text-black`} value={filterValue} onChange={handleFilterValue} placeholder='Filter By'/>
                    {stateManegement ?
                        <ChevronDown className="cursor-pointer" color={controlstate ? `#fff` :`#000`} onClick={() => setStateManegemt(false)}></ChevronDown>
                        : <ChevronUp className="cursor-pointer" color={controlstate ? `#fff` :`#000`} onClick={() => setStateManegemt(true)}></ChevronUp>
                    }
                </div>
                {
                    stateManegement ? (
                        <nav className='absolute w-52 mt-2'>
                            <ul className={controlstate ?`bg-gray-900 w-full p-3 rounded-md text-white`: `bg-white w-full p-3 rounded-md`}>
                                <li className='p-2 border-b block cursor-pointer' onClick={() => {
                                    setFiverValue("Africa")
                                    setStateManegemt(false)
                                }}>Africa</li>
                                <li className='p-2 border-b block cursor-pointer' onClick={() => {
                                    setFiverValue("Americas")
                                    setStateManegemt(false)
                                }
                                }>America</li>
                                <li className='p-2 border-b block cursor-pointer'
                                    onClick={() => {
                                    setFiverValue("Asia")
                                    setStateManegemt(false)
                                    }
                                    }
                                >Asia</li>
                            </ul>
                        </nav>
                    ) : ""
                }
            </div>
        </div>
    )
}
