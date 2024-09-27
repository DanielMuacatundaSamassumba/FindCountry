import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import data from './rest-countries-api-with-color-theme-switcher-master/data.json';
import Header from './Compontents/Header';

interface Country {
    name: string;
    capital: string;
    population: number;
    region: string;
    flag: string;
    subregion: string;
    nativeName: string;
    borders: string[]; // Corrigido para array
    currencies: { [key: string]: { name: string; symbol: string } }; // Corrigido para objeto
    topLevelDomain: string[];
}

export default function PersonalPage() {
    const { name } = useParams<{ name: string }>();
    const [datapersonal, setDataPersonal] = useState<Country[]>([]);
    const [ controlstate, setControlstate] = useState <boolean> (false)

    useEffect(() => {
        if (name) {
            const filteredData = data.filter((item: Country) => item.name.toLowerCase() === name.toLowerCase());
            setDataPersonal(filteredData);
        }
    }, [name]);

    return (
        <div className={ controlstate ? `bg-gray-950 min-h-svh` : ` min-h-svh`}>
            <div className={ controlstate ? `bg-gray-900 h-20`:`h-20`}>
                <Header setControlstate={setControlstate} controlstate={ controlstate} />
            </div>
            {datapersonal.length > 0 ? (
                datapersonal.map((item, index) => (
                    <div key={index} className="flex justify-center items-center flex-wrap m-20">
                        <div className="w-1/5">
                            <img src={item.flag} alt={`${item.name} flag`} className="w-full" />
                        </div>
                        <div className="flex flex-col ml-20">
                            <div>
                                <h2 className="text-3xl font-bold">{item.name}</h2>
                                <p  className={controlstate ? ` text-white` :``}><span className={controlstate ? `font-bold text-white` :`font-bold`}>Capital:</span  > {item.capital}</p>
                                <p  className={controlstate ? ` text-white` :``}><span className={controlstate ? `font-bold text-white` :`font-bold`}>Subregion:</span > {item.subregion}</p>
                                <p  className={controlstate ? ` text-white` :``}><span className={controlstate ? `font-bold text-white` :`font-bold`}>Population:</span > {item.population.toLocaleString()}</p>
                                <p  className={controlstate ? ` text-white` :``}><span className={controlstate ? `font-bold text-white` :`font-bold`}>Region:</span > {item.region}</p>
                                <p  className={controlstate ? ` text-white` :``}><span className={controlstate ? `font-bold text-white` :`font-bold`}>Native Name:</span > {item.nativeName}</p>
                            </div>

                            <div className={ controlstate ? `mt-4 flex text-white`: `mt-4 flex`}>
                                <h3 className="font-bold">Border Countries:</h3>
                                {item.borders?.length > 0 ? (
                                    <ul className='flex'>
                                        {item.borders.map((border, index) => (
                                            <li key={index} className="font-light ml-1">
                                                {border},
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No bordering countries</p>
                                )}
                            </div>
                        </div>

                        <div className={ controlstate ? "ml-10 text-white" :"ml-10"}>
                            <p><span className="font-bold">Currencies:</span> 
                                {Object.values(item.currencies).map((currency, index) => (
                                    <span key={index}> {currency.name} ({currency.symbol}) </span>
                                ))}
                            </p>
                            <p><span className="font-bold">Top-Level Domain:</span> {item.topLevelDomain.join(', ')}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No country found with the name "{name}"</p>
            )}
        </div>
    );
}
