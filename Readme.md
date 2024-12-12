<h1 align="center">Проект по автоматизации тестирования тестового сайта</h1>

##  Содержание:
- <a href="#cases"> Тест-кейсы</a>
- <a href="#autotests"> Запуск автотестов</a>
- <a href="#generateAllureReport"> Генерация отчетов</a>
- <a href="#jenkins"> Сборка в Jenkins</a>
- <a href="#allureReport"> Пример Allure-отчета</a>
- <a href="#allureTestOpsReport"> Пример Allure TestOps-отчета</a>
- <a href="#tg"> Уведомления в Telegram с использованием бота</a>

Тесты написаны на языке <code>JavaScript</code> с использованием фреймворка для автоматизации тестирования <code>[Playwright](https://playwright.dev)</code>.

Для удаленного запуска реализована джоба в <code>Jenkins</code>, а так же <code>Github</code> action с формированием Allure-отчета и отправкой результатов в <code>Allure TestOps</code> и <code>Telegram</code> при помощи бота.

____
<a id="cases"></a>
## 🕵️‍♂️ Тест-кейсы
### Auto:
- Проверка авторизации
- Создания нового пользователя
- Создание нового проекта
- Создание новой задачи
- Изменение статуса задачи
- API тесты

<a id="autotests"></a>
____
## ▶️ Запуск автотестов, генерация отчетов

### Запуск тестов из терминала

Для запуска всех тестов использовать команду ниже:
```
npm test
```
Для запуска тестов на API:
```
npx playwright test --project=api
```
Для запуска тестов на UI:
```
npx playwright test --project=ui
```

<a id="generateAllureReport"></a>
_____
### Генерация отчетов Allure из терминала

Для генерация отчетов использовать команду ниже:
```
npm run allure
```

---
<a id="jenkins"></a>
## <img width="20" style="vertical-align:middle" title="Jenkins" src="media/logo/jenkins.svg"> </a> Сборка в <a target="_blank" href="https://jenkins.autotests.cloud/job/001-braunman-JsPlaywrightFinalWork/"> Jenkins </a>
Для доступа в Jenkins необходима регистрация на ресурсе [Jenkins](https://jenkins.autotests.cloud/) Для запуска сборки необходимо перейти в раздел <code>Build with parameters</code>, выбрать необходимые параметры и нажать кнопку <code>Build</code>.
<p align="center">
<img title="jenkins" src="media/screenshots/jenkins.png ">
</p>
После выполнения сборки, в блоке <code>Build History</code> напротив номера сборки появятся значки <code>Allure Report</code>, при клике на которые откроется страница с сформированным html-отчетом.

____
<a id="allureReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure Report" src="media/logo/allure.svg"> </a> Пример <a target="_blank" href="https://jenkins.autotests.cloud/job/001-braunman-JsPlaywrightFinalWork/allure/"> Allure-отчета </a>
<p align="center">
<img title="Allure Report" src="media/screenshots/allure.png">
</p>

____
<a id="allureTestOpsReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure TestOps Report" src="media/logo/testops-logo.png"> </a> Пример <a target="_blank" href="https://allure.autotests.cloud/launch/43117/"> Allure TestOps-отчета </a>
<p align="center">
<img title="Allure TestOps Report" src="media/screenshots/allure-testops.png">
</p>

____
<a id="tg"></a>
## <img width="30" style="vertical-align:middle" title="Telegram" src="media/logo/telegram.svg"> Уведомления в Telegram с использованием бота
После завершения сборки, бот, созданный в <code>Telegram</code>, автоматически обрабатывает и отправляет сообщение с отчетом
о прогоне тестов в [специально настроенный чат](https://t.me/AlDvoFWbot).
<div style="background-color: #18222d">
<p align="center">
<img width="40%" title="Telegram Notifications" src="media/screenshots/telegram.png">
</p>
</div>