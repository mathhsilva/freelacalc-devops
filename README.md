# FreelaCalc

Aplicação web simples para estimar o valor de um projeto freelancer com base em horas,
valor por hora, custos adicionais e margem de segurança.

Este repositório foi criado para as atividades formativas de DevOps, reunindo:

- versionamento com Git e GitHub;
- testes automatizados e integração contínua;
- entrega contínua com GitHub Pages;
- execução da aplicação em container Docker.

## Desenvolvimento

```bash
npm test
npm run check
```

Abra `index.html` no navegador para utilizar a aplicação.

## Docker

Com o Docker Desktop em execução:

```bash
docker build -t freelacalc .
docker run -d --name freelacalc-container -p 8080:80 freelacalc
docker ps
```

Acesse `http://localhost:8080`. Para encerrar e remover o container:

```bash
docker stop freelacalc-container
docker rm freelacalc-container
```

## Fluxo CI/CD

- A integração contínua valida a sintaxe e executa os testes em cada PR.
- A entrega contínua gera um artefato em cada PR.
- Após o merge no `main`, o mesmo fluxo publica a aplicação no GitHub Pages.
