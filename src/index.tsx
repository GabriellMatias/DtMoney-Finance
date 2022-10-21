import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[{
        id: 1, 
        title: 'Testando API',
        type: 'deposity',
        category: 'developer',
        amount: 5000,
        createdAt: new Date('2021-02-15 09:00:00'),
      },
      {
        id: 2, 
        title: 'Frereelancers',
        type: 'withdraw',
        category: 'Tools',
        amount: 100,
        createdAt: new Date('2025-02-18 11:59:00'),
      }]
    })
  },

  routes() {
    this.namespace = "api";


    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });


    this.post("/transactions", (schema, request) => {
      /* request vem como string, converta para JS com o JSON.parse*/
      const data = JSON.parse(request.requestBody);
      /* retorna o banco=schema com o create que recebe qual o nome do MODEL e os dados que ele vai receber*/
      return schema.create("transaction", data);
    });

  },

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
