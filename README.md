
# Script para Amigo Secreto

Este script foi desenvolvido para simplificar o processo de sorteio do amigo secreto, proporcionando uma solução prática e eficiente.



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/alexdevelp/secret-friend.git
```

Entre no diretório do projeto

```bash
  cd secret-friend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env



`ACCOUNT_ID`=seu_id_na_twilio

`AUTH_TOKEN`=seu_token_de_autenticacao_na_twilio

`TWILIO_PHONE_NUMBER`=seu_numero_gerado_na_twilio



## Como Utilizar

1. Consuma a rota para acionar o recurso de sorteio e enviar o resultado via SMS:

   ```bash
   POST http://localhost:8888/send-sms


### Divirta-se organizando o seu amigo secreto de maneira descomplicada!



## Autores

- [@alexdevelp](https://www.github.com/alexdevelp)

