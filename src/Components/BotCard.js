import React from "react";

const BotCard = ({ bot, addBot }) => {

  return (
     <div >
      <div onClick={() => addBot(bot)}>
       {/* Image  */}
        <div >
          <img src={bot.avatar_url} />
        </div>
        {/* {Name} */}

        <div>
          <div>
            {bot.name}  
          </div>
        {/* {Catchphrase} */}
          <div >
            <small>{bot.catchphrase}</small>
          </div>
        </div>


        <div className="extra content">
          <span>
             {bot.health}
             {bot.damage}
             {bot.armor}
          </span>


            </div>
         </div>
     </div>
  );
};

export default BotCard;
