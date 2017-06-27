<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   </head>
   <body>
      <h1 id="teste-para-candidato-front-end">Teste para candidato Front-end</h1>
      <h2 id="descri-o-do-projeto">Descrição do projeto</h2>
      <p>Queremos desenvolver uma pequena aplicação web que nos permita encomendar pizzas.</p>
      <h2 id="objetivos">OBJETIVOS</h2>
      <pre><code>1. Nosso objetivo é encontrar respostas para as seguintes perguntas:
    * Você compreende a linguagem Javascript e tecnologias web em geral?
    * Você pode julgar qual biblioteca/framework/plugin melhor se encaixa em determinada situação e consegue usá-lo corretamente?
    * Você pode criar interfaces claras e fáceis de usar?
    * Você domina seu ambiente de trabalho?
</code></pre>
      <h2 id="vis-o">VISÃO</h2>
      <blockquote>
         <p>Definição de pronto: uma estória de usuário é considerada finalizada uma vez que todas as funcionalidades descritas tenham sido implementadas (back, front e banco) e automaticamente testadas.</p>
      </blockquote>
      <table>
         <thead>
            <tr>
               <th>Como cliente, eu gostaria de visualizar os sabores de pizzas disponíveis para selecionar o que eu desejar (1,0 ponto)</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>- Os sabores das pizzas devem estar listados em ordem alfabética.</td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>Como cliente, eu gostaria de selecionar os ingredientes, o tipo de massa e o tamanho da pizza para me permitir customizá-la da forma como eu quiser (2,0 pontos)</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>- A montagem da pizza deve seguir o seguinte fluxo: seleção dos ingredientes, borda recheada e tamanho da pizza;</td>
            </tr>
            <tr>
               <td>- Os ingredientes devem ser listados em ordem alfabética;</td>
            </tr>
            <tr>
               <td>- Deve haver os seguintes tipos de borda: catupiry ou cheddar;</td>
            </tr>
            <tr>
               <td>- Deve haver os seguintes tamanhos: pequena, média ou grande.</td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>Como cliente, eu gostaria de visualizar o preço final do meu pedido de acordo com o sabor e o tamanho selecionados ou com os ingredientes e o tamanho selecionados (3,0 pontos)</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>- O preço final deve ser calculado de acordo com a seguinte fórmula: [Σ (preço dos ingredientes) <em> TP + BR + TE] </em> DE, em que: </td>
            </tr>         
            <tr>
               <td>
                  <ol>
                     <li>
                        <p>TP é o tamanho da pizza e possui os seguintes valores:</p>
                        <ul>
                           <li>Pizza pequena = 1;</li>
                           <li>Pizza média = 1,2;</li>
                           <li>Pizza grande = 1.5.</li>
                        </ul>
                     </li>
                     <li>
                        <p>BR é a borda recheada e possui os seguintes valores:</p>
                        <ul>
                           <li>Catupiry = R$5,00;</li>
                           <li>Cheddar = R$7,00;</li>
                           <li>Chocolate = R$6,00</li>
                        </ul>
                     </li>
                     <li>TE é a taxa de entrega e possui o valor de R$10,00;</li>
                     <li>
                        <p>DE é o desconto por atraso e possui os seguintes valores:</p>
                        <ul>
                           <li>1 para tempos de entrega menor ou igual a 40 minutos;</li>
                           <li>0,90 para tempos de entrega maior do que 40 minutos.</li>
                        </ul>
                     </li>
                  </ol>
                </td>
            </tr>
        </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>Como cliente, eu gostaria de finalizar o meu pedido e ser imediatamente informado sobre o tempo previsto de entrega (2,0 pontos)</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>- Deve haver um action to call para finalizar o pedido    </td>
            </tr>
         </tbody>
      </table>
      <ul>
         <li>O tempo previsto de entrega deve ser um número aleatório entre 20 e 60 minutos;</li>
         <li>Caso o tempo de entrega seja maior do que 40 minutos, um desconto de 10% deve ser aplicado ao preço final.</li>
      </ul>
      <h2 id="requisitos-n-o-funcionais">REQUISITOS NÃO-FUNCIONAIS</h2>
      <ol>
         <li>A aplicação deve ser Single Page Application (SPA) e JS-based utilizando AngularJS 1 e Bootstrap;</li>
         <li>Utilize quaisquer bibliotecas, frameworks ou plugins que você julgar adequados;</li>
         <li>
            É obrigatório utilizar o Git como repositório;
            <ul>
               <li>O projeto inicial pode ser baixado em &lt;link do repositório&gt;;</li>
               <li>Antes de iniciar, crie uma topic branch obedecendo seguinte padrão: &lt;seu_nome_e_sobrenome&gt;;</li>
               <li>Procure realizar commits logicamente relacionados, pois eles serão avaliados (1,0 ponto).</li>
            </ul>
         </li>
         <li>Os dados estarão disponíveis em: <a href="ssh://git@bitbucket.tecnomobile.com.br:7999/adc/frontend.git">link</a>;</li>
         <li>Utilize Jasmine ou Protractor para executar os testes automatizados de acordo com a necessidade;</li>
         <li>Foque seu desenvolvimento na versão do Chrome instalada.</li>
      </ol>
      <h2 id="rotas-do-webservice">ROTAS DO WEBSERVICE</h2>
      <ul>
         <li>[GET]/ingredientes - Retorna todos os ingredientes</li>
         <li>[GET]/ingrediente/{id} - Retorna um ingrediente passando seu identificador</li>
         <li>[GET]/sabores - Retorna todos os sabores</li>
         <li>[GET]/sabor/{id} - Retorna um sabor passando seu identificador</li>
         <li>[GET]/bordas - Retorna todos as bordas</li>
         <li>[GET]/borda/{id} - Retorna uma borda passando seu identificador</li>
      </ul>
      <h3 id="exemplos-dos-retornos">EXEMPLOS DOS RETORNOS</h3>
      <ul>
         <li>
            Exemplos do retorno das rotas:
            <ul>
               <li>Ingredientes<br>[<br>{"id": 1,"ingrediente": "Queijo mussarela","preco": 5},<br>{"id": 2,"ingrediente": "Queijo cheddar","preco": 7}<br>]</li>
               <li>Sabores<br>[<br>{"id": 6,"sabor": "Milho","ingredientes": [<br>
                {"id": 1,"ingrediente": "Queijo mussarela","preco": 5},<br>
                {"id": 8,"ingrediente": "Milho","preco": 2}]<br>
                }]
               <li>Bordas<br>[<br>{"id": 1,"borda": "Catupiry","valor": 5}<br>]</li>
               </li>
               <li>Tamanhos<br>[<br>{"id": 1,"tamanho": "Pequena","peso": 1}<br>]</li>
            </ul>
         </li>
      </ul>
      <h3 id="tabelas">TABELAS</h3>
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Ingredientes</th>
               <th>Preço </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Queijo mussarela</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Queijo cheddar</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Calabresa</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Pepperoni</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>5</td>
               <td>Atum</td>
               <td>R$6,00</td>
            </tr>
            <tr>
               <td>6</td>
               <td>Banana</td>
               <td>R$2,00</td>
            </tr>
            <tr>
               <td>7</td>
               <td>Calda de chocolate</td>
               <td>R$4,00</td>
            </tr>
            <tr>
               <td>8</td>
               <td>Milho</td>
               <td>R$2,00</td>
            </tr>
            <tr>
               <td>9</td>
               <td>Ervilha</td>
               <td>R$2,50</td>
            </tr>
            <tr>
               <td>10</td>
               <td>Palmito</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>11</td>
               <td>Presunto</td>
               <td>R$3,00</td>
            </tr>
            <tr>
               <td>12</td>
               <td>Cebola</td>
               <td>R$1,00</td>
            </tr>
            <tr>
               <td>13</td>
               <td>Pimentão</td>
               <td>R$1,50</td>
            </tr>
            <tr>
               <td>14</td>
               <td>Ovo</td>
               <td>R$1,50</td>
            </tr>
            <tr>
               <td>15</td>
               <td>Lombo canadense</td>
               <td>R$8,50</td>
            </tr>
            <tr>
               <td>16</td>
               <td>Abacaxi</td>
               <td>R$2,50</td>
            </tr>
            <tr>
               <td>17</td>
               <td>Canela</td>
               <td>R$0,50</td>
            </tr>
            <tr>
               <td>18</td>
               <td>Açúcar</td>
               <td>R$0,50</td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Sabores</th>
               <th>Ingredientes </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Calabresa</td>
               <td>Queijo mussarela, calabresa e cebola</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Lombo canadense com abacaxi</td>
               <td>Queijo mussarela, lombo canadense e abacaxi</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Portuguesa</td>
               <td>Queijo mussarela, calabresa, cebola, pimentão, ovo</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Palmito</td>
               <td>Queijo mussarela e palmito</td>
            </tr>
            <tr>
               <td>5</td>
               <td>Banana</td>
               <td>Queijo mussarela, banana, canela e açúcar</td>
            </tr>
            <tr>
               <td>6</td>
               <td>Milho</td>
               <td>Queijo mussarela e milho</td>
            </tr>
            <tr>
               <td>7</td>
               <td>Atum</td>
               <td>Queijo mussarela e atum</td>
            </tr>
            <tr>
               <td>8</td>
               <td>Pepperoni</td>
               <td>Queijo mussarela e pepperoni</td>
            </tr>
            <tr>
               <td>9</td>
               <td>Presunto</td>
               <td>Queijo mussarela e presunto</td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Tamanho</th>
               <th>Peso </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Pequena</td>
               <td>1</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Média</td>
               <td>2</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Grande</td>
               <td>3</td>
            </tr>
         </tbody>
      </table>
      <table>
         <thead>
            <tr>
               <th>id</th>
               <th>Borda</th>
               <th>Valor </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Catupiry</td>
               <td>R$5,00</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Cheddar</td>
               <td>R$7,00</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Chocolate</td>
               <td>R$6,00</td>
            </tr>
         </tbody>
      </table>
   </body>
</html>