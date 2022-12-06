# Estudo sobre performance de algoritmos de busca

**Este é um projeto de estudo focado na construção de algoritmos de performance de busca bem como o teste das diferentes estruturas e técnicas**

## Busca Sequencial
No algoritmo de busca sequencial, temos o pior cenário visto que, em um vetor de N elementos todos serão comparados até que o elemento buscado seja encontrado ou que todos os itens tenham sido comparados.
Considerando um vetor com 10.000.000 itens ordenados, se estivessemos buscando o item 9.999.999 teriamos que iterar 10.000.000 vezes.
Para testar este algoritimo execute:
> node .\sequential-search.js

## Busca Binária
No algoritmo de busca binária baseado no tamanho do vetor, começamos a iteração pelo meio do vetor a fim de validarmos se o elemento procurado está a esquerda ou a direita vetor, desta forma eliminando a cada iteração metade dos itens da pesquisa.
Considerando um vetor com 10.000.000 itens ordenados, se estivessemos buscando o item 9.999.999 teriamos que iterar 22 vezes. Comparado a busca sequencial o numero de iterações realizadas na busca binária é infinitamente menor representando 0,00022% das iterações realizadas.
Para testar este algoritimo execute:
> node .\binary-search.js

