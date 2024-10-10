<a href="./README.md">![Static Badge](https://img.shields.io/badge/english-118027)</a>
<a href="./README.ru.md">![Static Badge](https://img.shields.io/badge/russian-0390fc)</a>
<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="media/logo-template-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="media/logo-template.png">
        <img alt="Shardy template" height="256" width="256" src="media/logo-template.png">
    </picture>
</p>
<h3 align="center">Template service for Shardy</h3>
<h4 align="center">Framework for games and apps</h4>
<p align="center">
    <a href="https://github.com/mopsicus/shardy">Shardy</a> · <a href="https://github.com/mopsicus/shardy-unity">Unity client</a> · <a href="https://github.com/mopsicus/shardy-template/issues">Report Bug</a>
</p>

# 💬 Overview

This is a template for Shardy service.

Shardy is a framework for online games and applications on Node.js. It provides the basic functionality for building microservices solutions: mobile, social, web, multiplayer games, realtime applications, chats, middleware services, etc.
 
[Read about Shardy](https://github.com/mopsicus/shardy) 💪

# 🚀 Quick start

It's really easy to start developing your project with Shardy:

1. Clone a service template or creare a new one
    ```
    git clone git@github.com:mopsicus/shardy-template.git
    ```
2. Install Shardy and all dependencies:
    ```
    npm install
    ```
3. Edit `.env.dev`
4. Run debug mode
    ```
    npm run debug
    ```

### Template content

1. App started
2. Validator stub
3. Simple serializer
4. Service example
5. Requests/commands examples
6. Commands loader

See the [Shardy documentation](https://github.com/mopsicus/shardy) for all API methods and examples.

### Examples

There are a few examples in template that show how to use Shardy API with bot. Also, template includes simple validation and serialization examples.

```ts
// fetch
const response = await this.bot.fetch('status');
this.bot.log.info(`test fetch answer: ${response.data}`);

// request
this.bot.request('status', (response) => {
    this.bot.log.info(`test request answer: ${response.data}`);
});

// request with data
this.bot.request('status', (response) => {
    this.bot.log.info(`test request with data, answer: ${response.data}`);
}, Buffer.from('request_data'));

// request with fail
this.bot.request('fail', (response) => {
    if (response.error.length > 0) {
        this.bot.log.error(`test request fail: ${response.data}`);
    }
});

// command
this.bot.command('notify');

// command with data
this.bot.command('notify', Buffer.from('command_data'));
```

# 🤝 Support

You can support Shardy by using any of the ways below:

* Bitcoin (BTC): 1VccPXdHeiUofzEj4hPfvVbdnzoKkX8TJ
* USDT (TRC20): TMHacMp461jHH2SHJQn8VkzCPNEMrFno7m
* TON: UQDVp346KxR6XxFeYc3ksZ_jOuYjztg7b4lEs6ulEWYmJb0f
* Visa, Mastercard via [Boosty](https://boosty.to/mopsicus/donate)
* MIR via [CloudTips](https://pay.cloudtips.ru/p/9f507669)

# ✉️ Contact

Before you ask a question, it is best to search for existing [issues](https://github.com/mopsicus/shardy-template/issues) that might help you. Anyway, you can ask any questions and send suggestions by [email](mailto:mail@mopsicus.ru) or [Telegram](https://t.me/mopsicus).

# 🔑 License

Template for Shardy is licensed under the [MIT License](./LICENSE). Use it for free and be happy. 🎉