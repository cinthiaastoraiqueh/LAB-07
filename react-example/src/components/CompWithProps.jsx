import { useState } from "react";

const CompWithProps = ({ onCountChange }) => {
  const [username, setUsername] = useState(""); 

  
  const handleInputChange = (event) => {
    setUsername(event.target.value); 
  };

  
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && username.trim() !== "") {
      onCountChange(); 
      setUsername(""); 
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress} 
        placeholder="Type your username and press Enter" 
      />
      
      {/* Mostrar el nombre de usuario en tiempo real */}
      <p>User: {username}</p>
    </div>
  );
};

export default CompWithProps;
