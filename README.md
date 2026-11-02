# Getting Started with Create React App

## Профиль Артема Иванова

Адрес: `/members/artem-ivanov/`. Текст хранится в `src/components/artemIvanov.json`,
фото — `src/images/02534.jpg`. Ссылка на профиль размещена в списке членов за 2026 год.

`npm run build` создаёт готовый HTML профиля в `build/members/artem-ivanov/index.html`
из того же React-компонента, который используется в приложении. Текст, фотография,
canonical и JSON-LD доступны без выполнения JavaScript. `npm run test:profile`
проверяет содержимое готового HTML и поисковую разметку.

Сборка также создаёт `build/members/index.html` со списком участников.
Этот файл обязателен: папка `members` существует из-за вложенных профилей,
а Apache исключает существующие папки из общего SPA fallback. Без индексного
файла запрос `/members/` может вернуть 403. Правило в `public/.htaccess`
направляет `/members` и `/members/` на этот файл. При обновлении хостинга
загрузите также скрытый файл `build/.htaccess` в корень сайта.

При публикации загрузите весь каталог `build`. Хостинг должен отдавать файл
`members/artem-ivanov/index.html` по адресу `/members/artem-ivanov/` с HTTP 200
до применения общего SPA fallback. После публикации проверьте этот адрес
в Google Search Console и запросите индексацию; sitemap уже содержит профиль.
Разметка `ProfilePage` / `Person` описывает страницу, но не гарантирует включение
в режим ИИ Google: https://developers.google.com/search/docs/appearance/ai-features.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
