// handle error User regist & update
function error_message(err){
  if(err.errmsg){
    return 'username is already'
  }else if(err.errors.email){
    return err.errors.email.message
  }
}

module.exports = error_message
