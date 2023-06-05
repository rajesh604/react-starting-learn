import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            images={pet.images}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;