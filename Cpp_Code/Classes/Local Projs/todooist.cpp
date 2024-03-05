#include <iostream>
#include <iomanip>
#include <string>   

using namespace std;
int main ()
{   
    //this is a to do list progrmm 
    int i=1;
    string task[i] ;
    int choice;
    // by this program tyou can add 100 task but this is more than enough for now
    cout<<setw(100)<<"\n\tTO DO LIST...";
    Ch_phase :
    {cout<<"\n1.Enter A Task ";
    cout<<"\n2.View List"<<endl;
    cin>>choice ;
    }
   if(choice==1)
   {
    cout<<"\n Enter The Task :"<<endl;
    cin>>task[i];
    getline(cin,task[i]);
    goto Ch_phase;
   }

    else if (choice==2)
    {
        cout<<task;
        goto Ch_phase;
    }
    
    else
    {
        cout<<"Invaild choice";
        // goto Ch_phase ;
    } 

// switch block
// switch (choice)
// {
// case 1:
//      cout<<"\n Enter The Task :"<<endl;
//      getline(cin, task);
//      goto Ch_phase;
//      break;
//     case 2:
//         cout<<task;
//     default :
//         cout<<"\nInvaild Input ";
//         break;


// }



return 0;
}