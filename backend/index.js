const express= require ('express') ;
 const app= express();
 const { default: mongoose } = require('mongoose')
 mongoose.set('strictQuery', true);
 const port=process.env.PORT|| 5000



 
 app.use(express.json())

 app.use('/api/users',require('./router/userRouter'));
 app.use('/api/cars',require('./router/carRouter'));








 
//  app.get('/api/cars/getallcars',(req,res)=>{
//   res.send([
//    {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
//       "Name": "Mazda MX-5",
//       "start_production": 1989,
//       "class": "Sports car Roadster"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
//       "Name": "Volkswagen Kübelwagen",
//       "class": "Military vehicle"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
//       "Name": "Porsche Cayenne",
//       "start_production": 2002,
//       "class": "Mid-size luxury crossover SUV"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
//       "Name": "Vauxhall Chevette",
//       "start_production": 1975,
//       "class": "Supermini"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
//       "Name": "Dymaxion car",
//       "start_production": 1933,
//       "class": "Concept car"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
//       "Name": "Ford Crown Victoria",
//       "start_production": 1955,
//       "class": "Full-size Ford"
//   },
//   {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
//       "Name": "Plymouth Superbird",
//       "start_production": 1970,
//       "class": "Muscle car(today) and Race car(Past)"
//   },
//   {
//    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
//    "Name": "Pontiac G6",
//    "start_production": 2004,
//    "class": "Midsize"
// }
  
// ])
// })
 
 mongoose.connect('mongodb://127.0.0.1:27017/CAR-RENT?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4').then(() => {
   app.listen(port, () => { console.log(`server running ${port}`)})
})
   .catch((err) => {
       console.log('there is error');
       console.error(err);
      })