import React from "react";
import { useState, useEffect } from "react";
import BotList from "./BotList";
import YourBotArmy from './MyArmy'
import BotSpecs from "./BotDetails";

function BotsPage() {
  const [allBots, setAllBots] = useState([]);
  const [selectBot, setSelectBot] = useState(undefined);
//   fetching my data which I stored in a dblClick.json file  

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(bots => {
        const modifiedBots = bots.map(bot => ({ ...bot, owned: false }));
        setAllBots(modifiedBots);
      });
  }, []);

  const clearSpec = () => {
    setSelectBot(undefined);
  };

  const clickBot = (bot) => {
    setSelectBot(bot);
  };

  const addBot = (selectedBot) => {
    const modifiedBots = allBots.map(bot => {
      if (bot.id === selectedBot.id) {
        return { ...bot, owned: !bot.owned };
      }
      return bot;
    });
    setAllBots(modifiedBots);
  };

  return (
    <div>
      <YourBotArmy bots={allBots.filter(bot => bot.owned)} addBot={clickBot} />
      <br />
      {selectBot ?
        <BotSpecs bot={selectBot} clearSpec={clearSpec} addBot={addBot} /> :
        <BotList bots={allBots.filter(bot => !bot.owned)} addBot={clickBot} />}
    </div>
  );
}

export default BotsPage;
