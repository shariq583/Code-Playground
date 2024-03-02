#include<iostream>
#include <fstream>
using namespace std;
int main()
{
    // Output to the file 
    // ofstream out("fileIoBasics.txt");
    // string strOut="Shariq Gazdar";
    // out<<strOut;
    // Reading the file 
    string strIn;
    ifstream in("fileIoBasics.txt");
    // in>>strIn;
    // getline(in,strIn);
    getline(in,strIn);
    std::cout<< strIn << std::endl;


    
}