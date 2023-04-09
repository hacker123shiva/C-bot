import pandas as pd

qt=pd.read_excel("static/MHQ.xlsx")
print(qt.iloc[0][0])