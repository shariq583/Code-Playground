#include <iostream>
using namespace std;
//This is a basic Constructors Concept
/*constructors are just some method that alway runs as the class is used somewhere in the main they are usually used as default value setters
*/
class Complex
{
    int one , two ;
    public :
    Complex(void);
    void printNum ()
    {
        cout<<"\nThe Complex number is :"<<one<<"+"<<two<<"i";
    }
};

Complex :: Complex()
{
    one =1;
    two =2;
}

int main ()
{
    Complex o1;
    o1.printNum();

    return 0;
}