"""
Crie uma função que receba dois números e retorne qual é maior ou se são iguais em forma de mensagem
"""

"""
Crie uma função que receba uma palavra e a retorne de trás para frente
"""

"""
Crie uma função sem parâmetros que solicita nome e idade retornando a mensagem: <Nome> tem <idade> anos.
"""
def comparacao(number1, number2):
    number1 = int(input("Digite um número: "))
    number2 = int(input("Digite o outro número: "))

    if number1 > number2:
        print("O number1 é maior. ")
    elif number1 == number2:
        print("Os números são iguais. ")
    else:
        print("O numero 2 é maior")
comparacao(0,0)

def vamos_descobrir(palavra):
    soletrar = input("Digite uma palavra: ")
    print(soletrar[::-1])
vamos_descobrir("oi")

def pessoa():
    nome = input("Qual é o seu nome? ")
    idade = int(input("Qual é sua idade? "))
    print(f"{nome} tem {idade} anos")
pessoa()