#include <iostream>

using namespace std;


void swapRef(int &a ,int &b ){
    int temp =a ;
    a=b;
    b=temp ;
   
}

int main ()
{
int a =3; 
int b =4;
    cout<<"\n The value of a is"<<a;
    cout<<"\n The value of a is"<<b;    
swapRef(a,b );
    cout<<"\n The value of a is"<<a;
    cout<<"\n The value of a is"<<b;    





return 0;
}