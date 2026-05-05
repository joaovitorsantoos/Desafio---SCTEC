# Tchuxabum.pet — Landing Page de Pet Shop

**Desafio Extra — Introdução à Programação Front-End e Back-End | SCTEC Ciclo 2**

---

## 1. Identificação do Projeto e do Autor

| Campo | Informação |
|---|---|
| Nome do projeto | Tchuxabum.pet |
| Tipo | Landing Page — Pet Shop |
| Programa | SCTEC — Carreira Tech, Ciclo 2 |
| Curso | Introdução à Programação Front-End e Back-End (IP 20h A) |
| Atividade | Desafio Extra |
| Tecnologias | HTML5, CSS3, JavaScript (ES6+) |

---

## 2. Descrição do Projeto

A **Tchuxabum.pet** é uma landing page fictícia desenvolvida para um pet shop localizado no bairro dos Ingleses, em Florianópolis (SC). O projeto funciona como um cartão de visitas digital da marca, apresentando serviços, diferenciais e facilitando o contato com novos clientes.

A identidade visual utiliza **verde escuro (#2D5A27)** e **amarelo (#FFD700)** como cores principais, transmitindo confiança, natureza e acolhimento — valores associados ao cuidado animal. As fontes escolhidas foram **Fredoka** (títulos e logotipo) e **Poppins** (corpo de texto), importadas via Google Fonts.

---

## 3. Etapas de Desenvolvimento

### 3.1. Identidade Visual e Tipografia
Definição da paleta de cores e escolha das fontes via Google Fonts, garantindo personalidade e legibilidade à marca.

### 3.2. Estruturação HTML Semântica
Organização do documento com elementos semânticos (`<header>`, `<main>`, `<section>`, `<nav>`), dividido nas seguintes seções:

- **Hero (Destaque):** seção principal com chamada para ação (CTA) e imagem posicionada com `position: absolute`
- **Sobre:** apresentação do pet shop com indicadores (pets atendidos, anos de experiência, satisfação), estruturada com Flexbox
- **Serviços:** cards visuais para Banho e Tosa, Consultas e Pet Shop, com CSS Grid e `aspect-ratio`
- **Depoimentos:** seção de prova social com cards e citações de clientes
- **Contato:** formulário funcional com validação de campos via JavaScript

### 3.3. Estilização com CSS
- Flexbox no cabeçalho, seção Sobre e depoimentos
- CSS Grid com `auto-fit` e `minmax()` para a grade de serviços
- `position: relative/absolute` para sobrepor a imagem no hero
- `aspect-ratio` nos ícones dos serviços
- Media queries para responsividade em telas menores que 768px
- Menu hambúrguer funcional no mobile
- Animações com `transition` e `transform` nos cards e botões

### 3.4. Interatividade com JavaScript
- **Menu hambúrguer:** alterna a classe `active` no `<nav>` via `classList.toggle()`, exibindo ou ocultando o menu no mobile. O menu fecha automaticamente ao clicar em um link.
- **Formulário de contato:** intercepta o `submit`, valida o formato do e-mail e exibe mensagem de sucesso personalizada ou erro. O formulário é resetado após envio bem-sucedido.

---

## 4. Estrutura de Arquivos

```
tchuxabum-pet/
├── index.html      # Estrutura principal da página
├── styles.css      # Estilização e responsividade
├── script.js       # Interatividade (menu e formulário)
├── imag.png        # Imagem do hero (cachorro Golden Retriever)
├── img2.png        # Imagem da seção Sobre (cachorro Salsicha)
└── README.md       # Documentação do projeto
```

---

## 5. Como Executar Localmente

Não há dependências externas. Basta um navegador moderno (Chrome, Firefox, Edge ou Safari).

1. Descompacte o arquivo `.zip` entregue na plataforma
2. Abra a pasta extraída no seu gerenciador de arquivos
3. Localize o arquivo `index.html` na raiz da pasta
4. Clique duas vezes sobre `index.html` para abrir no navegador
5. A página será carregada completamente, incluindo navegação, animações e formulário

> **Observação:** as imagens `imag.png` e `img2.png` devem estar na mesma pasta que o `index.html` para serem exibidas corretamente.
