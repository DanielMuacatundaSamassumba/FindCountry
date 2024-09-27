import Header from "./Compontents/Header"
import FormContent from "./Compontents/FormContent"
import CardCountry from "./Compontents/CardCountry"
import databackend from './rest-countries-api-with-color-theme-switcher-master/data.json'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function App() {

  const [data, setData] = useState(databackend)
  const [newdata, setNewData] = useState(data)
  const [ search, setSearch] = useState<string>("")
  const [filter, setFilter] = useState<string>("")
  const [FindValue, setFindValue] = useState <boolean> (false)
  const [backgrondType, setBackgroundType] = useState <boolean>(false)
  const [ controlstate, setControlstate] = useState(false)
  function taggleChangecolor (){
    setBackgroundType(!backgrondType)
  }
  function hadleFiterChange() {
    if( filter == ""){
     setNewData(data)

    }else{
      const Filter = data.filter(item => {
        return item.region == filter
      })
       setNewData(Filter)
    }
  
  }
   function SearchElement(){
   if( search !=""){
    const Filter0 = data.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
     if( Filter0.length != 0){
    setNewData(Filter0)
    setFindValue(false)
     }else{
       setFindValue(true)
     }

   }else{
     setNewData(data)
     setFindValue(false)
   }
   }
 useEffect(()=>{
  hadleFiterChange()
 },[filter])

 useEffect(()=>{
  SearchElement()
 },[search])
  console.log(controlstate)

  return (
    <div className = {controlstate ?`bg-gray-950 min-h-svh dar`: `bg-background min-h-svh dar`}>
      <div className={controlstate ?`bg-gray-900 h-20` :`bg-white h-20`}>
        <Header controlstate={controlstate} setControlstate={setControlstate}></Header>
      </div>
      <div className=" mt-16">
        <FormContent filterValue={filter}
        setControlstate={setControlstate}
        controlstate={controlstate}
        serch={search}
        setSearch={setSearch}
          setFiverValue={setFilter}
          handleFilterValue={hadleFiterChange}
        ></FormContent>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-20 w-9/12">
          {
          FindValue == false ?
            newdata.map((item, i) => (
               <Link to={`personal/${item.name}`}>
                   <div key={i}>
                <CardCountry
                 controlstate={controlstate}
                  name={item.name}
                  capital={item.capital}
                  populationNumber={item.population}
                  region={item.region}
                  image={item.flag}
                />
                <br />

              </div></Link>
          
            )) :"Dados não econtado!"
          
          }

        </div>
      </div>
    </div>
  )
}
