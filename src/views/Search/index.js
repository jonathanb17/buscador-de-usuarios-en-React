import React, { useState } from 'react'
import SearchBox from './components/SearchBox/Index';

import data from '../../data/users.json'


import './styles.css';
import SearchResult from './components/SearchResult';

const Search = () => {

    // const [userdata, setUserData] = useState(data)
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);


    console.log(data);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);// volvemos a poner a cero el array 
    };


    const handleSeachClick = (searchText) => {

        setIsAtTop(true);
        // ? espara ver si existe el .length ,es decir si tiene longitud
        // filter al devolverme un nuevo arreglo ,lo guardo en un nueva cte
        //si regresa true me regresa todos los valores de ese arreglo
        //includes-> me regresa true si lo que esta escribiendo(esta incluido) 
        //el usuario esta dentro del valor que esta en el array
        if (data?.length) {

            const searchTextMin = searchText.toLowerCase(); // lo que traes pasalo a minuscula

            const res = data.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMin) ||
                    value.username.toLowerCase().includes(searchTextMin) ||
                    value.phone.toLowerCase().includes(searchTextMin) ||
                    value.email.toLowerCase().includes(searchTextMin)
                );
            });
            setResults(res);
            // altera el estado de results agregandole los valores que traigas del arrays y coincidan con lo 
            //que estas poniendo ene el input
        }
    }

    console.log(results); // primero, esto muestra un array vcio

    // const handleSearchClick = () => {
    //     setIsAtTop(!isAtTop) // true
    // }

    // const handleCloseClick = () => {
    //     setIsAtTop(!isAtTop) // lo vuelve a falase
    // }
    //------------------------------------------------------------------------
    //LLAMA A LA CARPETA QUE SE LLAMA "SEARCHBOX"

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox
                onSearch={handleSeachClick}
                onClose={handleCloseSearch}
                isSearching={isAtTop}
            />

            <SearchResult results={results} isSearching={isAtTop} />
        </div>
    )
}

export default Search;
