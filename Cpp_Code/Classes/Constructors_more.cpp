#include <iostream>
#include <cmath>
using namespace std;
class Positon 
{
    int x;
    int y;
    public:
    friend void d(Positon , Positon);
    Positon(int a, int b)
    {
        x = a;
        y = b;
    }
    void showCase()
    {
        cout<<"\nThe cords. are ("<<x<<","<<y<<")";
    }

};
void d( Positon a ,Positon b)
{
    int buff;
    float dis;
    buff=((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y));
    dis=sqrt(buff);
    cout<<"\nThe distance between x and y is :"<<dis;    
}
int main ()
{
    // int one , two ;
    // cout<<"\nEnter the x-axis :";
    // cin>>one;
    // cout<<"\nEnter the y-axis :";
    // cin>>two;
    // Positon cords(one , two);
    // cords.showCase();
    int x1;
    int y1;
    int x2;
    int y2;
    cout<<"\nx1 :";cin>>x1;
    cout<<"\ny1 :";cin>>y1;
    cout<<"\nx2 :";cin>>x2;
    cout<<"\ny2 :";cin>>y2;
    Positon one(x1,y1);
    one.showCase();
    Positon two(x2,y2);
    two.showCase();
    d(one , two);
    return 0;
}