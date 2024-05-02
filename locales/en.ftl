
-bot-name = TouchSwap

start_command = 
    .description = Start the bot
language_command = 
    .description = Change language
socials_command = 
    .description = Join community
help_command = 
    .description = Show Help
friend_command = 
    .description = Invite Friend
profile_command = 
    .description = Show Profile
setcommands_command =
    .description = Set bot commands


welcome = 
    .title =*Welcome @{ $name } to {-bot-name}*
    .title-second-paragraph =Tap on the coin and see your balance rise
    .title-third-paragraph =*{-bot-name}* is a Decentralized Exchange on the Solana Blockchain,  The biggest part of * {-bot-name} * Token TOUCH distribution will occur among the players here
    .title-fourth-paragraph = 
        Got friends, relatives, coWorkers?
        Bring them all into the game
        More buddies, more coins
    .menu-start = 👋 Start now!
    .menu-community = 🌐 Join Community!
    .menu-help = 🆘 Help
friend = 
    .text-caption = Share with your friends and earn bonuses for each friend you invite and for their activity:
    .text-referal = Your referral link: { $link } 

socials = 
    .text = Join our socials so you do not miss any important news or updates

help = 
    .earn-title =TouchSwap Tap to Earn:
    .earn-description =Embark on an engaging journey with TouchSwap, the captivating clicker game where your goal is to collect Shares by simply tapping on your screen.
    
    .leagues-title =Leagues:
    .leagues-description =Advance through the ranks by accumulating Shares faster than your competitors. Outpace others and ascend through the leagues to establish dominance.

    .boosts-title =Boosts:
    .boosts-description =Enhance your earning capabilities by unlocking powerful boosts. Complete various tasks to significantly increase your Shares income.

    .friends-title =Friends:
    .friend-description =Boost your progress by inviting friends. Both you and your invited friends will benefit from exclusive bonuses. Help your friends climb the leagues to reap even greater Shares rewards together.

    .purpose-title =The Purpose:
    .purpose-description =Amass a wealth of Shares to trade for TAPS, the exclusive TapSwap Token on the Solana Blockchain.

    .text =Type /help to view this guide anytime.
profile = 
    .title=@{ $name } profile
    .text = Bronze League
    Total score: {$score}
    Balance: {$balance}
    .bottom-text = /profile for personal stats


language = 
    .select = Please, select your language
    .changed = Language successfully changed
admin =
    .commands-updated = Commands updated.
unhandled = Unrecognized command Try /start