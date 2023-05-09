const express = require('express')
const path = require('path')
const favicon = require('serve-favicon');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const PORT = process.env.PORT || 5000

var app = express()

app
  .use(express.static(path.join(__dirname, 'public')))
	.use(favicon(path.join(__dirname,'public','images','favicon.ico')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', async(req,res)=>{ 
	try {
		const base_url="https://oudyhs.000webhostapp.com/getrecent.php"
		await fetch(base_url).then(res=>res.json()).then(data=>{
			//console.log(data)
			res.render('pages/index', {data: data});
		})
	}
	catch (err) {
		res.send(err);
	}
})

app.get('/en', async(req,res)=>{ 
	try {
		const base_url="https://oudyhs.000webhostapp.com/getrecent.php?lang=en"
		await fetch(base_url).then(res=>res.json()).then(data=>{
			res.render('pages/index', {data: data});
		})
	}
	catch (err) {
		res.send(err);
	}
})

app.get('/es', async(req,res)=>{ 
	try {
		const base_url="https://oudyhs.000webhostapp.com/getrecent.php?lang=es"
		await fetch(base_url).then(res=>res.json()).then(data=>{
			res.render('pages/index', {data: data});
		})
	}
	catch (err) {
		res.send(err);
	}
})

app.get('/letra/:id', async(req,res)=>{ 
	try {
		const urls = ["https://oudyhs.000webhostapp.com/getletra.php?tid="+req.params.id+"&lang=en",
									"https://oudyhs.000webhostapp.com/getalbumtracks.php?tid="+req.params.id]
		const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.json()));
		//console.log(data)
    res.render('pages/letra', {data: data});
	}
	catch (err) {
		res.send(err);
	}
})