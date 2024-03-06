#include <iostream>
using namespace std;
class c2;
class c1
{
    int val1;
    friend void exc (c1&, c2&);
    public :
    void setData(int one)
    {
        val1 = one;
    }
};
class c2
{
    int val2;
    friend void exc (c1&, c2&);
    public :
    void setData(int two)
    {
        val2 = two ;
    }
};
void exc(c1 &x, c2 &y)
{
    int temp = x.val1;
    x.val1 = y.val2;
    y.val2 = temp;
}
int main ()
{
    c1 a1;
    a1.setData(2);
    c2 a2;
    a2.setData(3);


    return 0;
}