
const Card = ({cardInfo, handleHireActor}) => {
    const {name,role, image, salary} = cardInfo ;
    return (
        <div className="space-y-5 p-6 border border-green-700 w-72 h-96">
            <img className="mx-auto w-16 rounded-full" src={image} alt="" />
            <h2 className="text-2xl text-red-400 font-bold text-center">{name}</h2>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, totam.</p>

            <div className="text-yellow-600 flex gap-4">
                <h3>Salary :{salary}</h3>
                <h2>{role}</h2>
            </div>

            <button onClick={() => handleHireActor(cardInfo)} className="btn">Hire Actor</button>
            
        </div>
    );
};

export default Card;