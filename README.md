
Опис проекту: Інтернет-Магазин з Кошиком

Інтернет-магазин зі зручною системою кошика та іншими функціональностями, реалізованими за допомогою бібліотеки React та інших суміжних інструментів. 

1. Огляд структури та компонентів: Проект використовує React для створення інтерфейсу користувача. Основна структура проекту включає компоненти: Header, Shop, Cart, та Error. Кожен з цих компонентів відповідає за певний фрагмент інтерфейсу. Головний компонент App відповідає за маршрутизацію та організацію інших компонентів відповідно до шляху URL.

2. Взаємодія зі станом за допомогою Redux: Для керування станом додатку використовуємо бібліотеку Redux. Стан додатку розділений на кілька частин: products, button, cart, та user. Кожна з цих частин має свій редюсер, який відповідає за обробку змін у відповідному стані.

3. Робота з продуктами та фільтрація: За допомогою редюсера products керуємо списком товарів у магазині. Цей редюсер також вміє фільтрувати товари залежно від вибраної категорії. Користувач може вибрати категорію за допомогою інтерфейсу та побачити тільки відповідні товари.

4. Кнопки для фільтрації за магазинами: Створено бічне меню, де використовується редюсер button для відображення унікальних назв магазинів. Кожна кнопка відповідає за фільтрацію товарів відповідного магазину.

5. Робота з кошиком: Користувач може додавати та видаляти товари у кошику. Використовується редюсер cart для управління цим функціоналом. Кількість доданих товарів зберігається в стані, і користувач може збільшувати або зменшувати кількість товарів в кошику.

6. Користувачі та їх дані: Для збереження інформації про користувачів використовується редюсер user. Користувачі можуть додавати свої дані, такі як ім'я, електронна пошта, телефон та адреса.

7. Організація коду та взаємодія компонентів: Код проекту організований у різних файлових модулях для зручності розробки та підтримки. Компоненти взаємодіють між собою за допомогою роутингу, який забезпечує коректне відображення вмісту в залежності від поточного шляху URL.

Висновок: Проект є прикладом інтернет-магазину з розширеними можливостями управління товарами, кошиком та користувачами. Він демонструє використання бібліотеки React для побудови інтерфейсу та Redux для ефективного керування станом додатку. 


=======================================================

Project Description: Online Store with Cart

An online store with a convenient shopping cart system and other functionalities implemented using the React library and other related tools.

1. Overview of Structure and Components: The project utilizes React for creating the user interface. The main project structure includes components: Header, Shop, Cart, and Error. Each of these components is responsible for a specific part of the interface. The main App component handles routing and organizes other components according to the URL path.

2. State Management with Redux: To manage the application's state, we use the Redux library. The application's state is divided into several parts: products, button, cart, and user. Each of these parts has its own reducer responsible for handling changes in the respective state.

3. Working with Products and Filtering: Through the products reducer, we manage the list of items in the store. This reducer also handles filtering products based on the selected category. Users can choose a category through the interface and see only relevant products.

4. Buttons for Store Filtering: A sidebar menu has been created, where the button reducer is used to display unique store names. Each button is responsible for filtering products from the corresponding store.

5. Cart Functionality: Users can add and remove items from the cart. The cart reducer is used to manage this functionality. The quantity of added items is stored in the state, and users can increase or decrease the quantity of items in the cart.

6. Users and Their Data: The user reducer is used to store information about users. Users can add their data, such as name, email, phone, and address.

7. Code Organization and Component Interaction: The project's code is organized into different file modules for development and maintenance convenience. Components interact with each other through routing, ensuring the proper display of content based on the current URL path.

Conclusion: The project serves as an example of an online store with advanced features for managing products, a cart, and users. It demonstrates the use of the React library for building the interface and Redux for efficient state management.
