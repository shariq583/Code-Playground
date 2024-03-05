#include<iostream>
#include<fstream>
#include<string>
using namespace std;
int main()
{
    // Writing to a file !
    string name;
    std::cout << "Enter Your name :" << std::endl;
    cin>>name;
    ofstream nameInp("fileIo2.txt");
    nameInp<<"The name entered is "+name;
    nameInp.close();
    ifstream nameOut("fileIo2.txt");
    string nameIn;
    while (nameOut.eof()==0)
    {
        nameOut>>nameIn;
        getline(nameOut,nameIn);
        cout<<"The Content of this file is :\n"<<nameIn;
        
    }
    
}