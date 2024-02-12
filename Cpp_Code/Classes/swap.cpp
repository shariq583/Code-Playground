#include <iostream>
using namespace std;

void swap(int* a ,int* b)
{
    int temp =*a;
    *a=*b;
    *b=temp;



}

int main ()
{
    // int x = 2;
    // int y = 3;
    // int* a_x=&x;
    // int* a_y=&y;
    // cout<<&x<<endl;
    // cout<<&y<<endl;
    // cout<<a_x<<endl;
    // cout<<a_y<<endl;
    // cout<<*a_x<<endl;
    // cout<<*a_y<<endl;
    
    int a =6;
    int b= 4;

    cout<<"\nThe value of a is "<<a;
    cout<<"\nThe value of b is "<<b;


    swap (&a,&b);


    cout<<"\nThe value of a is "<<a;
    cout<<"\nThe value of b is "<<b;


return 0;
}