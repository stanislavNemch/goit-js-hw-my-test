document.addEventListener("DOMContentLoaded", () => {
    // Статический список всех файлов, которые нужно подключить
    const scriptFiles = [
        "js/module-2/task-1.js",
        "js/module-2/task-2.js",
        "js/module-2/task-3.js",
        "js/module-2/task-4.js",
        "js/module-2/task-5.js",
        "js/module-2/task-6.js",
        "js/module-2/task-7.js",
        "js/module-2/task-8.js",
        "js/module-2/task-9.js",
        "js/module-2/task-10.js",
        "js/module-2/task-11.js",
        "js/module-2/task-12.js",
        "js/module-2/task-13.js",
        "js/module-2/task-14.js",
        "js/module-2/task-15.js",
        "js/module-2/task-16.js",
        "js/module-2/task-17.js",
        "js/module-2/task-18.js",
        "js/module-2/task-19.js",
        "js/module-3/task-1.js",
        "js/module-3/task-2.js",
        "js/module-3/task-3.js",
        "js/module-3/task-4.js",
        "js/module-3/task-5.js",
        "js/module-3/task-6.js",
        "js/module-3/task-7.js",
        "js/module-3/task-8.js",
        "js/module-3/task-9.js",
        "js/module-3/task-10.js",
        "js/module-3/task-11.js",
        "js/module-3/task-12.js",
        "js/module-3/task-13.js",
        "js/module-3/task-14.js",
        "js/module-3/task-15.js",
        "js/module-3/task-16.js",
        "js/module-3/task-17.js",
        "js/module-3/task-18.js",
        "js/module-3/task-19.js",
    ];

    // Подключаем каждый файл, создавая <script> элемент
    scriptFiles.forEach((file) => {
        const script = document.createElement("script");
        script.src = file;
        document.body.appendChild(script);
    });
});
