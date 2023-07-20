import { Telegraf } from 'telegraf';
import Queue from 'bull';

// const LocalSession = require('telegraf-session-local')
// const Task = require('./models/tasks');
// const { message } = require ('telegraf/filters')
// const axios = require("axios");
// const CarModel =  require("./models/carModel") 

const bot = new Telegraf("6338484758:AAGDfx4RWQJvTk8_dJwNPKSHUaCuyVhwzAw");
const textQueue = new Queue('text-queue', 'redis://172.20.10.2:6379');
 
// import  {CarDesc}  from ".../models/carModel"
// import {initDatabase} from ".../initDatabase"

export class BotLogic{
    public static start = async () => {
        const bot = this.setupBot();
        bot.launch()
    }
    public static setupBot(){
   
    // bot.use((new LocalSession({ database: 'example_db.json' })).middleware())
        bot.command('start', (ctx) => {ctx.reply("hello")});
        
        // getOnce(156076965)
        textQueue.process((job, done)=> {
            console.log(job.data)
            // sendMessage(job)
            this.getOnce(job.data)
            job.progress(42);
            // call done when finished
            done();
    
            done(new Error('error transcoding'));
        
            // or pass it a result
            done(null, { framerate: 29.5 /* etc... */ });
    
        });
        
        
        return bot;
    }
    public static async getOnce(id:object){ 
        // console.log(id.data)
        // console.log(typeof(id.data))
        // const car = await CarDesc.findOne({ 
        //     _id: id         
        // }) 
        // console.log(car)
         
        // if (car) { 
        //     let title = car.title
        //     let city = car.city
        //     let price = car.price.substring(0,car.price.length-2)
        //     let year = car.year
        //     let url = `https://kolesa.kz/a/show/${car._id}` 
        //     let generation = car.generation
        //     let drive = car.drive
        //     let mileage_run = car.mileage_run
        //     let clearedInKazakhstan = car.clearedInKazakhstan
        //     let color = car.color
        //     let rudder = car.rudder
        //     let body = car.body
        //     let capacity = car.capacity
        //     let message = "__" + title+"__" + "\n"+
        //                     "Город " + city + "\n"+
        //                     "Цена " + price.trim() +
        //                     "\nГод " + year +"\n"+
        //                     "Поколение " + generation + "\n"+
        //                     "Привод " + drive + "\n"+
        //                     "Пробег " + mileage_run + "\n"+
        //                     "Растоможено в Казахстане " + clearedInKazakhstan + "\n"+
        //                     "Цвет " + color + "\n"+
        //                     "Руль " + rudder + "\n"+
        //                     "Кузов " + body + "\n"+
        //                     "Объем " + capacity + "\n"+
        //                     "Ссылка " + url;
             
            bot.telegram.sendMessage(531923094, "1")
        } 
    } 
 
// module.exports = {
//     setupBot
// }
