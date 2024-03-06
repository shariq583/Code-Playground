//the binary number checking and inversion fuction using classes
#include <iostream>
#include <string>
using namespace std;
class bin 
{
    string num;

    public :
        void read();
        void chk();
        void inv();
        void master();
};
void bin :: read()
{
    cout<<"\nEnter a binary number";
    cin>>num;
}
void bin :: chk()
 {
    for (int i =0 ; i< num.length() ; i++)
    {
        if (num.at(i)!='0' && num.at(i)!='1')
            {
              cout<<"Not a binary number!";
              return ;
            }
        
        
    }

}
void bin:: inv()
{
    for (int i = 0; i < num.length(); i++)
    {
        if (num.at(i)=='0')
            {
                num.at(i)='1';
            }
        else 
            {
                num.at(i)='0';
            }
    }



}
 void bin ::master()
 {
    
    for (int i=0 ; i<num.length();i++){
        cout<<num.at(i);
    }
 }


int main ()
{
    bin a;
    a.read();
    a.chk();
    cout<<"\nThe inverted binary number is :";
    a.inv();
    a.master();
 
    return 0;
}