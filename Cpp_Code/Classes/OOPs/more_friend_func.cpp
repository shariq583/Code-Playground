#include <iostream>
using namespace std;
class c2;
class c1
{
  int val1 ;
  public :
  void inpVal (int a){
    val1 = a;
  }
  void display (){
        cout<<"\n The value of c1 "<<val1;
    }
  friend void exc(c1 & , c2 &);
};
class c2
{
    int val2;
    public :
    friend void exc(c1 & , c2 &);
    void inpVal ( int  b){
        val2 = b;
    }
    void display (){
        cout<<"\n The value of c2 "<<val2;
    }
};
void exc ( c1 &x,c2 & y)
{
    // int temp = a
    // a =b
    // b= temp
    int temp = x.val1;
    x.val1=y.val2;
    y.val2 = temp;
}


int main ()
{
    c1 a;
    a.inpVal(34);
    a.display();
    c2 b;
    b.inpVal(4);
    b.display();
    exc( a , b);
    a.display();
    b.display();

    return 0;
}