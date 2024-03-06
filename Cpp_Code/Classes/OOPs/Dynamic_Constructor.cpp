#include <iostream>
using namespace std;
class BankDep
{
    int pre;
    int years;
    float intr_rte;
    float res_val;
    public:
    BankDep() {}
    BankDep(int p, int y, float r)
    {
        pre = p;
        years = y;
        intr_rte = r;
        res_val = pre;
        for (int i = 0; i < y; i++)
        {
            res_val = ((p * r) + p);
        }
    }
    BankDep (int p , int y ,int r)
    {
        pre = p;
        years = y;
        intr_rte = (float(r))/100;
        res_val = pre;
         for (int i = 0; i < y; i++)
        {
            res_val = ((p * intr_rte) + p);
        }
    }
    void display ()
    {
        cout<<"\nThe Amount Given Was :"<<pre<<" That was invested for "<<years<<" and now it is :"<<res_val;
    }
};

int main()
{
    int p;
    int y;
    float r;
    int R;
    BankDep b1 , b2 , b3 ;
    cout<<"\nAmount :"; cin>>p;
    cout<<"\nYears :"; cin>>y;
    cout<<"\nIntrest rate :"; cin>>r;
    
    b1 = BankDep(p , y ,r);
    b1.display();

    cout<<"\nAmount :"; cin>>p;
    cout<<"\nYears :"; cin>>y;
    cout<<"\nIntrest rate :"; cin>>R;
    
    b2 = BankDep(p , y ,R);
    b2.display();
    return 0;
}
