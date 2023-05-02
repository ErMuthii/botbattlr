import React from "react";

const BotCard = ({ bot, addBot }) => {
  const botTypeIcons = {
    Assault: "military",
    Defender: "shield",
    Support: "ambulance"
  };

  const botTypeIcon = botTypeIcons[bot.bot_class] || "";

  return (
    <div className="ui column">
      <div className="ui card" onClick={() => addBot(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} <i className={`icon ${botTypeIcon}`} />
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
