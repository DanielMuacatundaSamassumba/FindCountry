import { DarkMode } from "./DarkMode"
interface countryDetails extends DarkMode {
    image:string
    name: string,
    populationNumber:string | number,
    region:string,
    capital?:string | number,
}
export default function CardCountry({name, populationNumber , region, capital, image, controlstate ,setControlstate}:countryDetails) {
  return (
    <div className={controlstate ? `bg-gray-900 text-white w-72 p-3 ml-3 rounded-md` : `bg-white w-72 p-3 ml-3 rounded-md`}>
         <img src={image} alt="" className='w-full' />
         <div>
            <h1 className='font-bold'>{name}</h1>
            <h1 className='font-semibold'>Population: <span className='font-normal'>{populationNumber}</span></h1>
            <h1 className='font-semibold'>Region: <span className='font-normal'>{region}</span></h1>
            <h1 className='font-semibold'>Capital: <span className='font-normal'>{capital}</span></h1>
         </div>
    </div>
  )
}
