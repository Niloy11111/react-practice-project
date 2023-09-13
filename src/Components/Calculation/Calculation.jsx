
const Calculation = ({ selectedActors }) => {

    return (
        <div>
            <h2 className="text-5xl text-red-400">Actor Market</h2>
            <h2 className="text-white text-2xl text-bold">Actor: {selectedActors.length} </h2>
            <h3 className="text-white text-2xl font-semibold">
                {
                    selectedActors.map(actor => 
                    <li key={actor.id}>{actor.name}</li>   

                    )
                }
            </h3>
            

        </div>
    );
};

export default Calculation;