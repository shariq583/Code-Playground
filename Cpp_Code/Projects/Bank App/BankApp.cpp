#include <iostream>
#include <string>
using namespace std;
class AdminDash;
class cred {
protected:
    string adminPin;
    string adminAccNo;

public:
    string userPin;
    string userAccNo;
    cred() {
        userPin = "0000";
        adminPin = "0000";
    }
    void setUserAccNo(string inpUserAccNo) {
        userAccNo = inpUserAccNo;
    }
    void setUserPin(string inpUserPin) {
        userPin = inpUserPin;
    }
    void setAdminAccNo(string inpAdminAccNo) {
        adminPin = inpAdminAccNo;
    }
    void setAdminPin(string inpAdminPin) {
        adminPin = inpAdminPin;
    }
    int UserCheckAccNo(string icheckNo) {
        if (userAccNo == icheckNo) {
            return 1;
        }
        else {
            return 0;
        }
    }
    int UserCheckPin(string icheckPin ) {
        if (userPin == icheckPin ) {
            return 1;
        }
        else {
            return 0;
        }
    }
    int AdminCheckAccNo(string icheckNo) {
        if (adminAccNo == icheckNo) {
            return 1;
        }
        else {
            return 0;
        }
    }
    int AdminCheckPin(string icheckPin ) {
        if (adminPin == icheckPin ) {
            return 1;
        }
        else {
            return 0;
        }
    }
    void UserCredDisplay()
    {
        cout<<"Your Acc. No. is "<<userAccNo<<endl;
    }
};
class AdminDash  {
    private:
        string intrRate = "4";

    protected:
        string IntrMon;

    public:
        string SavMon;
        void AInitMon(int tempMon) {
            SavMon = to_string(tempMon);
        }
        void AIntrMonSet() {
            IntrMon = to_string(stoi(SavMon) + stoi(intrRate) / 100);
        }
        void AsearchUser(string userInp , cred *tempInp, UserInfo *tempUser){
            if((tempInp->userAccNo)==userInp)
            {
                AdMainDisp(tempInp,tempUser);
            }
            else
            {
                std::cout << "No Such Account No." << std::endl;
            }
            
        }
        void AdMainDisp(cred* tempInp,UserInfo*tempUser){
            std::cout << "The UserNo is :" <<tempInp->userAccNo<< std::endl;            
            std::cout << "The Password is :" <<tempInp->userPin<< std::endl;  
            std::cout << "The Cash In this account is :" <<tempUser->SavMon << std::endl;          
        }
};

class UserInfo  :public AdminDash{
    
    public:
        void UInitMon (string funcMon)
        {
            SavMon = funcMon;
        }
        void UserDisplay ()
        {
            std::cout << "The Money In Your Account is :" << SavMon << std::endl;
        }

};



int Mchoice;

int main() {
    // Variables and objects
    // Choice Vars
    int Uchoice;
    int Achoice;
    // User Cred Vars
    string UPin_S;
    string UAccNo_S;
    string UPin_L;
    string UAccNo_L;
    cred Ucred;
    cred * ptrUcred=&Ucred;

    // User Info Vars
    UserInfo User ;
    UserInfo * UserPtr = &User;

    // Admin Cred Vars
    string APin_S;
    string AAccNo_S;
    string APin_L;
    string AAccNo_L;
    cred Acred;

    // AdminDash Vars
    AdminDash Admin;


    std::cout << "=========" << std::endl;
    std::cout << "Bank App" << std::endl;
    std::cout << "=========" << std::endl;
    MainLogin:
    // FIrst Choice User/Admin
    {
        std::cout << "Who are you ?" << std::endl;
        std::cout << "1.User..." << std::endl;
        std::cout << "2.Admin..." << std::endl;
        std::cout << "3.Exit...." << std::endl;
        cin >> ::Mchoice;
    }
do
{
    
    switch (Mchoice) {
    case 1: // User Page
        std::cout << "1.Sign Up!" << std::endl;
        std::cout << "2.Log In!" << std::endl;
        std::cout << "3.Back" << std::endl;
        cin >> Uchoice;
        switch (Uchoice) {
        case 1: // Sign Up
        {
            cout << "Enter A Account No.";
            cin >> UAccNo_S;
            Ucred.setUserAccNo(UAccNo_S);
            cout << "Set A Account Pin";
            cin >> UPin_S;
            Ucred.setUserPin(UPin_S); 
            goto UserLogin;           
            break;
        }

        case 2: // Login Page
        {
            UserLogin :
            int tempPL, tempNL;
            std::cout << "Enter Your account number" << std::endl;
            cin >> UAccNo_L;
            tempNL = Ucred.UserCheckAccNo(UAccNo_L);
            std::cout << "Enter Your account Pin" << std::endl;
            cin >> UPin_L;
            tempPL = Ucred.UserCheckPin(UPin_L );
            if (tempPL == 1) {
                std::cout << "Autherized!!" << std::endl;
                string tempSav;
                if ((User.SavMon) <= "0" )
                {
                    system("cls");                    
                    std::cout << "How much money would you like to deposite ??" ;
                    cin>>tempSav;
                    User.UInitMon(tempSav);
                }
                std::cout << "Your Account Details :" << std::endl;
                Ucred.UserCredDisplay();
                User.UserDisplay();                
            }
            else {
                /* code */
                cout<<"\nUnatherized!";
                cout<<"\n============";
                goto MainLogin;
            }
            goto MainLogin;
            break;
        }
        case 3:
        {
            goto MainLogin;
        }
        default: // UserChoice
            std::cout << "Wrong Choice!" << std::endl;
            break;
        }
        break;
    case 2: // Admin Page
    {
        std::cout << "1.Sign Up!" << std::endl;
        std::cout << "2.Log In!" << std::endl;
        cin >> Achoice;
        switch (Achoice) {
        case 1: // Sign up Admin!
            cout << "Enter A Account No.";
            cin >> AAccNo_S;
            Acred.setAdminAccNo(AAccNo_S);
            cout << "Set A Account Pin";
            cin >> APin_S;
            Acred.setAdminPin(APin_S);
            

        case 2: // Login Admin
        {
            int tempPLA, tempNLA;
            std::cout << "Enter Your account number" << std::endl;
            cin >> AAccNo_L;
            tempNLA = Acred.UserCheckAccNo(AAccNo_L);
            std::cout << "Enter Your account Pin" << std::endl;
            cin >> APin_L;
            tempPLA = Acred.AdminCheckPin(APin_L);
            if (tempPLA == 1) 
            {
                int ASubChoice;

                std::cout << "Autherized As A adim!" << std::endl;
                std::cout << "What Do You Want to Do?" << std::endl;
                std::cout << "=======================" << std::endl;
                std::cout << "1.Check/Change An Accountt Info" << std::endl;
                std::cout << "2.Back To Main" << std::endl;
                cin>>ASubChoice;
                    if (ASubChoice == 1)
                    {
                        string tempInpCheck;
                        cout<<"\nEnter Account Number: ";
                        cin>>tempInpCheck;
                        Admin.AsearchUser(tempInpCheck,ptrUcred,UserPtr);
                    }
            }
            else {
                std::cout << "Unautherized!" << std::endl;
                std::cout << "=============" << std::endl;
                std::cout << tempPLA<< std::endl;
            }
        }
        break;
        }
    default: // MasterChoice
        break;
    }
    }
// Code will end here!
} 
while(::Mchoice <= 2);
}