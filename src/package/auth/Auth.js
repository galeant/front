export default function(Vue){
    Vue.auth = {
        // SET TOKEN
        setToken(token,expiration){
            console.log(token)
            localStorage.setItem('token',token)
            localStorage.setItem('expiration',expiration)
        },
        // GET TOKEN
        getToken(){
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            if(!token || !expiration){
                return null
            }

            if(Date.now() > parseInt(expiration)){
                this.destroyToken()
                return null
            }else{
                return token
            }
        },
        // DESTROY TOKEN
        destroyToken(){
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },
        // AUTH
        isAuth(){
            if(this.getToken()){
                return true
            }else{
                return false
            }
        }
    }

    Object.defineProperties(Vue.prototype,{
        $auth:{
            get:() =>{
                return Vue.auth
            }
        }
    })
}