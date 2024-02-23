#include<iostream>
using namespace std;
class Emp
{
    int EmpId;
    int Sal;
    public :
    Emp():EmpId(0),Sal(0){}
    void setData(int a , int b)
    {
        EmpId=a;
        Sal=b;
    }
    void Disp(void)
    {
        std::cout << "The Employee Id is :" << EmpId << std::endl;
        std::cout << "The Salary of Employee is :" << Sal << std::endl;
    }
};
int main(){

    int len=3;
    Emp *ptr = new Emp[len];
    Emp *ptrTemp = ptr;
    int i , d ,s;
    for (i = 0; i <=len ; i++)
    {
        std::cout << "Enter The Id :" << std::endl;
        cin>>d;
        std::cout << "Enter The Sal :" << std::endl;
        cin>>s;
        ptr->setData(d,s);
        ptr++;
    }
    for (i = 0; i <=len ; i++)
    {
        std::cout << "The Info of Emp " << i+1<< std::endl;
        ptrTemp->Disp();
    }
    


}