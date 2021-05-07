import pandas as pd
import matplotlib.pyplot as plt


x = pd.read_excel("Pessoas.xlsx")

# print(x)
print(x['Nome'][2])
# print(x.head())
# print(x.info())

# plt.plot(x["Região"])
# plt.plot(x["População 2010"])
# plt.hist(x["População 2010"], bins=20)
# x = pd.read_excel("Pessoas.xlsx")
plt.pie(x["Idade"], labels=x["Nome"], autopct="%1.2f%%")

plt.show()
