#include <iostream>
using namespace std;
class complex 
{
    int n1;
    int n2;
    public :
    void setData (int a1 ,int a2)
    {
        n1=a1;
        n2=a2;
    }
    void SetCom (complex num1 , complex num2)
    {
        n1=num1.n1+num2.n1;
        n2=num1.n2+num2.n2;
    }
    void printNum ()
    {
        cout<<"\nThe number is:"<<n1<<"+"<<n2<<"i";
    }
};

int main ()
{
    complex c1 , c2 , c3; 
    c1.setData( 4 , 5);
    c1.printNum();
    c2.setData(8 , 9);
    c2.printNum();
    c3.SetCom(c1 , c2);
    c3.printNum();
 return 0;
}