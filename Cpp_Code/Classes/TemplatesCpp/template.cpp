#include<iostream>
using namespace std;
#pragma GCC diagnostic push
// Your code with the comparison that triggers the warning
#pragma GCC diagnostic pop

template <class T>
class vector {
public:
    int size = 3;
    T *vecArr; // Pointer to int array

    vector(T i, T j, T k) {
        vecArr = new T[size]; // Allocate memory for the pointer
        vecArr[0] = i;
        vecArr[1] = j;
        vecArr[2] = k;
    }

    T dotProduct(vector &a) { // Changed the parameter to be passed by reference
        T d = 0; // Initialize d to 0
        for (int i = 0; i < size; i++) {
            d += (this->vecArr[i]) * (a.vecArr[i]); // Access vecArr using index i
        }
        return d;
    }
};

int main() {
    vector <float> v1(2.5, 3, 4);
    vector <float> v2(5, 6, 8);
    float result = v1.dotProduct(v2);
    std::cout << "The Result is: " << result << std::endl;
    return 0;
}
