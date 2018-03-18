const date = new Date()


const checkDayLater = timestamp => {
    let later = null
    const day = timestamp.split(" ")[0].split('-')
    const time = timestamp.split(" ")[1].split(':')
    const currentMonth = date.getMonth() + 1
    const diffMonth = currentMonth - parseInt(day[1])
    switch (diffMonth) {
        case 0:
            const currentDay = date.getDate()
            const currentHour = date.getHours()
            const diffDay = currentDay - parseInt(day[2])
            switch (diffDay) {
                case 0:
                    const diffHour = currentHour - time[0]
                    switch(diffHour) {
                        case 0:
                            const diffMinute = date.getMinutes()
                            switch(diffMinute) {
                                case 0:
                                    later = 'now'
                                    break
                                case 1:
                                    later = `${diffMinute} minute later`
                                    break
                                default:
                                    later = `${diffMinute} minutes later`
                                    break                            
                            }
                            break
                        case 1:
                            later = `${diffHour} hour later`
                            break
                        default:
                            later = `${diffHour} hours later`
                            break
                    }
                    break
                default:
                    later = day.join("/")
                    break
            }
            break
        default:
            later = day.join("/")
            break
    }
    return later
}

export default checkDayLater