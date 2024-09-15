# Contributing to Real Dev Squad Discord Bot

- [Getting Started](#getting-started)
- [Setting Up Local Development](#setting-up-local-development)
- Readme

## Getting Started

To contribute to this project, you have to set up few things first.

- Create an account on Cloudfare Workers and Discord if you don't already have one
- Create a personal discord server
- Fork and clone this repo (this is optional; if you are a member of RDS community, you don't have to fork)
- Install volta - this will check if you have the right node version or not
- Create a .env file in the root directory of the project

Next, you need to gather few details that will be crucial for setting up your local environment. The IDs that you will gather in the next steps, will be stored as secret keys on the Cloudfare workers platform, where the application will be hosted.

- To get the guild ID of your server :
  - Open your discord server
  - Click on the server name in the top-left corner
  - Click on Server Settings
  - Click on the Widget tab in the side panel
  - Copy/paste the Server ID in the .env file as `DISCORD_GUILD_ID`
- Visit [Discord Developer Portal](https://discord.com/developers/applications)
- Click on new application.
- Under the General Information panel
  - copy/paste the Application ID in the .env file as `DISCORD_APPLICATION_ID`
  - copy/paste the Public Key in the .env file as `DISCORD_PUBLIC_KEY`

Next, you need to create your own bot. The idea here is that you will have your own bot that can be used to run all commands in your private server. You can add new features and test it there to make sure everything works as expected, before deploying the code on production.

- To create a bot, go to the Bot panel and click on 'Add Bot'
- Next, copy the token from the dashboard there and save it in the .env file as `DISCORD_TOKEN `.
- Next, you have to generate a set of RSA keys 2048 bit in size. We will use them as `BOT_PRIVATE_KEY` and `BOT_PUBLIC_KEY`.

  - You can read more about RSA keys [here](https://www.namecheap.com/support/knowledgebase/article.aspx/798/69/what-is-an-rsa-key-used-for/)
  - All you need to know for now is that the private and public keys are used when authenticating using JWT.
  - You can generate your own keys for local development [here](https://cryptotools.net/rsagen)

- Navigate to OAuth2 > URL Generator
  - In scopes select `bot` and `applications.commands`
  - In Bot Permissions select
    - Manage Roles
    - Change Nickname
    - Manage Nicknames
    - Send messages
    - Create public threads
    - Create private threads
    - Send message in threads
    - Embed links
    - Mention Everyone
    - Use slash commands
    - Kick Members

After providing all the permissions, a URL will be generated below.

- Copy/paste this URL in a new browser window
- Select your private server from the dropdown and authorize
- This will invite the bot to your private discord server

## Setting Up Local Development

- run `npm install`
- Now, run the command `npm run register` - this will register all the commands to your discord bot.

Next you will have to set up the wrangler cli, so that you can connect to your cloudflare workers account.

- run `npx wrangler login` -> You will be prompted to authenticate your account, after which you will see a 'successfully logged in' message in your terminal
- For a sanity check, run `npx wrangler whoami` -> You will then see your account name and account id in the terminal

- Run the command `npm run deploy`
- Go to Your cloudflare `dashboard > workers > discord-slash-commands > settings > variables > edit Variables`
- Now add following variables to your environment:

  - `BOT_PRIVATE_KEY`
  - `DISCORD_GUILD_ID`
  - `DISCORD_PUBLIC_KEY`
  - `DISCORD_TOKEN`

- Encrypt all the variables after adding then save and deploy

- Now, start the local server with the command `npm start`- make sure it is running on port `8787`
		- In case of Ubuntu, This step might produce an error: 
		> 
- Go to `cloudflare > workers-pages > copy the url under preview which endswith '.workers.dev' `
- Now, go to [Discord Developer Portal](https://discord.com/developers/applications) and select your bot
  - In the General Information, paste the url in the `INTERACTIONS ENDPOINT URL` field.

To verify if your bot is working:

- Go to the server where your bot was invited
- run a /hello command and the bot should reply with `Hello <Your_username>`

Now to setup discord in `rds-backend`

- Go to Your cloudflare `dashboard > workers > discord-slash-commands > settings > variables > edit Variables`
- Now add one more variables to your environment:

  - `RDS_SERVERLESS_PUBLIC_KEY` ([generate here](https://cryptotools.net/rsagen))

- Go to config/local.js, add

```
 services:{
   discordBot: {
     baseUrl: "<Cloudflare_url>",
   },
 }

 botToken: {
   botPublicKey: "<botPublicKey>", ( go to development in config folder and follow the same format to add keys)
 },


 rdsServerlessBot: {
   rdsServerLessPrivateKey: "<RDS_SERVERLESS_PRIVATE_KEY>", ( go to development in config folder and follow the same format to add keys)
   ttl: 60,
 },
```

- Start the rds backend
- Open another terminal and type in the command `npx ngrok http <port backend running on>`.
- `ngrok` creates a secure tunnel that allows a local server to connect to external clients. It provides a URL that can be used to connect to a local server, just like if it were a public server hosted somewhere. For eg: Say you're running your app on `http://127.0.0.1:5501/` i.e localhost port 5501. Any external applications cannot connect to this server by default, but `ngrok` will give you a `http(s)` URL that any other client can use to connect to this server.
- copy the `https` URL

- Also update the `local Url` of backend with `https` url given by ngrok

- Go to `constants.js` in discord-slash-commands
- Go to `src/constants/urls.ts`
- Change the `RDS_BASE_DEVELOPMENT_API_URL`,`RDS_BASE_STAGING_API_URL` and `RDS_BASE_API_URL ` to the `ngrok https` URL generated for rds backend
- run `npm run deploy`

(!Warning: `ngrok update its url in every 2 hr or less so keep it updated`)

Now, go to [Discord Developer Portal](https://discord.com/developers/applications) > `Bot` > `under the heading of Privileged Gateway Intents ,turn on server member intent`

To check this, try running '/verify' command in your discord

If you want to add discordId to your user data then run (website-my)[https://github.com/Real-Dev-Squad/website-my] along with it to access the link after `/verify` command

(Note:`if it doesn't run , try running the command almost three to four times.`)

Now you are ready to contribute to the Repository.

## Readme
# Discord Slash Command

This is a discord bot for RealDevSquad discord server capable of using slash commands.

The bot is written in TypeScript and will be hosted on cloudflare workers. Cloudflare workers provide us with a serverless environment to run our code.

In case you are thinking of using any NPM package on it please check if it is compatible with the Cloudflare workers.
You can do so by visiting the following link: https://workers.cloudflare.com/works

To get an example and look at runtime apis for cloudflare workers you can go to: https://developers.cloudflare.com/workers/runtime-apis

To start the server use

```
npm start
```

This will start your server on `localhost:8787`

To connect this to your own bot you need a https end point. To get a `https` endpoint that redirects all the traffic to your localhost, we are using `ngrok`

To start this, run the command

```
npm run ngrok
```

You can not commit your changes unless it satisfies the required format.
To check the formatting of the file run

```
npm run format-check
```

To check the linting issues use

```
npm run lint-check
```

To fix the formatting issue use

```
npm run format-fix
```

We are using `itty-router` over here which is a light weight router designed for cloudflare workers.
In case you are interested in it you could read more about it here:

- https://github.com/kwhitley/itty-router
- https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers/

We need few environment variables for this project to work, they are as follows:

```
DISCORD_TOKEN: The token generated for your bot while creating a discord application
DISCORD_PUBLIC_KEY: Public key of your Discord bot helps to verify the bot and apply interaction url
DISCORD_APPLICATION_ID: The application id of your bot.
DISCORD_GUILD_ID: Id of the guild where you want to install the slash commands.
```

To add more commands you need to modify following files:

```
- src/constants/commands.ts (Export your commands as a constant)
- src/register.ts (import the newly added command here and assign it to the commands array)
- now run `npm run register`
```