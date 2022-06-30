const UserFavoriteColors = ({ favAnimals }) => {
    return (
      <>
        {favAnimals.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </>
    );
  };
  
  export default UserFavoriteColors;