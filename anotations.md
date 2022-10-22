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

# Context
  >Prop diling, fica passando propriedade a varios subniveis do codigo, por isso usa o context
  >Cria o contexto = createContext(PASSA O VALOR INICIAL)[arq separado criando  UMA CONST e joga esse componente ao redor dos componentes filhos que irao receber o contexto]
  >nao esquecer do Provider -> recebe um value OBRIGATORIO
  >

# Criando Hooks
  >