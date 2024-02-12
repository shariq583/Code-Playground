#include <iostream>
using namespace std;
int main()
 {
    float num1;
    float num2;
    int choice;

    cout<<"Welcom To The Basic Calculator"<<endl;

 

    cout<<"\nWhich Operation You Want To Perform:";
    cout<<"\n1.Add(+)";
    cout<<"\n1.Subtract(-)";
    cout<<"\n3.Multiply(*)";
    cout<<"\n4.Divide(/)"<<endl;
    cin>>choice;

    if (choice>=1 && choice<=4)
    {
    cout<<"\n Enter first number=";cin>>num1;
    cout<<"\n Enter second number=";cin>>num2;
    }
    switch(choice)
    {
    case 1:
        cout<<"The sum  of:"<<num1<<"+"<<num2<<"="<<num1+num2<<endl;
        break;
    
    case 2:
        cout<<"The sub of:"<<num1<<"-"<<num2<<"="<<num1-num2<<endl;
        break;
    case 3:
        cout<<"The product of:"<<num1<<"*"<<num2<<"="<<num1*num2<<endl;
        break;
    case 4:
        cout<<"The divie of:"<<num1<<"/"<<num2<<"="<<num1/num2<<endl;
        break;
    default:
        cout<<"You should choode from 1 to 4 Restart The Program!";
        break;
 }

    return 0;

}