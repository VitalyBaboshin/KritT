# React + TypeScript + Vite + Biome

версия node v20.12.2

npm i
npm run dev

Время на реализацию этого теста в сумме часов 10.
(из них на поиск иконок с риками и их сохранением, полчаса потрачено )))
Есть некоторые моменты, которые хотел бы прокомментировать:

-Общее тз выполнено.
-Написано в задании по методолигии Бэм? Бэм хорошо для одностраничников, когда же пишешь большие проекты во первых недолжно быть файла монолита со стилями. То есть у каждого компонента свой файл со стилями. Во вторых лучше все же применять стили в таком виде:
classname={styles.leftSide} (в реакте стили в модулях принято всеже в snakeCase писать) Вот тут и момент что в Бэм применяется написание типа avatar\_\_user-info "-" этот знак не вставить в className={styles...}.
-По хорошему необходимо использовать стейт менеджер, для хранения информации о текущих контактах, переключения между контактами, сообщениях. А также что более важно внутри этого стора делать запросы к беку для загрузки контактов отправления/поучения сообщений и сохранения локально изменений.
-Необходимо вытащить методы в компоненте Chat: createOrSelectChat и sendMessage как минимум в futures? А лучше таки в стор. То есть бизнесовую логику вытащить в отдельный слой коим является стор.
-Возможно некоторую логику в компонентах необходимо вытащить в хуки для более читаемого кода.
-Возможно необходимо больше комментариев по коду(но в данном случае компоненты достаточно простые, и логика не сложная)

чуть не забыл: в entities добавлены отдельно ChatItem и ContactItem хотя они почти похожи, и можно было сделать один компонент( с условием отображать время или нет)... Но я посчитал что это два разных компонента совершенно, ведь то в одном то вдругом могут быть дополнительные изменения отображения(прилетят дополнительные требования), и потом это все приведет к одному большом компоненту с большим количество условных пропсов, которые будет тяжело отследить.
