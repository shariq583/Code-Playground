#include<iostream>
#include <string>
using namespace std;
class Stud 
{
    float marks;
    string name;

    public :
        Stud(int a , string b):marks(a),name(b){}
        void Disp()
        {
            std::cout << "The name of student is :" << name << std::endl;
            std::cout << "The marks of student is :" << marks << std::endl;
        }
};
int main()
{
    Stud Shariq(99,"Shariq");
    Stud * objPtr = &Shariq;
    std::cout << "The addres of object is :"
    << objPtr
    << std::endl;
    std::cout << "The value of object is :";objPtr->Disp();
}