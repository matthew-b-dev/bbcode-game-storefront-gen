
### BBCode Game Storefront Generator
Generate store links for the games in your forum-post storefront

Live Site: https://matthew-b-dev.github.io/bbcode-game-storefront-gen/
___________


This tool is used to generate **game store links** in their forum-post "storefront".

Game forums often have a 'Buy/Sell/Trade' thread, where users create posts that represent their "storefront". Users' storefronts are often formatted like so ...

    Peggle Deluxe - $1
    Magicka - $3.50
    Kenshi - $2
   
... and quite often list 20-30 games in one post, all in **plaintext**. I.e. game names do not link to a game store such as Steam, GOG, or Epic Games Store. This makes for a less-than-satisfactory shopping experience.

### Why use this tool?

 - This tool will take a plaintext storefront and **automatically generate links** for every game to the selected game store (Steam/GOG/Epic, etc.).
 - Users can specify  the input format (games and price separated by a dash, colon, etc.) as well as a  desired currency ($ , € , £).
 - Users can copy the output ([BBCode](https://www.phpbb.com/community/help/bbcode)) with one click and can preview how it will look as a forum post.

### How are the links generated?
 - Short answer: **DuckDuckGo** has a way of forming URLs that specify that the browser should automatically redirect to the first result.
 - Longer answer:
   - This is accomplished using the `!ducky` bang operator.
   - e.g. `https://duckduckgo.com/?q=!ducky+steam+store+Peggle%20Deluxe`
     - Navigating to this link will search 'steam store Peggle Deluxe' and automatically redirect your browser to the first result.
   - This tool simply parses the storefront text and creates a bunch of these links. `steam+store` is obviously replaced with `epic+store` or `gog+store` depending on the selected store option.
   - ... and that's basically it! This is a very simple tool.
  
### Screenshot

![image](https://github.com/user-attachments/assets/cfc29e90-1ce2-4e60-9a82-b8c1730e194e)


 
