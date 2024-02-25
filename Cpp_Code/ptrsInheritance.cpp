#include<iostream>
using namespace std;

class baseClass
{
public:
    int a ;
    void show ()
    {
        std::cout << "The value of a is :" << a<< std::endl;
    }
};
class Der : public baseClass 
{
    public :
    int b;
    void show ()
    {
        std::cout << "The value of a is :" << a<< std::endl;
        std::cout << "The value of b is :" << b<< std::endl;
    }
};


int main()
{
    baseClass* basePtr;
    Der* derPtr;
    Der objDer;
    derPtr = &objDer;
    derPtr->a=10;
    derPtr->b=120;
    derPtr->show();
}