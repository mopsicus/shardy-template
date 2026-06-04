<a href="./README.md">![Static Badge](https://img.shields.io/badge/english-118027)</a>
<a href="./README.ru.md">![Static Badge](https://img.shields.io/badge/russian-0390fc)</a>
<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="media/logo-template-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="media/logo-template.png">
        <img alt="Shardy template" height="256" width="256" src="media/logo-template.png">
    </picture>
</p>
<h3 align="center">Шаблон сервиса для Shardy</h3>
<h4 align="center">Фреймворк для игр и приложений</h4>
<p align="center">
    <a href="https://github.com/mopsicus/shardy">Shardy</a> · <a href="https://github.com/mopsicus/shardy-unity">Unity клиент</a> · <a href="https://github.com/mopsicus/shardy-template/issues">Отчёт об ошибке</a>
</p>

# 💬 Описание

Это шаблон сервиса для Shardy.

Shardy – это фреймворк для онлайн игр и приложений на Node.js. Он предоставляет базовую функциональность для построения микросервисных решений: мобильных, социальных, веб, многопользовательских игр, приложений реального времени, чатов, middleware сервисов и т.п.
 
[Подробнее про Shardy](https://github.com/mopsicus/shardy) 💪

# 🚀 Быстрый старт

Начать разработку своего проекта с помощью Shardy очень просто:

1. Склонируйте шаблон сервиса
    ```
    git clone git@github.com:mopsicus/shardy-template.git
    ```
2. Установите Shardy и все зависимости
    ```
    npm install
    ```
3. Измените `.env.dev`
4. Запустить дебаг режим
    ```
    npm run debug
    ```

### Содержимое шаблона

1. Стартер приложения
2. Заглушка валидатора
3. Простой сериализатор
4. Пример сервиса
5. Примеры команды и запросов
6. Загрузчик команд

Все методы и примеры API приведены в [документации по Shardy](https://github.com/mopsicus/shardy).

### Примеры

В шаблоне есть несколько примеров, показывающих как использовать Shardy API с помощью бота. Кроме того, шаблон включает простые примеры валидатора (handshake) и сериализации.

```ts
// запрос
const response = await this.bot.fetch('status');
this.bot.log.info(`test fetch answer: ${response.data}`);

// запрос с колбеком
this.bot.request('status', (response) => {
    this.bot.log.info(`test request answer: ${response.data}`);
});

// запрос с данными
this.bot.request('status', (response) => {
    this.bot.log.info(`test request with data, answer: ${response.data}`);
}, Buffer.from('request_data'));

// запрос с ошибкой в ответе
this.bot.request('fail', (response) => {
    if (response.error.length > 0) {
        this.bot.log.error(`test request fail: ${response.data}`);
    }
});

// команда
this.bot.command('notify');

// команда с данными
this.bot.command('notify', Buffer.from('command_data'));
```

# 🤝 Поддержка

Вы можете поддержать проект любым из способов ниже:

* Bitcoin (BTC): bc1qaejavqm0r2fnx3d6mhvt8r6uqzwzun5vwkryn2
* USDT (TRC20): TLDPntuWNZRZTiWmtaKvZH7cVFXuf5TQvS
* TON: UQBrv16QN-6y2Jba0IgoKJEGB4u7_0ilPw8BXDH7M9NnExhw
* Карты Visa, Mastercard через [Boosty](https://boosty.to/mopsicus/donate)
* Карты МИР через [CloudTips](https://pay.cloudtips.ru/p/9f507669)

# ✉️ Контактная информация

Перед тем как задать вопрос, лучшим решением будет посмотреть уже существующие [проблемы](https://github.com/mopsicus/shardy-template/issues), это может помочь. В любом случае, вы можете задать любой вопрос или отправить предложение по [email](mailto:mail@mopsicus.ru) или [Telegram](https://t.me/mopsicus).

# 🔑 Лицензия

Шаблон для Shardy выпущен под лицензией [MIT](./LICENSE). Используйте бесплатно и радуйтесь. 🎉
