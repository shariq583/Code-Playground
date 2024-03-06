#include<iostream>
using namespace std;
class employee 
{
    protected :
        int id;
    public :
        employee()
        {
            id =0;
        }
        void setId (int inpId)
        {
            id = inpId;
        }

};

class money : public employee 
{
    protected :
    int salary ;
    public :
    money()
    {
        salary = 0;
    }
    void setSal ( int inpSal)
    {
        salary = inpSal;
    }
    void displayInfo()
    {
        cout<<"\n The id of employee is :"<<id;
        cout<<"\n The salary of employee is :"<<salary;
    }
};
class promote : public money  
{
        public :
    void promotion ()
    {
        if(id > 0 && salary >=1000)
        {
            cout<<"\n You are promoted";
        }
        else
        {
            cout<<"\nbetter luck next year!";
        }
    }
};
int main()
{
    promote shariq;
    shariq.setId(867);
    shariq.setSal(2000);
    shariq.displayInfo();    
    shariq.promotion();
}