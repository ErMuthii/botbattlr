import React from "react";
import BotCard from "./BotCard";

function BotList(props) {

     const loadBots = () => {
        return props.bots.map(bot => {
          return <BotCard key={bot.id} bot={bot} addBot={props.addBot}/>
        });
      };

    return (
      <div> 
          {loadBots()} 
      </div>
    );
  }
  
  export default BotList;