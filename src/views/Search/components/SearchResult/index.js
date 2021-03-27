import React from 'react'

const SearchResult = ({ results, isSearching }) => {
    return (
        <div style={{ width: '100%', padding: '0rem 2rem 0rem 2rem' }}>

            {/* //si results es cero no tiene nada ni longitud  */}
            {/* && ->entonces */}
            {!results.length && isSearching && <p>No existe este dato</p>}

            {
                results?.map((result) => {
                    return (
                        <div key={result.id}
                            style={{
                                backgroundColor: '#e8e7e7',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                padding: '10px'
                            }}>
                            <p>{result.username}</p>
                            <p>{result.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResult;
