#include <iostream>
using namespace std;
class Shop
{
    int itemId[100];
    int item_Pr[100];

public:
    int counter;
    void initCounter() { counter = 0; }
    void setPrice();
    void dispPrice();
};
void Shop::setPrice()
{
    cout << "\nEnter Id of item :";
    cin >> itemId[counter];
    cout << "\nEnter it's price of item :";
    cin >> item_Pr[counter];
    counter++;
}
void Shop ::dispPrice()
{
    for (int i = 0; i < counter; i++)
    {
        cout << "\n"<< i + 1 << ".The price of item with Id " << itemId[i] << " is :" << item_Pr[i] << " Rs";
    }
}
int main()
{
    Shop dukaan;
    int products;
    cout<<"\n======================";
    cout<<"\nShop managing Software";
    cout<<"\n======================";
   cout << "\nHow many products do you have";
    cin >> products;
    dukaan.initCounter();
    for (int i = 0; i < products; i++)
    {
        dukaan.setPrice();
    }
    
    dukaan.dispPrice();

    return 0;
}