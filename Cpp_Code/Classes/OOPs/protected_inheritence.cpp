#include<iostream>
using namespace std;
class base
{
    int a ;
    protected :
    int b; //eligibale for inheritance but is a private variable
};
int main()
{


}
/*
    =======Inheritance table notes
                Public derivation   Private derivation   Protected derivation
    1.Private   Not inherited       Not inherited        Not inherited
    2.Protected Protected           Private              Protected
    3.Public    Public              Private              Protected



*/