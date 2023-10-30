def contas(centros):
    match centros:
        case [area, centros]:   # Apenas 1 centro de custo
            print(f"A área {area} possui o centro de custo {centros}")
        case [area, *centros]:   # Com 2 ou mais centros de custo
            print(f"A área {area} possui os centros de custo abaixo:")
            for centro in centros:
                print(centro)


contas(["Financeiro", "ABC"])
contas(["Marketing", "ABC", "XYZ", "HJG"])


def contas2(centros):
    match centros:
        case [*centros]:  # Com 2 ou mais centros de custo
            print(f"{centros} é uma lista")
            for centro in centros:
                print(f"Centro de custo: {centro}")
        case centros:  # Apenas 1 centro de custo
            print(f"{centros} não é lista e sim uma string")


print("*" * 30)
contas2("Financeiro")
contas2(["Marketing", "RH"])
