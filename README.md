
# Estrutura Básica html5

```
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
    </head>

    <body>
    </body>
</html>
```


# Alguns elementos que são usados dentro do head

```
<title>Minha página html</title>
<meta charset="utf-8>
```

```
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>Minha página html</title>
        <meta charset="utf-8>
    </head>

    <body>
    </body>
</html>
```

# Comentários

        <!--<p>Meu comentário</p>-->

# Caracteres especiais

Em alguns casos é necessário caracteres especiais que podem nós ajudar em ajustes visuais, por exemplo, se tentar colocar um espaço a mais entre duas palavras, o navegador irá ignorar esse espaço, porém se usarmos ***&nbsp;*** ele irá fazer esse espaço que necessitamos, e o uso é simples

        <p>Meu &nbsp;espaço</p>


uma boa lista desses carácteres é encontrada no site da [W3s](https://www.w3schools.com/html/html_entities.asp)

# Head

O read tem 5 principais elementos, que são 

* title
* base 
* link
* meta 
* style

```
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <title>Minha página html</title>
        <style>
            body {
                background: "red"
            }
        </style>
        <script>
            function showText() {
                text.innerHTML = "Javascript"
            }   

            window.onload = showText;
        </script>
        <!-- <link rel="stylesheet" href="styles.css"> --> 
    </head>

    <body>
        <p id="text"></p>
    </body>
</html>
```

# Texto

## Titulo

Algumas tags para mostrar titulos são 

* h1
* h2
* h3
* h4
* h5
* h6

além disso nós podemos agrupar essas tags usando o \<hgroup>\</hgroup>.

## Parágrafo 

Para parágrafo temos uma tag bem instintiva, a tag \<p>\</p>

## Line Break

Podemos quebrar linhas dentro de tags de text usando \<br> isso mesmo, não é necessário fechar a tag.

## Marcações

existem algumas tags de marcação para dar um estilo no texto, algumas delas são

* b - destaque
* i - otálico
* u - sublinhado 
* sub - subscrito
* sup - seperescrito
* s - riscado

# Listas 

Existem três tipos de listas no HTML, as listas ordenadas, listas sem ordem, e as listas descritivas.
* ol
* ul
* dl

um uso básico delas de exemplo: 
```
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
    </head>

    <body>
        <!-- lista ordenada -->
        <ol>
            <li>Um</li>
            <li>Dois</li>
            <li>Três</li>
        </ol>
        <!-- lista sem ordem -->
        <ul>
            <li>Um</li>
            <li>Dois</li>
            <li>Três</li>
        </ul>
        <!-- lista descritiva -->
        <dl>
            <dt>Um</dt>
                <dd>Número Um</dd>
            <dt>Dois</dt>
                <dd>Número Dois</dd>
            <dt>Três</dt>
                <dd>Número Três</dd>
        </dl>
    </body>
</html>
```

# Imagens

alguns atributos básicos da tag img são
* src
    * É o endereço da imagem, podendo ser link ou caminho local
* title
    * Identifica a imagem, em alguns browser, esse title é mostrado quando passa o ponteiro do mouse em cima
* alt
    * esse atributo, tem duas funções, ele é lido por pessoas com deficiência visual, e é mostrado ao usuário quando a imagem não pode ser carregado por algum motivo

```
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
    </head>

    <body>
        <img src="minhaimg.jpg" title="uma imagem" alt="minha imagem">
    </body>
</html>
```

# hiperlink

Para criar um hyperlink no html, podemos usar a tag \<a>\</a> e passar nosso endereço para onde queremos redirecionar.

```
<a href="meulink.html"> Este link pode ser outra página da web ou um arquivo local </a>
```

# div
div é uma demarcação na tela, muito usada para propósitos gerais, seu objetivo é principalmente, agrupar conteudo, essa tag aceita todo tipo de tag dentro do seu interior, é uma divisão ou um seção.

        <div></div>


# CSS
É uma forma de customizar nossa página html, geralmente comparado como um enfeite para html

## id e Classe
Antes de entrarmos nesse assunto, algo importante a ser citado é o atributo id é o class, que são formas de identificar nossos atributos html, seja por um identificador único ou por uma classe
```
<h1 id="meuId">Id</h1>
<h1 class="minhaClasse">Titulo2</h1>
<h1 class="minhaClasse">Titulo3</h1>
```

## Sintaxe 

### Seletores 
um [seletor](https://www.w3schools.com/cssref/css_selectors.asp) é uma maneira de encontrar o atributo desejado em meio aos outros, os mais usados são id e class.

### Propriedades
Uma [propriedade](https://www.w3schools.com/cssref/default.asp) para o css é algo, no caso algum "estilo" que você deseje mudar, como por exemplo uma cor de fundo, tamanho de letra, posição na tela, etc...


No fim o uso será da forma seletor { propriedade: valor }, um exemplo para alterar a cor de fundo do body inteiro seria:

        body {
            background-color: red;
        }

para mudar a cor divs em css seria da sequinte forma:

        .html
        <div id="id"> <p>minha div</p> </div>
        <div class="myclass"> minha div </div>
        
        .css
        
        .myclass {
            background-color: black;
        }


        #id {
            background-color: green;
        }


## Unidades para tamanhos no css
Existem muitas unidades para bordas, larguras, tamanhos e etc... 

### Texto
para texto as unidades mais utilizadas são ***px*** e ***em*** que são relativos a pixel e o tamanho da fonte do elemento

### Tags em geral
Para bordas, margens e etc... nós usamos o pixel novamente ***px***, ***%*** porcentagem relativa ao elemento "pai", vh e vw que são viewport height, viewport width. viewport é o tamanho de tela disponivel no seu navegador

# Referência

* https://www.w3schools.com/html/html_entities.asp

* https://www.w3schools.com/cssref/default.asp

* https://www.w3schools.com/css/

* https://www.w3schools.com/cssref/css_units.asp

* https://www.w3schools.com/cssref/css_colors.asp

* https://www.w3schools.com/cssref/css_default_values.asp