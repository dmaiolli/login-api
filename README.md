[![Build Status](https://travis-ci.com/Lucas-Angelo/nps-api.svg?branch=main)](https://travis-ci.com/Lucas-Angelo/nps-api)

<h3 align="center">
    <img width="300px" src="https://i.imgur.com/JkVMEgs.png">
    <br><br>
    <p align="center">
      <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-comandos-para-começar">Comandos para começar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-links-do-projeto">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">Licença</a>
  </p>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://i.imgur.com/1o7urkT.png">
  </a>
</p>

## 🔖 Sobre

O <strong>LOGIN-API</strong> é uma API Restful para integrar a um projeto que precise de um sistema de login com autenticação

Aplicação construída para fixação dos conceitos de NodeJS

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [YARN](https://yarnpkg.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io)
- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com)

## ⤵ Comandos para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento. Foram implementados testes de integração.


```bash
- git clone https://github.com/dmaiolli/login-api.git
- cd nps-api
```

Instalando dependências (Recomendável utilizar NPM para compatibilidade com reflect-metadata)

```bash
- npm install
```

ou

```bash
- yarn install
```

Para rodar localmente, você precisará criar um container [Docker](https://www.docker.com) e atualizar o "ormconfig.json" de acordo com suas configurações

Feito isso rode:
```bash
- yarn typeorm:migration run
```

### Resources##
## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/dmaiolli/" target="_blank">Denys Maiolli</a>
</h4>
