// Copy Constructors are used to pass the value of an object to another object!
// If there is no Copy Constructor in the class the compiler will supply it's own copy constructor.
#include <iostream>
using namespace std;
class simple 
{
    private:
        int a;
    public :
        simple(){
            a=0;
        }
        simple(int var)
        {
            a = var;
        }
        simple (simple &cpy)
        {
            cout<<"\nCpy recall!!!";
            a = cpy.a;
        }
        void display ()
        {
            cout<<"\nThe Number is :"<<a;
        }
};                  

int main ()
{
    simple x , y, z(52);
    x.display();
    y.display();
    z.display();
    simple z1(z);
    z1.display();
    return 0;
}