
const express=require('express')
const PORT=3001

express()
    .set('view engine','ejs')//view engine движок для ejs
    //req 
    //res
    .use('/static', express.static('public')) //под статиком будет все содержимое паблика это правило на уровне сервера
    //уровень сервера /style/css/main.css
    .get('/',(req,res)=>{
        res.render('pages/index') //обращение к роутам(маршрутам-пути к нашим страницам)
        //рендер отрисовка ,он не работает тогда когда он сам захочет,а когда пользователь будет задействовать с нашим сайтом
        //рес отправляем на фронт
    })
    .get('/about',(req,res)=>{
        res.render('pages/about')
    })
    .listen(PORT,()=>console.log('it is a magic port' +PORT))//слушай порт 

