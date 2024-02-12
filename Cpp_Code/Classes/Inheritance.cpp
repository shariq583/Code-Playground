#include<iostream>
using namespace std;
class Employee
{
    public:
    int id;
    Employee()
    {id = 0;}
    Employee(int inp)
    {
        id = inp;
    }
};
class Programer : public Employee
{
    public:
    int KnownLang;
    Programer()
    {
        KnownLang=0;
    }
    Programer(int inpLang , int inpId)
    {
        KnownLang=inpLang;
        id = inpId;
    }
};
int main()
{
    // Employee shariq(007);
    Programer shariq(5 , 007);
    cout<<"\nThe Is of shariq is:"<<shariq.id;
    cout<<"\nThe Known languages of shariq is:"<<shariq.KnownLang;

 
}