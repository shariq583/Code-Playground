#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    string InpPass;
    string Pass = "Insan253";
    ifstream filePassIn("rockyou.txt");
    while (filePassIn.eof()==0)
    {
        getline(filePassIn,InpPass);
        if (InpPass==Pass)
        {
            std::cout << "The Password is :" << InpPass<<std::endl;
        }
        else if(InpPass!=Pass && filePassIn.eof()==0)
        {
            std::cout << "Checking..." << std::endl;
        }
        else if(InpPass!=Pass && filePassIn.eof()!=0)
        {
            std::cout << "Password Not Found!" << std::endl;
        }
    }
    filePassIn.close();
    return 0;
}