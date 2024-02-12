#include <iostream>
#include <time.h>
#include <ctime>
#include <limits.h>
using namespace std;

class Res
{
    int counter;
    string G_name[100];
    string R_no[100];
    int floor[100];
    int Bal[100];
    string Contact[100];

public:
    void initCounter()
    {
        counter = 0;
    }
    void setVal();
    void reCal();
};
void Res ::setVal()
{
    cout << "\nEnter the Name of Guest :";
    cin >> G_name[counter];
    cout << "\nAssign a room number :";
    cin >> R_no[counter];
    cout << "\nWhat is the floor number of the Guest :";
    cin >> floor[counter];
    cout << "\nEnter the contact of Guest";
    cin >> Contact[counter];
    cout << "\nAny Dues?";
    cin >> Bal[counter];
    counter++;
}
void Res ::reCal()
{

    for (int i = 0; i < counter; i++)
    {
        cout << "\n---------------------------------";
        cout << "\nThe name of guest is :" << G_name[i];
        cout << "\nThe Room No. of guest is :" << R_no[i];
        cout << "\nThe Floor No. of guest is :" << floor[i];
        cout << "\nThe Contact of guest is :" << Contact[i];
        if (Bal[i] > 0)
        {
            cout << "\nThe Balance of guest is :" << Bal[i];
        }
        cout << "\n---------------------------------";
    }
}

int main()
{
    Res hotel;
    hotel.initCounter();
    int choice;
    do
    {
        cout << "\n=======================";
        cout << "\nHotel Resrvation System";
        cout << "\n=======================";
        cout << "\n What do you want to do";
        cout << "\n1.Entery of a Guest";
        cout << "\n2.Recall the list Guest";
        cout << "\n3.Exit Program" << endl;
        cin >> choice;
        switch (choice)
        {
        case 1:
            hotel.setVal();
            break;
        case 2:
            cout << "==========" << endl;
            hotel.reCal();
            break;
        case 3:
            cout << "You choose to exit!";
            break;
        default:
            cout << "\nWrong Value";
            break;
        }

    } while (choice != 3);

    return 0;
}