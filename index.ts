#! /usr/bin/env node

import inquirer from "inquirer";
import{differenceInSeconds} from "date-fns"

const res = await inquirer.prompt(
    {
        type: "number",
        name: "userinput",
        message: "Please enter the amount of seconds"
    }
)

let input = res.userinput

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() =>{
        const currentTime = new Date()
        const timeDiff =  differenceInSeconds(intervalTime,currentTime)

        if(timeDiff <= 0){
            console.log("Time has expired")
            process.exit()
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`)
    }
),1000)
}

startTime(input)