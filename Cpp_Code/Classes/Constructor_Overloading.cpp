#include <iostream>
using namespace std;
class Complex
{
    int a, b;

public:
    Complex() // default constructor
    {
        a = 0;
        b = 0;
    }
    Complex(int x)
    {
        a = x;
        b = 0;
    }
    // Complex(int y)
    // {
    //     a = 0;
    //     b = y;
    // }
    Complex (int x , int y)
    {
        a=x;
        b=y;
    }
    void printNum(void)
    {
        cout<<"\n Your Complex Number is :"<<a<<"+"<<b<<"i";
    }
};
int main()
{
    Complex c1;
    c1.printNum();
    Complex c2(5);
    c2.printNum();
    Complex c3(4);
    c3.printNum();
    Complex c4(4,5);
    c4.printNum();

    
    
    return 0;
}