/*Friend Functions are such functions that have permission  to acces the private data of a class but by this it is not meant that the friend fuctioon is a member function of class 
*/
#include <iostream>
using namespace std;
class Complex
{
    int n1;
    int n2; //These are private variables 
    public:
    void impNum(int a , int b)
    {
        n1 = a;
        n2 = b;
    }
    void printNum(void)
    {
        cout<<"Your Complex Number is "<<n1<<" + "<<n2<<"i"<<endl;
    }
    friend Complex sumComplex(Complex o1 ,Complex o2);

};
Complex sumComplex(Complex o1 , Complex o2 )
{
    Complex o3;
    o3.impNum((o1.n1 + o2.n1) , (o1.n2+o2.n2));
    return o3;
}


int main ()
{
    Complex c1 , c2 ,sum;
    c1.impNum( 5 , 2);
    c1.printNum();
    c2.impNum( 3, 4);
    c2.printNum();
    sum=sumComplex(c1 , c2);
    sum.printNum();


   return 0;
}