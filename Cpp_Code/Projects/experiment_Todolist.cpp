#include <iostream>
#include <iomanip>
using namespace std;
int main ()
{
    char Choice_chk;
    int N_tasks=0;
    string  tasks[N_tasks];
        int choice;
    // by this program tyou can add 100 task but this is more than enough for now
    cout<<setw(100)<<"\n\tTO DO LIST...";
    Ch_phase:    
    {cout<<"\n1.Enter A Task ";
    cout<<"\n2.View List"<<endl;
    cin>>choice ;
    }
   if(choice==1)
   {
    for (N_tasks; N_tasks>=100; N_tasks++)
    {
        // Task_phase:
        {
        cout<<"\n Enter The Task :"<<endl;
        cin>>tasks[N_tasks];
        getline(cin,tasks[N_tasks]);
        cout<<"DO YOu WANT TO CONTINUE ADDING THE TASK (Y/N):"<<endl;
        cin>>Choice_chk;}
        
        // if (Choice_chk=='Y'|| Choice_chk=='y')
        // {
        //     goto Task_phase;
        // }
        // else if (Choice_chk=='N'|| Choice_chk=='n')
        // {
        //     break;
        //     goto Ch_phase;
        // }
        // else 
        // {
        //     cout<<"\n Invaild Input";
        //     goto Task_phase;
        // }


    }
    
    goto Ch_phase;
   }


    else if (choice==2)
    {
        cout<<tasks[N_tasks];
        goto Ch_phase;
    }
    
    else
    {
        cout<<"Invaild choice";
        // goto Ch_phase ;
    } 







return 0;
}