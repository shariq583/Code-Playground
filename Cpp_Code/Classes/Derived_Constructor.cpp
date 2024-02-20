#include<iostream>
using namespace std;
class Base
{

    public :
    int a;
    Base()
    {
        a= 0;
    }
    Base(int tempa)
    {
        a= tempa;
    }
};
class derived : public Base
{
    public :
    int b ;
    derived()
    {
        b=0;
    }
    derived(int tempb)
    {
        b=tempb;
    }
};
int main()
{   
    derived d(5);
    std::cout << "The Value of a is :" 
    << d.a
    << std::endl;
    std::cout << "The Value of b is :" 
    << d.b
    << std::endl;
}
