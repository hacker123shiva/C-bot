from django.shortcuts import render,HttpResponse

def index(request): 
        
        name=request.POST.get('query')

        API_KEY='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'
        import openai
        import os
        import pandas as pd
        qt=pd.read_excel("static/MHQ.xlsx")
        ques="If we ask someone that, " + str(qt) + " and he says " + str(name) +" then what should be recommendation for him"
        os.environ['OPENAI_Key']=API_KEY
        openai.api_key=os.environ['OPENAI_Key']

        response=openai.Completion.create(engine='text-davinci-003',prompt=ques,max_tokens=200)
        df=qt
        temp=df.iloc[0][0]
        for i in range(1,df.size):
            df.iloc[i-1][0]=df.iloc[i][0]
        hello=df.size
        df.iloc[df.size-1][0]=temp
        import openpyxl
# uodate excel file using write only mode

        wb = openpyxl.load_workbook('static/MHQ.xlsx')
        ws = wb.active
        for i in range(1,17):
            ws.cell(row=i, column=1).value = df.iloc[i-1][0]
        wb.save('static/MHQ.xlsx')
        print(hello)
        
        qt=pd.read_excel("static/MHQ.xlsx")
        if name==None:
                return render(request,"index.html",{"name":"","qt":qt.iloc[0][0]})
        return render(request,'index.html',{"name":"Recommendation :- "+response['choices'][0]['text'],"qt":str(qt.iloc[0][0]),"ans":"Your answer was :- "+str(name),"lq":str(qt.iloc[15][0])})
        