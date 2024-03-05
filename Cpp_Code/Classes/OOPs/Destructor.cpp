#include <iostream>
using namespace std;

 static int count=0;
class Mini
    {
        public:
        Mini()
        {
            count++;
            cout<<"\nConstructor Invoked for object "<<count;
        }
        ~Mini()
        {
            cout<<"\nDestructor for object"<<count;
            count--;
        }
    }; 
int main ()
{
    Mini n1 ,n2,n3 ;

    return 0;
}