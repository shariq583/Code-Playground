#include<iostream>
using namespace std;
template<class T1 , class T2>
T1 avgFunc(T1 a , T2 b )
{
    return static_cast <float>((a+b)/2);
}
int main()
{
    float a = avgFunc<float, float>(3, 5.4);
    cout<<"The average is :"<<a;
    return 0;
}