const mix = require("laravel-mix");
const fs = require("fs");

const getFiles = function (dir) {
    return fs.readdirSync(dir).filter((file) => {
        return fs.statSync(`${dir}/${file}`).isFile();
    });
};

mix.js("resources/js/app.js", "public/js").extract(["react", "jquery"]).react();

mix.js("resources/js/bootstrap.js", "public/js/");
mix.sass("resources/sass/app.scss", "public/css");

getFiles("resources/js/blade").forEach((filepath) => {
    mix.js("resources/js/blade/" + filepath, "public/js/blade/").react();
});

getFiles("resources/sass/styles").forEach((filepath) => {
    mix.sass("resources/sass/styles/" + filepath, "public/css/views/");
});
