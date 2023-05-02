import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, addBot }) {
  const renderBots = () => {
    return bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} addBot={addBot} />;
    });
  };

  return (
    
     <div className="ui segment inverted olive bot-army">   
         <h2>Your Bot Army  </h2>
          {renderBots()}
    </div>
   
     
  );
}

export default YourBotArmy;