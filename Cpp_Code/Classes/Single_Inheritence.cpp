#include <iostream>
using namespace std;

class Base
{
    int Val1_B;

public:
    void setBData()
    {
        Val1_B = 10;
    }
    int rBData()
    {
        return Val1_B;
    }
};
class Derive : public Base
{
    int Val2_D;
    int Val3_D;
    public :
    void setDData2()
    {
        Val2_D = 20;
    }
    int rDData2()
    {
        return Val2_D;
    }
    int process()
    {
        Val3_D = Val2_D * rBData();
        return Val3_D;
    }
    void display()
    {
        cout<<"\nThe data 1 is :"<<rBData();
        cout<<"\nThe data 2 is :"<<Val2_D;
        cout<<"\nThe data 3 is :"<<Val3_D;
    }
};

int main()
{
    Derive D;
    D.setBData();
    D.setDData2();
    D.process();
    D.display();
}