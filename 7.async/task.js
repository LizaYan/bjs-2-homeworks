class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }
       
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        } 

        for (let i = 0; i < this.alarmCollection.length; i++ ) {
            if (this.alarmCollection[i] == time) {
                console.warn('Уже присутствует звонок на это же время'); 
            }
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((clock) => clock.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date;
        let currentTime = String(date.getHours()) + ':' + String(date.getMinutes()); 
        return currentTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        function checkClock(clock, currentTime) {   
            if (clock.time == currentTime && clock.canCall == true) {
                clock.canCall = false;
                clock.callback(); 
            } 
        }
        
        this.intervalId = setInterval(this.alarmCollection.forEach(x => checkClock(x, this.getCurrentFormattedTime())), 1000);
    }   

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(x => x.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
