#include<iostream>
using namespace std;
template<class T1 , class T2>
T1 avgFunc(T1 a , T2 b )
{
    T1 result = ((a+b)/2);
    return result;
}
int main()
{
    float a = avgFunc<float, float>(3, 5.4);
    cout<<"The average is :"<<a;
    return 0;
}