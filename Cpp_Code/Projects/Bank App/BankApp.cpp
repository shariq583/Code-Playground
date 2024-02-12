#include <iostream>
using namespace std;
class AdminDash;
class cred
{
    protected :
    string userPin;
    string adminPin;
    string adminAccNo;
    public :
    string userAccNo;
    cred()
    {
        userPin = "0000";
        adminPin = "0000";
    }
    void setUserAccNo(string inpUserAccNo)
    {
        userAccNo = inpUserAccNo;
    }
    void setUserPin(string inpUserPin)
    {
        userPin = inpUserPin;
    }
    void setAdminAccNo(string inpAdminAccNo)
    {
        adminPin = inpAdminAccNo;
    }
    void setAdminPin(string inpAdminPin)
    {
        adminPin = inpAdminPin;
    }
    int UserCheckAccNo (string icheckNo)
    {
        if (userAccNo == icheckNo)
        {
            return 1;
        }
        else 
        {
            return 0;
        }
        
    }
    int UserCheckPin (string icheckPin)
    {
           if (userAccNo == icheckPin)
        {
            return 1;
        }
        else 
        {
            return 0;
        }
    }
};
class AdminDash : public cred , protected UserInfo
{
    private :
    string intrRate="4";
    protected :
    string SavMon;
    string IntrMon;
    public :
        void InitMon(int tempMon)
        {
            SavMon = tempMon;
        }
        void IntrMonSet()
        {
            IntrMon = ((stoi(SavMon))+(stoi(intrRate))/(100));
        }
        void AdDisplay(cred temp)
        {
           std::cout << "The User A/c No. is:" <<temp.userAccNo << std::endl;
        }

};
class UserInfo : public cred , protected AdminDash
{
    protected :
    public :
    


};

int main()
{
    // Variables and objects 
    // Choice Vars
    int Mchoice;
    int Uchoice;
    int Achoice;
    //User Vars
    string UPin_S;
    string UAccNo_S;
    string UPin_L;
    string UAccNo_L;
    cred Ucred;
    // Admin Vars
    string APin_S;
    string AAccNo_S;
    string APin_L;
    string AAccNo_L;
    cred Acred;

    std::cout << "=========" << std::endl;
    std::cout << "Bank App" << std::endl;
    std::cout << "=========" << std::endl;

    std::cout << "Who are you ?" << std::endl;
    std::cout << "1.User..." << std::endl;
    std::cout << "2.Admin..." << std::endl;
    cin >> Mchoice;

    switch (Mchoice)
    {
    case 1: //User Page
        std::cout << "1.Sign Up!" << std::endl;
        std::cout << "2.Log In!" << std::endl;
        cin >> Uchoice;
        switch (Uchoice)
            {
            case 1: //Sign Up
                cout<<"Enter A Account No.";                
                cin>>UAccNo_S;
                Ucred.setUserAccNo(UAccNo_S);
                cout<<"Set A Account Pin";
                cin>>UPin_S;
                Ucred.setUserPin(UPin_S);
                break;
            
            case 2: //Login Page
            {
                int tempPL , tempNL;
                std::cout << "Enter Your account number" << std::endl;
                cin>>UAccNo_L;
                tempNL=Ucred.UserCheckAccNo(UAccNo_L);
                std::cout << "Enter Your account Pin" << std::endl;
                cin>>UPin_L;
                tempPL=Ucred.UserCheckAccNo(UPin_L);
                if (tempPL == 0)
                {
                    // code to be put.
                }
                else
                {
                    /* code */
                }
                
            }

            default: //UChoice
                std::cout << "Wrong Choice!" << std::endl;
                break;
             }
            break;
    case 2: // Admin Page
    {
        std::cout << "1.Sign Up!" << std::endl;
        std::cout << "2.Log In!" << std::endl;
        cin >> Achoice;
        switch (Achoice)
            {
            case 1://Sign up!
                cout<<"Enter A Account No.";                
                cin>>AAccNo_S;
                Acred.setAdminAccNo(AAccNo_S);
                cout<<"Set A Account Pin";
                cin>>APin_S;
                Acred.setUserPin(APin_S);
                break;
            
            case 2://Login 
            {
                int tempPLA , tempNLA;
                std::cout << "Enter Your account number" << std::endl;
                cin>>AAccNo_L;
                tempNLA=Acred.UserCheckAccNo(AAccNo_L);
                std::cout << "Enter Your account Pin" << std::endl;
                cin>>APin_L;
                tempPLA=Acred.UserCheckAccNo(APin_L);
                if (tempPLA == 0)
                {
                    // code to be put....
                }
                else
                {
                    // code to be put...
                }
                
            }
    }

    default: //Mchoice
        break;
    }
}