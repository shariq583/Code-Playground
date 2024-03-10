// #include<iostream>
// #include<fstream>
// #include <string>
// using namespace std;
// int main()
// {
//     ifstream file("fileIoExp.txt");
//     string input ;
//     string line;
//         if (!file.is_open()) {
//         cout << "Error opening file." << endl;
//         return 1;
//         }
//     std::cout << "Enter The value you want to search :";
//     cin>>input;

//     while (getline(file,line))
//     {
//         if (input==line)
//         {
//             std::cout <<"the line you searched for is :" << line << std::endl;
//             break;
//         }
//         else if(line != input)
//         {
//             std::cout << "..." << std::endl;
//         }
//     }
// }
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

void main() {
    ifstream file("fileIoExp.txt");
    if (!file.is_open()) {
        cout << "Error opening file." << endl;
    }

    string input;
    string line;
    cout << "Enter the value you want to search: ";
    getline(cin, input);

    while (getline(file, line)) {
        if (line.find(input) != string::npos) {
            cout << "The line you searched for is: " << line << endl;
            break;
        }
        else
        {
            std::cout << "The word " << input <<" is not found in the file " <<std::endl;
            
        }
    }

    file.close(); // Close the file
}

