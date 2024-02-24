#include<iostream>
using namespace std;

class Base
{
    int a;
    public :
        void setData(int a)
        {
            this->a=a;    
        }
        void getData()
        {
            std::cout << "The Value of a is " << a << std::endl;
        }
};
int main()
{
    Base b;
    b.setData(3);
    b.getData();
    std::cout << "Rayan is a donkey" << std::endl;
}
// bbn v'
 