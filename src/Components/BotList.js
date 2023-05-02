import React from "react";
import BotCard from "./BotCard";

function BotList(props) {
  const renderBots = () => {
    return props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} addBot={props.addBot}/>
    });
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {renderBots()}
      </div>
    </div>
  );
}

export default BotList;