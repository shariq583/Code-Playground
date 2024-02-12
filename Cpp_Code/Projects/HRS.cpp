#include <iostream>
#include <time.h>
#include <ctime>
#include <limits.h>
using namespace std;
typedef struct Res
{
    int g_Nic;
    int R_No;
    int f_No;
    int Bal;

    int Cid = (rand());

} Rese;

int main()
{

    int choice;
    string G_name;
    Rese Guest;

    do
    {

        {
            cout << "\n What do you want to do:";
            cout << "\n1.Entry of guest ";
            cout << "\n2.Check info of guest ";
            cout << "\n3.Exit ";
            cin >> choice;
        }

        switch (choice)
        {
        case 1:
            // phase of entry
            cin.ignore(10000, '\n');
            cout << "\n Entry phase ";
            cout << "\n ============";
            cout << "\nEnter the guest's name :";
            cin >> G_name;
            // entry in structure
            cout << "\n Enter The Guest's Cnic Number:";
            cin >> Guest.g_Nic;
            cout << "\n Assign a room number to the Guest ";
            cin >> Guest.R_No;
            cout << "\nAssign a floor number to the Guest ";
            cin >> Guest.f_No;
            cout << "\n Any Balance to collect :";
            cin >> Guest.Bal;
            break;

        case 2:
            // recal phase
            cout << "\n=====================================";
            cout << "\n The name of guest " << G_name;
            cout << "\n The CNIC Number of " << G_name << " is :" << Guest.g_Nic;
            cout << "\n The Room Number of " << G_name << " is :" << Guest.R_No;
            cout << "\n The Floor Number of " << G_name << " is :" << Guest.f_No;
            cout << "\n The Remaing Balance of " << G_name << " is :" << Guest.Bal;
            cout << "\n The Case Number of " << G_name << " is :" << Guest.Cid;
            cout << "\n=====================================";
            break;
        case 3:
            cout << "\n You choose to exit ";
            break;
        default:
            cout << "\nWrong Choice!";
            break;
        }
    } while (choice != 3);

    return 0;
}