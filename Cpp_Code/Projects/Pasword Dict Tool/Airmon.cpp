#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    string InpPass;
    string Pass = "Shariq";
    ifstream filePassIn("rockyou.txt");
    int sucStat=0;
    while (filePassIn.eof()==0)
    {
     getline(filePassIn,InpPass);
        if (InpPass==Pass)
        {
            std::cout << "The Password is :" << InpPass<<std::endl;
            sucStat++;
            filePassIn.close();
        }
        else if(InpPass!=Pass && filePassIn.eof()==0)
        {
            std::cout << "Checking..." << std::endl;
        }
        else if(InpPass!=Pass && filePassIn.eof()==0)
        {
            std::cout << "Password Not Found!" << std::endl;
            break;
        }
    }
    if (sucStat==0)
    {
        std::cout << "Password Not Found!" << std::endl;
    }
    
    filePassIn.close();
    return 0;
}