#include<iostream>
using namespace std;
template<class T1 , class T2>
class dispClass
{
    public:
    T1 dataT1;
    T2 dataT2;
    dispClass(T1 a, T2 b):dataT1(a),dataT2(b)
    {}
    void dispFunc(){
        std::cout << "The value of data"<<"T1"<<"is" <<this->dataT1 << std::endl;
        std::cout << "The value of data"<<"T2" <<"is" <<this->dataT2 << std::endl;
    }
};

int main()
{
    dispClass <float,string>obj(20.2,"Shariq");
    obj.dispFunc();
}