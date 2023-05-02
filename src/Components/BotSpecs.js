import React from "react";
import BotCard from "./BotCard";

const BotSpecs = ({ bot, clearSpec, addBot }) => {
  const botTypeIcons = {
    Assault: <i className="icon large circular military" />,
    Defender: <i className="icon large circular shield" />,
    Support: <i className="icon large circular ambulance" />,
  };

  const handleAddBot = () => {
    addBot(bot);
  };

  return (
    <div className="ui segment">
       <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column"> 
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botTypeIcons[bot.bot_class] || <div />}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={clearSpec}>
              Go Back
            </button>
            <button className="ui button fluid" onClick={handleAddBot}>
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
          </div>
            </div>
       </div>
     </div>
  );
};

export default BotSpecs;
