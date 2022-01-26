from operator import le
from select import select
from typing_extensions import Self


class A() :
    def gud(self,k) : 
        a=["lukes","kumar","kalam"]
        for i in range(len(a)) :
            if k==a[i] :
                print("found")
                break
obj=A()
obj.gud("lukes")
