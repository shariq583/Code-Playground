#include <iostream>
 using namespace std;


class DataDump
{
private:
    int a , b;
public:
   DataDump( int one = 0 , int two = 0)
   {
         a = one;
         b = two;
   }
   void printFunc ()
   {
    cout<<"The value of a and b is:" << a <<" & "<< b ;
   }
};

int main()
{
    int a=5;
    DataDump d(a);
    d.printFunc();
}