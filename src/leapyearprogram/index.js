function leapYear(year) {

  if (year >= 1582 ) {
    
    if(year % 4 === 0) {

      if (year % 100 === 0) {
  
        if( year % 400 === 0) {
          
          return true
        } else {
          return false
        }
      } else {
        return true
      }  
    } 
    else {
      return false
    }  
  } else {
    throw new Error('Leap Years do not exist at that point in time.')
  }
}

export default leapYear