const formatTime = (time) => time.toString().length === 1 ? `0${time}` : time;

export function Timestamp(time){
    return (
      Math.floor(formatTime(time / 60)) + ' ' + (time / 60 === 1 ? 'hora' : 'horas') + ' ' + 'de sessão'
    );
}