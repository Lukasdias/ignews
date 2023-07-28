# Blog com Pagamentos Integrados

![Next.js](https://nextjs.org/static/images/nextjs-logo-light.svg)

Este é um projeto de um blog desenvolvido utilizando as tecnologias atuais e inspirado na trilha de 2021 do Ignite. O objetivo principal é permitir que os usuários acessem o conteúdo completo de um post apenas após efetuarem o pagamento.

Pelo fato do desafio ser de 2021, muitas mudanças foram feitas a começar pela versão do Next(11 -> 13) e as integrações com as APIs de terceiros.

## Tecnologias Utilizadas

- [Next.js 13](https://nextjs.org): Um framework de desenvolvimento web que combina React com recursos avançados, como renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG).
- [Tailwind CSS](https://tailwindcss.com) com [Radix UI](https://radix-ui.com): Combinação de uma biblioteca de utilitários CSS e um conjunto de componentes reutilizáveis para agilizar o desenvolvimento da interface do usuário.
- [Shadcn-UI](https://github.com/radix-ui/shadcn-ui): Uma biblioteca de componentes cuidadosamente projetados que você pode copiar e colar em seus aplicativos. Acessível, personalizável e de código aberto.
- [Stripe](https://stripe.com): Uma plataforma de pagamentos que permite a integração fácil e segura de funcionalidades de pagamento em um aplicativo.
- [FaunaDB](https://fauna.com): Um banco de dados distribuído, consistente e altamente escalável, projetado para aplicativos modernos.
- [Prismic CMS](https://prismic.io): Um CMS (Content Management System) com foco na entrega de conteúdo dinâmico e personalizado para aplicativos web.

## Funcionalidades

- **Autenticação de Usuários**: Os usuários podem se cadastrar, fazer login e fazer logout no blog. O Next.js 13 fornece suporte nativo para autenticação de usuário com a API `Authentication` e o sistema de rotas `AuthRoutes`.
- **Visualização Parcial de Notícias**: Os usuários podem visualizar apenas o trecho inicial de cada notícia. Para acessar o conteúdo completo, eles precisam efetuar o pagamento.
- **Pagamentos com Stripe**: A integração com o Stripe permite que os usuários realizem pagamentos de forma segura e confiável para desbloquear o acesso ao conteúdo completo do post.
- **Armazenamento de Informações com FaunaDB**: As informações dos usuários, transações de pagamento e detalhes dos posts são armazenados no FaunaDB, fornecendo um armazenamento confiável e escalável para o aplicativo.
- **Consumo de Posts com Prismic CMS**: O Prismic CMS é usado para gerenciar e fornecer o conteúdo dos posts. Ele oferece uma interface amigável para criar, editar e publicar conteúdo, que é consumido pelo aplicativo Next.js.

## Como Executar o Projeto

Antes de executar o projeto, certifique-se de ter o Node.js instalado em sua máquina. Em seguida, siga as etapas abaixo:

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` para instalar todas as dependências.
4. Configure as variáveis de ambiente necessárias. Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

   ```
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<SUA_CHAVE_PUBLICA_DO_STRIPE>
   STRIPE_SECRET_KEY=<SUA_CHAVE_SECRETA_DO_STRIPE>
   FAUNADB_SECRET=<SUA_CHAVE_SECRETA_DO_FAUNADB>
   PRISMIC_API_ENDPOINT=<URL_DO_ENDPOINT_DO_PRISMIC>
   PRISMIC_ACCESS_TOKEN=<SEU_TOKEN_DE_ACESSO_DO_PRISMIC>
   ```

   Certifique-se de substituir `<SUA_CHAVE_PUBLICA_DO_STRIPE>`, `<SUA_CHAVE_SECRETA_DO_STRIPE>`, `<SUA_CHAVE_SECRETA_DO_FAUNADB>`, `<URL_DO_ENDPOINT_DO_PRISMIC>` e `<SEU_TOKEN_DE_ACESSO_DO_PRISMIC>` pelas suas próprias informações e chaves de API.
   
5. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento local.
6. Acesse `http://localhost:3000` em seu navegador para ver o blog em execução.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, bug ou tiver sugestões de melhorias, fique à vontade para abrir uma nova issue neste repositório.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
