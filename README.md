# Desafio Hotmart

## Inicialização

### Como executar o projeto?

* Fazer o download do projeto
* Abrir o terminal e caminhar até a pasta
* Baixar as dependências com o comando `yarn install` ou simplesmete `yarn`
* Executar o projeto em DEV com o comando `yarn start`

### Caso necessite em PRD

* Gerar build do projeto com o comando `yarn build`
* Instalar o servidor local com o comando `yarn global add serve`
* Executar o projeto em PRD com o comando `serve -s build`

### Revisar o código

* Executar o comando `yarn lint`

## Implementação

Foram utilizados para o desenvolvimento do desafio o material de apoio com as telas e a descrição do desafio.

O projeto foi criado com CRA (Create React App) e para este desafio não foram ejetadas as configurações. Para as customizações utilizamos a biblioteca `react-app-rewired`.

Todo o código foi desenvolvido em Inglês e a aplicação conta com internacionalização.

### Principais Bibliotecas
* `material-ui` componentes visuais
* `fontAwesome` font de icones
* `esLint` revisor de código
* `axios` requisições http
* `babel-plugin-root-import` Auxilia a importação de itens apontando a raiz do projeto para $
* `formik` Validação de Formulário
* `i18next` Internacionalização
* `node-sass` Pre-processador de css
* `react-app-rewired` Permite alterar configurações do webpack sem a necessidade de ejetar o projeto
* `react-hot-loader` Permite a utilização de hot reload em desenvolvimento
* `react-router-dom` Gerencia as rotas da aplicação
* `yup` Permite a criação de validação e foi utilizada em conjunto com o formik

