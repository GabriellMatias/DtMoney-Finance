# MIRAGE JS
  >API fake dentro do front end
  >instala o mirage
  > createServer  
    createServer({
      routes() {
      this.namespace= 'api'
      this.get('/transactions', ()=>{
        return [
          {
          id: 1, 
          title: 'Transaction 1',
          amount: 400,
          type: 'deposity',
          category: 'Food',
          createAt: new Date()    
        }]
      })
    },
  })

# Axios
  >

# React Modal
  >tela de aviso que aparece emfrente a tela
  >componente que serve como um pop-up, instala a blibioteca react-modal e dps @types/react-modal