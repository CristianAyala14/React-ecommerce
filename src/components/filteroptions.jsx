//componente de renderfiltro para ejemplo de tasklistcontainer

function FilterOptions({filter, setFilter}){
    
    function handleFilterChange(e){
        setFilter(e.target.value)
    };

    return(
        <div>
            <label htmlFor="filter">Filtrar: </label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
                <option value="all">Todas</option>
                <option value="completed">Completadas</option>
                <option value="pending">No completadas</option>
            </select>
        </div>
    );

};

export default FilterOptions;