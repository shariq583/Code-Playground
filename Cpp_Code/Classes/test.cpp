// #include <iostream>
// #include <string>

// using namespace std;

// int main() {
//     // std::cout << "Enter a sentence: ";

//     // // Declare a string variable to store the input
//     // std::string sentence;

//     // // Use getline to read the entire line, including spaces
//     // std::getline(std::cin, sentence);

//     // // Display the input
//     // std::cout << "You entered: " << sentence << std::endl;

//     // string sentence ;
//     // cout<<"\nEnter a sentence :";
//     // getline(cin,sentence);
//     // cout<<"\n "<<sentence;
//     // //test succesfull :)














//     return 0;
// }

#include <iostream>
#include <list>
#include <string>
using namespace std;

int main() {
    // Declare a list of integers
    std::list<string> myList;

    // Add elements to the list
    myList.push_back("shariq shayan");
    myList.push_back("rayan farzan ");
    myList.push_back("AJ inaya");

    // Iterate through the list and print its elements
    for (const auto& element : myList) {
        std::cout << element << " ";
    }
    // cout<<element ;

    return 0;
}





