import React from "react";
import BotCard from "./BotCard";

function BotList(props) {

  function loadBots(props) {
    return props.bots.map(bot => {
        // Passing data into the bot cards
        return <BotCard key={bot.id} bot={bot} addBot={props.addBot}/>
    });
    }

  return (
    <div >
        {loadBots()}
    </div>
  );
}

export default BotList;