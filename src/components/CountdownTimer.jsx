import { useEffect, useState } from "react"
import "../scss/Countdown.scss"
const CountdownTimer = ({targetDate}) => {
    const CalculateTime=()=>{
        const now = new Date().getTime()
        const difference = targetDate - now

        if (difference < 0){
            return{
                days:0,
                hours:0,
                minutes:0,
                seconds:0,
            }
        }
        const days = Math.floor(difference/(1000*60*60*24))
        const hours = Math.floor((difference %(1000*60*60*24))/(1000*60*60))
        const minutes = Math.floor((difference % (1000*60*60))/(1000*60))
        const seconds = Math.floor((difference % (1000*60))/(1000))
        return{
            days,
            hours,
            minutes,
            seconds,
        }
    }
        const [timeLeft,setTimeLeft]=useState(CalculateTime())
        useEffect(()=>{
            const timer =setTimeout(() => {
                setTimeLeft(CalculateTime())
            }, 1000);
            return ()=> clearTimeout(timer)
        },[timeLeft])
    
    return (  
        <div className="container">  
    <div className="Timer">
        <div>
        <div className="box">
            <span className="nbr days">{timeLeft.days} </span>
            <span className="name">DAYS</span></div>
        </div>
        <div>
            <div className="box"><span className="nbr">{timeLeft.hours}</span><span className="name hours">HOURS</span> </div>
        </div>
        <div>
            <div className="box">
        <span className="nbr minutes">{timeLeft.minutes}</span>
            <span className="name">MINUTES</span></div>
        </div>
        <div>
        <div className="box">
        <span className="nbr seconds">{timeLeft.seconds}</span>
            <span className="name">SECONDES</span> </div>
        </div>
      </div> 
       </div>);
}
 
export default CountdownTimer;