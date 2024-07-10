# Node.JS no Docker

Este é um projeto de estudo voltado a construção de um servidor simples com Node.JS e conteinerização via Docker.

## Why?

O repositório poderá ser consultado novamente para solução de dúvidas ou como forma de relembrar o conteúdo.

## Comandos

### Para construir uma imagem do projeto

- docker build -t [IMAGE_NAME] .

### Para iniciar um container com a imagem do projeto

- docker run -d -p [PORT:PORT] [CONTAINER]

### Para executar comandos CLI no container

- docker exec -it [CONTAINER_NAME] sh
