
import { Moon, Sun } from 'lucide-react'
import { DarkMode } from './DarkMode'

export default function Header({controlstate, setControlstate}:DarkMode) {
    return (
        <div className="h-full flex justify-around items-center shadow-md">
            <div>
                <h1 className={controlstate? `font-bold text-2xl text-white`:`font-bold text-2xl`}>Where in the world?</h1>
            </div>
            { controlstate ?
               (<div className="flex font-semibold">
                <button className='flex border p-3 rounded-full' onClick={()=>setControlstate(false)}>
                    <Sun className={controlstate?`text-white`: `text-black`}></Sun>
                    <p className={controlstate ? `ml-1 text-white` :`ml-1 `}>Light Mode</p>
                </button>
            </div>) 
               
               :(<div className="flex font-semibold">
                    <button className='flex border p-3 rounded-full' onClick={()=>setControlstate(true)}>
                        <Moon className='text-black'></Moon>
                        <p className="ml-1">Dark Mode</p>
                    </button>
                </div>)
            }

        </div>
    )
}
