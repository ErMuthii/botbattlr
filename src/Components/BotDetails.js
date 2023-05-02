import React from "react";
import BotCard from "./BotCard";

// Destructuring the props from the BotsPage component
const BotDetails = ({ bot, clearSpec, addBot }) => {
  
  const handleAddBot = () => {
    addBot(bot);
  };

  return (
    
    <div >
        
         <div>   
            <img         
              src={bot.avatar_url}
            />
          </div>

          {/* Data of the bot cards */}

        <div>
            <h2>Name: {bot.name}</h2>
        
            <p>Catchphrase:{bot.catchphrase}</p>
            
            <p>Class: {bot.bot_class}</p> 
         </div >
            
            
            {/* More details */}
            <div>
            <strong>{bot.health}</strong>
            </div>

            <div>
            <strong>{bot.damage}</strong>  
            </div>

            <div>
            <strong>{bot.armor}</strong>
            </div>

                
                 
                   
                 
            {/* buttons */}
            <button  onClick={clearSpec}>
              Go Back
            </button>

            <button  onClick={handleAddBot}>
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
    
       </div>
            
       
     
  );
};

export default BotDetails;
