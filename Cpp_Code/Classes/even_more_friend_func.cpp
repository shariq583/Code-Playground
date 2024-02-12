#include <iostream>
using namespace std;
class calculator;

class Complex
{
    friend class calculator;
    int a, b;

public:
    void setN(int one, int two)
    {
        a = one;
        b = two;
    }
    void display(void)
    {
        cout << "\nYour number is :";
    }
};
class calculator
{
public:
    int sum_R(Complex o1, Complex o2)
    {
        return o1.a + o2.a;
    }
    int sum_i(Complex o1, Complex o2)
    {
        return o1.b + o2.b;
    }
};

int main()
{
    Complex x, y;
    x.setN(1, 2);
    y.setN(3, 4);
    calculator ca;
     int real = ca.sum_R(x , y);
     int img = ca.sum_i(x , y);
     cout<<"\nThe sum of real part is:"<<real;
     cout<<"\nThe sum of imaginary part is:"<<img;

    return 0;
}
