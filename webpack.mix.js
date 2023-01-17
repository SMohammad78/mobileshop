let mix = require('laravel-mix');

mix
    .css('src/css/app.css','public/assets/css')
    .js('src/js/app.js','public/assets/js')
    .js('src/js/swiper.js','public/assets/js')
    .js('src/js/search.js', 'public/assets/js')