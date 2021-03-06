Avaliação
 Essa é sua oportunidade de mostrar seus conhecimentos e o que você sabe sobre boas
práticas de desenvolvimento e modelagem, mesmo com um problema relativamente simples.
Durante a avaliação, iremos verificar algumas características do que foi entregue, sendo que
algumas dessas características tem maior importância para nós do que outras.
Importante

● Orientação a objeto

● Testes

● Arquitetura/Design interno da aplicação

● Clareza e organização do código

● Para Web/Mobile (que são os tipos de projetos que desenvolvemos na
LOLDESIGN)
Extras

● Interface gráfica bem acabada

● Uso avançado da linguagem e/ou framework
Caso se sinta limitado(a) pelo tamanho do projeto, fique a vontade para estender um pouco os
requisitos. 


Desafio:

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.

Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino:

Origem   Destino   $/min

011      016        1.90
016      011        2.90
011      017        1.70
017      011        2.70
011      018        0.90
018      011        1.90 

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: 

(1) o valor da ligação com o plano.

(2) o valor da ligação sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
    problema.

Ex:
    Origem                                   Destino                        Tempo                         Plano
    011                                        016                            20                FaleMais 30 $ 0,00 $ 38,00
    011                                        017                            80               FaleMais 60 $ 37,40 $ 136,00
    018                                        011                           200              FaleMais 120 $ 167,20 $ 380,00
    018                                        017                           100              FaleMais 30      -         - 
