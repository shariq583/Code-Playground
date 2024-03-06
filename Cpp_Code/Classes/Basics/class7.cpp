#include <iostream>
using namespace std;
int glo = 12;
int main()
{
    int glo = 24;
    cout<<glo<<endl;  // this will display the local variable 
    cout<<::glo; //this will show the global variable 

   return 0;

}
