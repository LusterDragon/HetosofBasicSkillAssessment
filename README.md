# Avaliação Básica de Conceitos de Web Dev

## Objetivo
Avaliar habilidades básicas de front-end (html/css), API, e conceitos de desenvolvimento. 


## Cenário de Avaliação
Desenvolva um Aplicatição Web no framework de sua preferencia. Os passos descritos a seguir são apenas uma diretiva. Mais importanque que as diretivas, é o resultado alcançado. Sinta-se à vontade para “deixar algo pra trás” se necessário. De mesmo modo, sinta-se livre para implementações extras. Podem ser usados quantos pacotes, libs, ref, etc.. quiser.

- O Projeto deve conter uma página chamda TESTE (https://localhost/teste)

- Na inicialização da página, deverá ser feita uma consulta à API com o seguinte endpoint: http://hetosoft.ddns.com.br:8086/api/Geral/GetSACSistemas (schema no final). 
Antes, porém, deverá ter uma chamada de Delay assíncrono de 5 segundos, para que, enquanto não conclua o processo do Delay e consulta da API, um GIF de carregamento seja apresentado na página.

- A página deverá conter, além do GIF, um elemento html "select"  que deverá ser carregado com os itens retornados na consulta da API. 
Ambos elementos (GIF e Select) deverão estar centralizados horizontalmente na página. 
O select deve conter um estilização CSS com uma animação qualquer de sua escolha.
Após o select estar carregado com os elementos, o GIF de carregamento deverá desaparecer.
	
- Implemente uma função no objeto Select que ao ser alterado, dispara uma notificação snackbar que mostre o ID e a Descrição do Item Selecionado.

- O projeto deve ser feito com controle de versionamento:
Ao criar o projeto inicialmente, faça o commit inicial na main branch. Crie um Issue com uma descrição básica e desenvolva o projeto a partir de um novo branch, que deverá ser criado a partir desta issue. Ao finalizar o projeto deste branch faça um Pull Request para o main.


Schema do objeto retornado pela API:
``` json
{
	"id_sistema":int
	"descricao":string
}
```
